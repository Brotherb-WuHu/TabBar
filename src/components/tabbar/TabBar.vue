<template>
  <div id="Tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
/* 布局 */
#Tabbar {
  display: flex;
  background-color: #f2f2f2;

  /* 常见操作1 用于把 bar 拉到底下，很神奇*/
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px -3px 1px rgba(100 100, 100, 0.2);
}
</style>