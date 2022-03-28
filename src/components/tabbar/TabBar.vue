<template>
  <div id="Tabbar">
    <div class="Tabbar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" />
      <div>首页</div>
    </div>
    <div class="Tabbar-item">
      <img src="../../assets/img/tabbar/category.svg" alt="" />
      <div>分类</div>
    </div>
    <div class="Tabbar-item">
      <img src="../../assets/img/tabbar/shopcart.svg" alt="" />
      <div>购物车</div>
      <div class="Tabbar-item">
        <img src="../../assets/img/tabbar/profile.svg" alt="" />
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.Tabbar-item {
  flex: 1;
  text-align: center;
  /* 很多移动app bar用的都是 height:49px */
  height: 49px;
}
.Tabbar-item img {
  width: 24px;
  height: 24px;
}
</style>