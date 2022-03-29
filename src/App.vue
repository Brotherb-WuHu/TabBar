<template>
  <div id="app">
    <router-view></router-view>

    <tab-bar>
      <tab-bar-item link="/home" activeColor="blue">
        <template #itemIcon>
          <img src="./assets/img/tabbar/home.svg" />
        </template>
        <template #itemIconActived>
          <img src="./assets/img/tabbar/home_active.svg" />
        </template>
        <template #itemText>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="green">
        <template #itemIcon>
          <img src="./assets/img/tabbar/category.svg" />
        </template>
        <template #itemIconActived>
          <img src="./assets/img/tabbar/category_active.svg" />
        </template>
        <template #itemText>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="/cart" activeColor="red">
        <template #itemIcon>
          <img src="./assets/img/tabbar/shopcart.svg" />
        </template>
        <template #itemIconActived>
          <img src="./assets/img/tabbar/shopcart_active.svg" />
        </template>
        <template #itemText>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <template #itemIcon>
          <img src="./assets/img/tabbar/profile.svg" />
        </template>
        <template #itemIconActived>
          <img src="./assets/img/tabbar/profile_active.svg" />
        </template>
        <template #itemText>
          <div>首页</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>


<script>
import TabBarItem from "@/components/tabbar/TabBarItem.vue";
import TabBar from "./components/tabbar/TabBar.vue";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {
      // isActive: false,
    };
  },
  methods: {
    itemClick() {
      console.log("itemclick");
      this.isActive = !this.isActive;
    },
  },
  computed: {
    isActive() {
      // 当前活跃路由的路径 和 当前页面的路径 做比对，如果不一样则 == -1，如果一样则 !== -1
      // /home ->item1(/home) ==true
      // /home ->item2(/category) ==false
      return this.$route.path.indexOf(this.path) == -1;
    },
  },
};
</script>

<style scoped>
/* 在css 引用时固定格式 */
@import "./assets/css/base.css";
</style>
