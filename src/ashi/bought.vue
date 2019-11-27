<template>
    <div>
      <Haeder :bool="true">
        <p>买过的...</p>
      </Haeder>
      <ul class="ul">
        <li v-for="(itme,index) in jilu" :key="itme.bookId">
          <img :src="itme.bookImg" :alt="itme.bookImg">
          <h4>{{itme.bookMame}}</h4>
          <p>{{itme.bookInfo}}</p>
          <p>单价：{{itme.bookPrice}}</p>
          <p>数量：{{itme.const}}</p>
        </li>
      </ul>
      <div class="db"></div>
    </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import {getHotList} from "../api";
 import Haeder from '../base/Haeder'
  export default {
        name: "bought",
    data(){
          return{
            jilu:[],
          }
    },
    components:{
          Haeder,
    },
    created() {
          this.rec()
    },
    methods:{
          rec:function () {
            this.jilu=JSON.parse(Cookies.get('record'));
            // console.log(this.jilu)
          }
    }
  }
</script>

<style lang="less" scoped>
  .db{
    height: 5rem;
  }
  .ul{
    li{
      img{
        width: 50%;
      }
    }
  }

</style>
