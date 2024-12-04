<template>
  <div class="MenuView" @scroll="handleScroll">
    <Row>
      <Col span="6">
      <Sidebar v-model="active" @change="scrollToCategory">
        <SidebarItem v-for="(category, index) in menuData" :key="index" :title="category.name" />
      </Sidebar>
      </Col>
      <Col span="18">
      <div v-for="(category, index) in menuData" :key="index">
        <Divider :ref="el => categoryRefs[index] = (el as any).$el">{{ category.name }}</Divider>
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
import { Sidebar, SidebarItem, Divider, Card, Col, Row } from 'vant';
import { computed, ref, onMounted } from 'vue';
import type { Category, MenuItem } from '../types/types';
import { useStore } from 'vuex';

const store = useStore();
const active = ref(0);
const menuData = ref<Category[]>([]);
const itemArray: MenuItem[] = [];
const itemQuantities = computed(() => store.getters['itemQuantities']);
const categoryRefs = ref<(HTMLElement | null)[]>([]);

onMounted(async () => {
  const response = await fetch(`${process.env.BASE_URL}menu.json`);
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

const scrollToCategory = (index: number) => {
  const categoryElement = categoryRefs.value[index];
  if (categoryElement !== null) {
    categoryElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleScroll = () => {
  console.log("handleScroll")
  // const scrollPosition = (document.querySelector('.subMenu') as HTMLElement).scrollTop;
  // console.log(scrollPosition)
  // let closestIndex = 0;
  // let minDistance = Infinity;

  // categoryRefs.value.forEach((ref, index) => {
  //   if (ref) {
  //     const offsetTop = ref.offsetTop;
  //     const distance = Math.abs(offsetTop - scrollPosition);
  //     console.log(distance)
  //     if (distance < minDistance) {
  //       minDistance = distance;
  //       closestIndex = index;
  //     }
  //   }
  // });
  // active.value = closestIndex;
};

const updateOrderNum = (item: MenuItem, change: number) => {
  store.commit('updateItemQuantity', { id: item.id, change });
}
</script>

<style scoped lang="scss">
.MenuView {
  .van-sidebar {
    position: fixed;
    width: 25%;
    height: 100vh;
    background-color: #f7f8fa
  }

  .van-divider {
    margin: 0;
    padding-top: 10px;
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

  .blank {
    height: 50px;
  }
}
</style>