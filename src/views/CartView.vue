<template>
    <div class="CartView">
        <Empty v-show="totalQuantities == 0" description="快去选购吧！" />
        <Row>
            <Col span="2" />
            <Col span="20">
            <Card v-for="(item, itemIndex) in itemQuantities" :key="itemIndex"
                :num="item.quantity * itemQuantities[item.id].orderNum"
                :price="item.price * itemQuantities[item.id].orderNum"
                :origin-price="item.originalPrice * itemQuantities[item.id].orderNum" :desc="item.description"
                :title="item.title" :thumb="item.image">
                <template #tags>
                    <van-tag v-for="(tag, tagIndex) in item.tags" :key="tagIndex" plain type="primary">{{ tag
                        }}</van-tag>
                </template>
                <template #footer>
                    <div class="counter">
                        <van-button round class="num_button" size="mini"
                            @click="updateOrderNum(item, -1)">-</van-button>
                        <span>{{ itemQuantities[item.id].orderNum }}</span>
                        <van-button round class="num_button" size="mini" @click="updateOrderNum(item, 1)">+</van-button>
                    </div>
                </template>
            </Card>
            </Col>
            <Col span="2" />
        </Row>
        <Row class="blank"></Row>
        <Row>
            <SubmitBar :price="totalAmount" :disabled="totalAmount == 0" button-text="下单" @submit="onSubmit" />
        </Row>
    </div>
</template>

<script lang="ts" setup>

import { Empty, Card, Col, Row, SubmitBar, showLoadingToast } from 'vant';
import { computed } from 'vue';
import { useStore } from 'vuex';
import type { MenuItem } from '../types/types';
import { useRouter } from 'vue-router';
import { convertBase62 } from "@/utils/base62";
const store = useStore();
const router = useRouter();
const itemArray = computed(() => store.getters['itemArray']);
const itemQuantities = computed(() => store.getters['itemQuantities']);
const totalQuantities = computed(() => store.getters['totalQuantities']);
const totalAmount = computed(() => store.getters['totalAmount']);
const updateOrderNum = (item: MenuItem, change: number) => {
    store.commit('updateItemQuantity', { id: item.id, change });
}
const onSubmit = () => {
    showLoadingToast({
        duration: 600,
        forbidClick: true,
        message: '下单中...',
        onClose: jumpToOrderPage,
    });
};
const jumpToOrderPage = () => {
    let orderStr = itemArray.value.map((item: MenuItem) => item.orderNum).join('');
    console.log(orderStr, totalAmount.value)
    let encodedOrderStr = convertBase62(orderStr, true) + "_" + convertBase62(totalAmount.value, true);
    router.push({ name: 'order', query: { info: encodedOrderStr } });
}
</script>

<style scoped lang="scss">
.CartView {
    .blank {
        height: 100px;
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
}
</style>