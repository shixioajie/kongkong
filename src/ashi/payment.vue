<template>
    <div class="payment">
      <Haeder :bool="true"></Haeder>
      买单页面
    </div>
</template>

<script>
  import Haeder from '../base/Haeder'
  import Cookie from 'js-cookie'
    export default {
        name: "payment",
      components:{
          Haeder,
      }
    }
</script>

<style scoped>

</style>
