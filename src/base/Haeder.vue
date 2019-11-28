<template>
  <div class="header">

<!--    <span v-show="bool" class="icon-icon&#45;&#45;fanhui  iconfont" @click="back"></span>-->
    <i class="icon-icon--fanhui  iconfont" @click="back"></i>
    <slot class="slot">默认的</slot>
  </div>
</template>

<script>
    export default {
        name: "Haeder",
      data(){
         return{}
      },
      props:{
          bool:{type:Boolean,default:false}
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
    background:#FDCD42;
    width: 100%;
    height: 3rem;
    border-radius:.1rem;
    line-height: 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    i{
    padding-left: 1rem;
    float: left;
    font-size: 1.2rem;
    color: white;
  }
  }

</style>
