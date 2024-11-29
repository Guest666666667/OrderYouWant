<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.path"/>
    </keep-alive>
  </router-view>
  <Tabbar route>
    <TabbarItem replace to="/menu" icon="home-o">菜单</TabbarItem>
    <TabbarItem replace to="/cart" icon="cart-o">购物车</TabbarItem>
  </Tabbar>
</template>
<script lang="ts" setup>
import { Tabbar, TabbarItem } from 'vant';
</script>
<style lang="scss"></style>
