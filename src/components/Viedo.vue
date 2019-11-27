<template>
    <div class="viedo">
      <Haeder>
        <ul>
          <li>关注</li>
          <li>推荐</li>
          <li>大神</li>
        </ul>
      </Haeder>

    

    </div>
</template>

<script>
  import Haeder from '../base/Haeder'
    export default {
        name: "viedo",
      components:{
          Haeder,
      }
    }
</script>
      
<style scoped>
  .viedo li{
    list-style: none;
    float: left;
    width: 30%;
    font-size: 22px;
  }
</style>
