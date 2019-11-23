<template>
  <div class="header">
    <span class="icon-icon--fanhui  iconfont" @click="back"></span>
    <slot class="slot">默认的</slot>
  </div>
</template>

<script>
    export default {
        name: "Haeder",
      data(){
         return{}
      },
      methods:{
         back:function () {
           this.$router.back()
         }
      }
    }
</script>

<style lang="less" scoped>
  .header{
    background:#4DD7F9F9;
    width: 100%;
    height: 3rem;
    /*font-size: 1.2rem;*/
    border-radius:.1rem;
    line-height: 3rem;
    font-size: 1.5rem;
    position: fixed;
    top: 0;
    font-weight: bold;
    span{
      padding-left: .5rem;
      float: left;
      font-size: 1.2rem;
      color: white;
    }
  }
</style>
