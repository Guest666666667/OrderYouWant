<template>
    <div class="CartView">
        <Empty v-show="totalQuantities == 0" description="快去选购吧！" />
        <Row class="smallBlank"></Row>
        <Row v-show="totalQuantities != 0">
            <Col span="2" />
            <Col span="20">
            <checkBoxs />
            </Col>
            <Col span="2" />
        </Row>
        <Row>
            <Col span="2" />
            <Col span="20">
            <Card v-for="(item, itemIndex) in itemQuantities" :key="itemIndex"
                :num="item.quantity * itemQuantities[item.id].orderNum"
                :price="(item.price * itemQuantities[item.id].orderNum).toFixed(2)"
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
                        <van-button round class="num_button" size="mini"
                            :disabled="itemQuantities[item.id].orderNum == 9"
                            @click="updateOrderNum(item, 1)">+</van-button>
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

import { Empty, Card, Col, Row, SubmitBar, showConfirmDialog, showLoadingToast } from 'vant';
import { computed } from 'vue';
import { useStore } from 'vuex';
import type { MenuItem } from '../types/types';
import { useRouter } from 'vue-router';
import { convertBase62 } from "@/utils/base62";
import checkBoxs from '@/components/checkBoxs.vue';
const store = useStore();
const router = useRouter();
const itemArray = computed(() => store.getters['itemArray']);
const itemQuantities = computed(() => store.getters['itemQuantities']);
const totalQuantities = computed(() => store.getters['totalQuantities']);
const totalAmount = computed(() => store.getters['totalAmount']);
const updateOrderNum = (item: MenuItem, change: number) => {
    if (item.orderNum + change == 0) {
        showConfirmDialog({
            title: '删除？',
            message:
                '将从购物车中移除这件商品',
            cancelButtonText: '我再想想',
        }).then(() => {
            store.commit('updateItemQuantity', { id: item.id, change });
        }).catch(() => { return });
    } else {
        store.commit('updateItemQuantity', { id: item.id, change });
    }
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
    let encodedOrderStr = convertBase62(orderStr, true);
    router.push({ name: 'order', query: { info: encodedOrderStr } });
}
</script>

<style scoped lang="scss">
.CartView {
    .smallBlank {
        height: 15px;
    }

    .blank {
        height: 100px;
    }

    .counter {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .num_button {
            width: 24px;
            border-radius: 0px;
            font-size: 18px;
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