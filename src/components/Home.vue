<template>
  <div class="home">
    <Haeder>
      <p>首页</p>
    </Haeder>
  </div>

</template>

<script>
  import Haeder from '../base/Haeder'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Haeder
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>



</style>
