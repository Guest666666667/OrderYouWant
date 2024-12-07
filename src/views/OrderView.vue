<template>
    <div class="OrderView">
        <Empty image="error" v-show="!validOrder" description="无效的订单" />
        <Row class="smallBlank"></Row>
        <Row>
            <Col span="2" />
            <Col span="20">
            <Card v-for="(item, itemIndex) in OrderItems" :key="itemIndex" :num="item.quantity * item.orderNum"
                :price="(parseFloat(item.price) * item.orderNum).toFixed(2)"
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
            <span class="basicFont originalFont">原价：</span>
            <span class="basicFont decimalFont originalFont">￥</span>
            <span class="basicFont originalFont">{{ originalAmount }}</span>
        </Row>
        <Row v-show="validOrder" justify="center">
            <span class="basicFont">订单总额：</span>
            <span class="basicFont decimalFont">￥</span>
            <RollingText :start-num="0" :target-num="integerPart" :duration="1" stop-order="rtl" class="integerFont" />
            <span class="basicFont decimalFont">.</span>
            <RollingText :text-list="decimalList_1" :duration="1" stop-order="rtl" class="decimalFont" />
            <RollingText :text-list="decimalList_2" :duration="1" stop-order="rtl" class="decimalFont" />
        </Row>
        <Row v-show="validOrder" justify="center">
            <van-button plain type="success" class="shareButton" @click="showShare = true">分享即享霸王餐！</van-button>
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
const originalAmount = ref(0)
let totalAmount = 0;
const integerPart = ref(0);
const decimalPart_1 = ref("");
const decimalPart_2 = ref("");
const decimalList_1 = ref<string[]>([]);
const decimalList_2 = ref<string[]>([]);
onMounted(() => {
    readLinkInfo();
});
const readLinkInfo = async () => {
    const info = route.query.info as string;
    const orderStr = convertBase62(info.split("_")[0], false);
    let count = 0;
    OrderItems.value = [];
    totalAmount = 0;
    originalAmount.value = 0;
    decimalList_1.value = [];
    decimalList_2.value = [];

    // Read menu and caculate amount
    const response = await fetch(`./menu.json`);
    const data = await response.json();
    data.categories.forEach(
        (category: Category) => {
            category.items.forEach(item => {
                const orderNum = parseInt(orderStr[count], 10);
                if (!isNaN(orderNum) && orderNum !== 0) {
                    item.orderNum = orderNum;
                    OrderItems.value.push(item);
                    totalAmount += parseFloat((parseFloat(item.price) * orderNum).toFixed(2));
                    originalAmount.value += parseFloat((parseFloat(item.originalPrice) * orderNum).toFixed(2));
                }
                count++;
            });
        });

    // Vaildate the infomation from link
    if (orderStr.length != count) {
        validOrder.value = false;
        OrderItems.value = [];
        totalAmount = 0;
        originalAmount.value = 0;
        return;
    }

    // Build decimal number animation array
    integerPart.value = Math.floor(totalAmount);
    const decimalPart = (totalAmount % 1).toFixed(2).substring(2);
    decimalPart_1.value = decimalPart.charAt(0);
    decimalPart_2.value = decimalPart.charAt(1);
    for (let i = 9; i >= 0; i--) {
        const num_1 = (parseInt(decimalPart_1.value) - i + 10) % 10;
        const num_2 = (parseInt(decimalPart_2.value) + i) % 10;
        decimalList_1.value.push(num_1.toString());
        decimalList_2.value.push(num_2.toString());
    }
    validOrder.value = true;

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
        showSuccessToast("链接已复制");
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
    .smallBlank {
        height: 15px;
    }

    .basicFont {
        line-height: 40px;
    }

    .originalFont {
        color: gray !important;
        text-decoration: line-through;
    }

    .integerFont {
        font-size: var(--van-submit-bar-price-integer-font-size);
        font-weight: var(--van-font-bold);
        color: var(--van-submit-bar-price-color);
    }

    .decimalFont {
        font-size: var(--van-submit-bar-price-font-size);
        font-weight: var(--van-font-bold);
        color: var(--van-submit-bar-price-color);
    }

    .van-submit-bar {
        bottom: 50px;
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