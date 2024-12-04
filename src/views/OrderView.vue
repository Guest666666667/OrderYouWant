<template>
    <div class="OrderView">
        <Empty image="error" v-show="!validOrder" description="无效的订单" />
        <Row class="blank"></Row>
        <Row>
            <Col span="2" />
            <Col span="20">
            <Card v-for="(item, itemIndex) in OrderItems" :key="itemIndex" :num="item.quantity * item.orderNum"
                :price="parseFloat(item.price) * item.orderNum"
                :origin-price="parseFloat(item.originalPrice) * item.orderNum" :desc="item.description"
                :title="item.title" :thumb="item.image">
                <template #tags>
                    <van-tag v-for="(tag, tagIndex) in item.tags" :key="tagIndex" plain type="primary">{{ tag
                        }}</van-tag>
                </template>
            </Card>
            </Col>
            <Col span="2" />
        </Row>
        <Row v-show="validOrder" justify="center">
            <span class="total">订单总额：</span>
            <RollingText :start-num="0" :target-num="25" :duration="1" stop-order="rtl" />
            <span class="total">.</span>
            <RollingText :text-list="textList" :duration="1" stop-order="rtl"/>
            <RollingText :text-list="textList" :duration="1" stop-order="rtl"/>


        </Row>
        <Row v-show="validOrder" justify="center">
            <van-button plain type="success" class="shareButton" @click="showShare = true">分享即可免费吃！</van-button>
        </Row>
    </div>
    <ShareSheet v-model:show="showShare" title="分享给大厨，免费吃大餐" :options="options" @select="onSelect" />
    <Overlay :show="showQrcode" @click="showQrcode = false">
        <div class="wrapper">
            <img :src="qrCodeDataUrl" alt="QR Code">
            <div class="qrcodeText">长按保存到相册</div>
        </div>
    </Overlay>
</template>

<script lang="ts" setup>

import { Empty, Card, Col, Row, ShareSheet, Overlay, RollingText, showSuccessToast } from 'vant';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { Category, MenuItem } from '../types/types';
import QRCode from 'qrcode';
import { convertBase62 } from "@/utils/base62";
const validOrder = ref(false)
const OrderItems = ref<MenuItem[]>([]);
const route = useRoute();
const showShare = ref(false);
const options = [
    { id: "link", name: '复制链接', icon: 'link' },
    { id: "qrcode", name: '二维码', icon: 'qrcode' },
];
const qrCodeDataUrl = ref('');
const showQrcode = ref(false);
const totalAmount = ref(0)
const textList = ref([
    '5',
    '6',
    '7',
    '8',
    '9',
    '1',
    '0',
]);
onMounted(() => {
    readLinkInfo();
});
const readLinkInfo = async () => {
    const info = route.query.info as string;
    let count = 0;
    OrderItems.value = [];
    const orderStr = convertBase62(info.split("_")[0], false);
    try {
        const infoAmount = info.split("_")[1]
        totalAmount.value = parseInt(convertBase62(infoAmount, false), 10) / 100;
        if (isNaN(totalAmount.value)) { throw new Error(); }
    } catch (err) {
        validOrder.value = false;
        return;
    }
    validOrder.value = true;
    const response = await fetch(`${process.env.BASE_URL}menu.json`);
    const data = await response.json();
    data.categories.forEach(
        (category: Category) => {
            category.items.forEach(item => {
                const orderNum = parseInt(orderStr[count], 10);
                if (!isNaN(orderNum) && orderNum !== 0) {
                    item.orderNum = orderNum;
                    OrderItems.value.push(item);
                }
                count++;
            });
        });
}
// watch for the link info change
watch(
    () => route.query.info,
    (newInfo, oldInfo) => {
        if (newInfo && (newInfo !== oldInfo)) {
            readLinkInfo();
        }
    }
);
const onSelect = (option: any) => {
    switch (option.id) {
        case "link": {
            copyToClipboard();
            break;
        }
        case "qrcode": {
            console.log("qrcode");
            getQrcode()
            break;
        }
    }
    showShare.value = false;
};
const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        showSuccessToast("已复制链接地址");
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};
const getQrcode = async () => {
    try {
        qrCodeDataUrl.value = await QRCode.toDataURL(window.location.href);
        showQrcode.value = true
    } catch (err) {
        console.error('Error generating QR Code:', err);
    }
}
</script>

<style scoped lang="scss">
.OrderView {
    .blank {
        height: 15px;
    }

    .counter {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .num_button {
            padding: 0 5px;
        }

        span {
            margin: 0 5px 0 10px;
        }
    }

    .van-submit-bar {
        bottom: 50px;
    }

    .total {
        line-height: 40px;
    }

    .shareButton {
        margin-top: 20px;
        width: 70%;
    }
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    .qrcodeText {
        width: 100%;
        text-align: center;
        margin-top: 10px;
    }
}
</style>