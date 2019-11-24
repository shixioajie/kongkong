<template>
  <div class="lisbook">
    <Haeder :bool="true"><p>购买页面</p></Haeder>
    <div>
      <img :src="imgs[$route.params.id]" alt="">
      <h2 >{{names[$route.params.id]}}</h2>
      <h3>{{price[$route.params.id]}}</h3>
      <span>{{info[$route.params.id]}}</span>
    </div>
    <ul>
      <li>漫友评价</li>
      <li>相关推荐</li>
      <li>同人手办</li>
    </ul>
    <div class="shop">
      <router-link to="/payment" tag="div"><i class="iconfont icon-gouwuche "></i>购物车</router-link>
      <div @click="addShop($route.params.id)">加入购物车</div>
    </div>
  </div>
</template>

<script>
  import Haeder from '../base/Haeder'
  import {getHotList} from "../api";
  import Cookies from "js-cookie";

  export default {
    name: "lisBook",
    data(){
      return{
        list:[],
        imgs:[],
        names:[],
        price:[],
        info:[],
        shopId:[]
      }
    },
    components:{
      Haeder
    },
    created(){
      this.getg()
    },
    methods:{
      getg(){
        getHotList().then((res)=>{
          this.list=res.hotlist;
          console.log(this.list);
          for (let i=0;i<this.list.length;i++){
            this.imgs[i]=this.list[i].bookImg;
            this.names.push(this.list[i].bookName);
            this.price.push(this.list[i].bookPrice);
            this.info.push(this.list[i].bookInfo);
          }
        })
      },
      addShop(id){
        // var shopList=[];
        // shopList.push(id);
        // console.log(shopList)
        console.log(id);
        this.shopId[this.shopId.length]=id;
        console.log(this.shopId);
        var shopList=this.shopId;
        console.log(shopList);
        Cookies.set('my-shop',JSON.stringify(shopList));
        var cookie=Cookies.get('my-shop');
        console.log(cookie)
      }
    }
  }
</script>

<style lang="less" scoped>
  .lisbook{
    img{
      width: 80%;
    }
    .shop{
      margin-top: 1rem;
      div{
        display: inline-block;
        font-weight: bold;
        font-size: 1.5rem;
        i{
          font-size: 1.5rem;
        }
      }

    }
  }

</style>
