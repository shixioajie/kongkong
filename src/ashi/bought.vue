<template>
    <div>
      <Haeder :bool="true">
        <p>买过的...</p>
      </Haeder>
      <ul class="ul">
        <h3 v-show="bool">没有购买记录</h3>
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
            bool:false
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
             // console.log(Cookies.get('record'));
              this.jilu=Cookies.get('record');
             if (this.jilu===undefined){
               this.bool=true
             } else {
               this.jilu=JSON.parse(Cookies.get('record'));
               console.log(this.jilu)
             }
             // console.log(Cookies.get('record'))
           }
          // rec:function () {
          //     this.jilu=Cookies.get('record');
          //
          //     if (this.jilu){
          //       this.bool=true
          //     }else {
          //       this.jilu=JSON.parse(Cookies.get('record'));
          //     }
          // }
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
