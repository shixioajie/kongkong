<template>
  <div class="my">
    <Haeder :bool="true">
      <p>我的个人</p>
    </Haeder>
  </div>
</template>

<script>
  import Haeder from '../base/Haeder'
    export default {
        name: "My",
      components:{
          Haeder,
      }
    }
</script>

<style scoped>

</style>
