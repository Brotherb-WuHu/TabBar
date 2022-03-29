<template>
  <div class="Tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="itemIcon"></slot>
    </div>
    <div v-else>
      <slot name="itemIconActived"></slot>
    </div>
    <!-- 没错！直接动态绑定样式！ -->
    <div :style="activeStyle">
      <slot name="itemText"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "TabBarItem",
  // 在别人用组件的时候传入，属于父传子
  props: {
    link: String,
    // 动态使用颜色，v-bind 使用动态绑定属性
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // 这个是写死的，要想办法动态知道当前是谁在active
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      // 1.$route.path 当前活跃路由的 path  例如 /home
      // 2.indexOf(this.link) 判断当前活跃路由的 path 有没包含 当前的 item 的 path (这里叫link)
      // 3.indexOf() 没有包含当前 path 则返回 -1 ,若有包含当前 path 则返回 不是-1
      // -1 !== -1 所以返回的是个 true 反之则 false
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      // 当 item 被激活时,绑定传过来的属性，当它没被激活时，不绑定属性
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.isActive = !this.isActive;
      // 路径由父组件传，用 props
      this.$router.replace(this.link);
    },
  },
};
</script>

<style>
.Tabbar-item {
  flex: 1;
  text-align: center;

  /* 很多移动app bar用的都是 height:49px */
  height: 49px;

  font-size: 14px;
  margin-top: 3px;

  /* 图片下方会自带空间，希望自己设置margin-bottom，用这个去掉 */
  vertical-align: middle;

  margin-bottom: 2px;
}
.Tabbar-item img {
  width: 24px;
  height: 24px;
}

/* 实现颜色动态修改 */
/* 
.active {
  color: pink;
} */
</style>