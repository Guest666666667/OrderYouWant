<template>
    <div class="OrderView">
        <!-- <Empty v-show="totalQuantities == 0" description="快去选购吧！" /> -->
        <Row class="blank"></Row>
        <Row>
            <Col span="2">
            </Col>
            <Col span="20">
            <Card v-for="(item, itemIndex) in orderInfo?.items" :key="itemIndex" :num="item.quantity * item.orderNum"
                :price="parseFloat(item.price) * item.orderNum"
                :origin-price="parseFloat(item.originalPrice) * item.orderNum" :desc="item.description"
                :title="item.title" :thumb="item.image">
                <template #tags>
                    <van-tag v-for="(tag, tagIndex) in item.tags" :key="tagIndex" plain type="primary">{{ tag
                        }}</van-tag>
                </template>
            </Card>
            </Col>
            <Col span="2">
            </Col>
        </Row>
    </div>
</template>

<script lang="ts" setup>

import { Empty, Card, Col, Row } from 'vant';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { OrderInfo } from '../types/types';
const orderInfo = ref<OrderInfo | null>(null);
const route = useRoute();
onMounted(() => {
    const info = route.query.info as string;
    if (info) {
        orderInfo.value = JSON.parse(decodeURIComponent(info));
    }
});
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
}
</style>