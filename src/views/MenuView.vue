<template>
  <div class="MenuView">
    <Row>
      <Col span="6">
      <Sidebar v-model="active" @change="scrollToCategory">
        <SidebarItem v-for="(category, index) in menuData" :key="index" :title="category.name"
          :badge="categoryTotals[index + 1] ? categoryTotals[index + 1] : undefined" />
      </Sidebar>
      </Col>
      <Col span="18">
      <div v-for="(category, index) in menuData" :key="index" @mousewheel="handleScroll('pc')"
        @touchmove="handleScroll('mob')" class="subMenu" :ref="(el => categoryRefs[index] = el as HTMLElement)">
        <Divider>{{ category.name }}</Divider>
        <Card v-for="(item, itemIndex) in category.items" :key="itemIndex" :num="item.quantity" :price="item.price"
          :origin-price="item.originalPrice" :desc="item.description" :title="item.title" :lazy-load="true"
          v-lazy="item" :thumb="item.image">
          <template #tags>
            <van-tag v-for="(tag, tagIndex) in item.tags" :key="tagIndex" plain type="primary">{{ tag }}</van-tag>
          </template>
          <template #footer>
            <div class="counter">
              <van-button round class="num_button"
                :disabled="!itemQuantities[item.id] || itemQuantities[item.id]?.orderNum == 0" size="mini"
                @click="updateOrderNum(item, -1)">-</van-button>
              <span>{{ itemQuantities[item.id]?.orderNum ? itemQuantities[item.id].orderNum : 0 }}</span>
              <van-button round class="num_button" :disabled="itemQuantities[item.id]?.orderNum == 9" size="mini"
                @click="updateOrderNum(item, 1)">+</van-button>
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
import { Sidebar, SidebarItem, Divider, Card, Col, Row, Stepper } from 'vant';
import { computed, ref, onMounted, nextTick } from 'vue';
import type { Category, MenuItem } from '../types/types';
import { useStore } from 'vuex';

const store = useStore();
const active = ref(0);
const menuData = ref<Category[]>([]);
const itemArray: MenuItem[] = [];
const categoryTotals = computed(() => store.getters['categoryTotals']);
const itemQuantities = computed(() => store.getters['itemQuantities']);
const categoryRefs = ref<(HTMLElement | null)[]>([]);


onMounted(async () => {
  const response = await fetch(`./menu.json`);
  const data = await response.json();
  menuData.value = data.categories;
  menuData.value.forEach(
    category => {
      categoryTotals.value[category.id] = 0;
      category.items.forEach(item => {
        itemArray.push(item);
      });
    });
  store.commit('setItemArray', itemArray);
  await nextTick();
  scrollToCategory(0);
});

const scrollToCategory = (index: number) => {
  const categoryElement = categoryRefs.value[index];
  if (categoryElement !== null) {
    categoryElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleScroll = (type: string) => {
  const screenHeight = window.innerHeight;
  let closestIndex = active.value;
  let maxVisibleHeight = 0;
  const setclosestIndex = (ref: HTMLElement | null, index: number) => {
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const visibleHeight = Math.max(0, Math.min(rect.bottom, screenHeight) - Math.max(rect.top, 0));
      if (visibleHeight > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        closestIndex = index;
      }
    }
  }
  if (type == "mob") {
    categoryRefs.value.forEach((ref, index) => {
      setclosestIndex(ref, index)
    });
  } else {
    for (let offset = -1; offset <= 1; offset++) {
      const index = active.value + offset;
      if (index >= 0 && index < categoryRefs.value.length) {
        const ref = categoryRefs.value[index];
        setclosestIndex(ref, index)
      }
    }
  }
  active.value = closestIndex;
};

const updateOrderNum = (item: MenuItem, change: number) => {
  if (!itemQuantities.value[item.id]) {
    itemQuantities.value[item.id] = 0;
  }
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
      width: 24px;
      border-radius: 0px;
      font-size: 18px;
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