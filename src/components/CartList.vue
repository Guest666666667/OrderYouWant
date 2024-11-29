<template>
    <div class="CartList">
        <Row>
            <Col span="2">
            </Col>
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
            <Col span="2">
            </Col>
        </Row>
    </div>
</template>

<script lang="ts" setup>

import { Card, Col, Row } from 'vant';
import { onActivated, computed } from 'vue';
import { useStore } from 'vuex';
import type { MenuItem } from '../types/types';
const store = useStore();
const itemQuantities = computed(() => store.getters['itemQuantities']);
onActivated(() => {
    console.log("hi!")
})
const updateOrderNum = (item: MenuItem, change: number) => {
    store.commit('updateItemQuantity', { id: item.id, change });
}
</script>

<style scoped lang="scss">
.CartList {
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
}
</style>