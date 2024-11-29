<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>
  <Tabbar v-if="route.path !== '/order'" route>
    <TabbarItem replace to="/menu" icon="home-o">菜单</TabbarItem>
    <TabbarItem replace to="/cart" v-show="totalQuantities == 0" icon="cart-o">购物车</TabbarItem>
    <TabbarItem replace to="/cart" v-show="totalQuantities > 0" :badge="totalQuantities" icon="cart-o">购物车</TabbarItem>
  </Tabbar>
</template>
<script lang="ts" setup>
import { Tabbar, TabbarItem } from 'vant';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
const store = useStore();
const totalQuantities = computed(() => store.getters['totalQuantities']);
const route = useRoute();
</script>
<style lang="scss"></style>
