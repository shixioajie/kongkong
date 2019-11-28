<template>
  <div class="lisbook">
    <Haeder :bool="true"><p>购买页面</p></Haeder>
    <div class="div">
      <img :src="imgs[$route.params.id]" alt="">
      <h2 >{{names[$route.params.id]}}</h2>
      <h3>{{price[$route.params.id] | getq("￥")}}</h3>
      <span>{{info[$route.params.id]}}</span>
    </div>
    <ul>
      <li>漫友评价</li>
      <li>相关推荐</li>
      <li>同人手办</li>
    </ul>
    <div class="shop">
      <router-link to="/payment" tag="div"><i class="iconfont icon-gouwuche "></i>购物车</router-link>
      <div @click="addShop(Number($route.params.id)+1)">加入购物车</div>
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
    filters:{
      getq:function (val,q) {
        return q+val
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
        let shopBool=Cookies.get('myshop');

        var obj={};

        if(shopBool){
          obj= JSON.parse(shopBool);

          if(obj[id]){
            obj[id]+=1;
          }else {
            obj[id]=1;
          }
        }
        else {
          obj={[id]:1};
        }
        console.log(obj);
        Cookies.set('myshop',JSON.stringify(obj));

      }
    }
  }
</script>

<style lang="less" scoped>
  .lisbook{
    .div{
      margin-top: 1rem;
    }
    img{
      width: 50%;
    }
    .shop{
      margin-top: 1rem;
      margin-bottom: 5rem;
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
