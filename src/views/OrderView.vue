<template>
    <div class="OrderView">
        <Empty v-show="!validOrder" description="快去选购吧！" />
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
            <div class="total">订单总额：￥{{ totalAmount }}</div>
        </Row>
        <Row v-show="validOrder" justify="center">
            <van-button plain type="success" class="shareButton" @click="showShare = true">分享即可免费吃！</van-button>
        </Row>
    </div>
    <ShareSheet v-model:show="showShare" title="分享给大厨，免费吃大餐" :options="options" @select="onSelect" />
    <Overlay :show="showQrcode" @click="showQrcode = false">
        <div class="wrapper" @click.stop>
            <img :src="qrCodeDataUrl" alt="QR Code">
            <div class="qrcodeText">长按保存到相册</div>
        </div>
    </Overlay>
</template>

<script lang="ts" setup>

import { Empty, Card, Col, Row, ShareSheet, Overlay, showSuccessToast } from 'vant';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { Category, MenuItem } from '../types/types';
import QRCode from 'qrcode';
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
onMounted(async () => {
    const info = route.query.info as string;
    if (!info) return;
    validOrder.value = true
    const orderStr = info.split("%")[0];
    totalAmount.value = parseInt(info.split("%")[1], 10) / 100;
    const response = await fetch(`${process.env.BASE_URL}menu.json`);
    const data = await response.json();
    let count = 0;
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
});
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
        margin-top: 20px;
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