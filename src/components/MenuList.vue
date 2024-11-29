<template>
  <div class="MenuList">
    <Row>
      <Col span="6">
      <Sidebar v-model="active">
        <SidebarItem v-for="(category, index) in menuData" :key="index" :title="category.name" />
      </Sidebar>
      </Col>
      <Col span="18">
      <div v-for="(category, index) in menuData" :key="index" v-show="category.id == active + 1" class="subMenu">
        <Card v-for="(item, itemIndex) in category.items" :key="itemIndex" :num="item.quantity" :price="item.price"
          :origin-price="item.originalPrice" :desc="item.description" :title="item.title" :lazy-load="true"
          v-lazy="item" :thumb="item.image">
          <template #tags>
            <van-tag v-for="(tag, tagIndex) in item.tags" :key="tagIndex" plain type="primary">{{ tag }}</van-tag>
          </template>
          <template #footer>
            <div class="counter">
              <van-button round class="num_button" size="mini" @click="updateOrderNum(item, -1)">-</van-button>
              <span>{{ itemQuantities[item.id]?.orderNum ? itemQuantities[item.id].orderNum : 0 }}</span>
              <van-button round class="num_button" size="mini" @click="updateOrderNum(item, 1)">+</van-button>
            </div>
          </template>
        </Card>
      </div>
      <div class="blank"></div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { Sidebar, SidebarItem, Card, Col, Row } from 'vant';
import { computed, ref, onMounted } from 'vue';
import type { Category, MenuItem } from '../types/types';
import { useStore } from 'vuex';

const store = useStore();
const active = ref(0);
const menuData = ref<Category[]>([]);
const itemArray: MenuItem[] = [];
const itemQuantities = computed(() => store.getters['itemQuantities']);

onMounted(async () => {
  const response = await fetch('./menu.json');
  const data = await response.json();
  menuData.value = data.categories;
  menuData.value.forEach(
    category => {
      category.items.forEach(item => {
        itemArray.push(item);
      });
    });
  store.commit('setItemArray', itemArray);
});

const updateOrderNum = (item: MenuItem, change: number) => {
  store.commit('updateItemQuantity', { id: item.id, change });
}
</script>

<style scoped lang="scss">
.MenuList {
  .van-sidebar {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #f7f8fa
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
  .blank{
    height: 100px;
  }
}
</style>