<template>
  <div class="tab">
    <router-link to="/home" tag="div">
      <p class="iconfont icon-dianshi"></p>
      <span>推荐</span>
    </router-link>
    <router-link to="/viedo" tag="div">
      <p class="iconfont icon-dianshi"></p>
      <span>查看</span>
    </router-link>
    <router-link to="/gift" tag="div">
      <p class="iconfont icon-tuijian" ></p>
      <span>今日福利</span>
    </router-link>
    <router-link to="/books" tag="div">
      <p class="iconfont icon-shujia" ></p>
      <span>书架</span>
    </router-link>
    <router-link to="/my" tag="div">
      <p class="iconfont icon-wode"></p>
      <span>我的</span>
    </router-link>
  </div>

</template>

<script>
    export default {
        name: "Tab"
    }
</script>

<style lang="less"  scoped>
  .tab{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;

    div{
      flex: 1;
      /*background: saddlebrown;*/
      height: 3rem;
      background: #FCF99B;
    }
    div:hover{
      background: #FDCD42;
    }
    span{
      font-size: 1.2rem;
    }
    p{
      font-size: 1.3rem;
    }
  }


</style>
