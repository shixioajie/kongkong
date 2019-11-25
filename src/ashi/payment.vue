<template>
  <div class="payment">
    <Haeder :bool="true">购物车</Haeder>
    <div class="shoplist">
      <ul class="uls" v-for="(itmes,index) in shoplist " :key="itmes.bookId">
        <li class="lis">
          <img :src="itmes.bookImg" :alt="itmes.bookImg">
          <div class="box">
            <h3>{{itmes.bookName}}</h3>
            <p>{{itmes.bookPrice  | getq("￥")}}</p>
            <span>{{itmes.bookInfo}}</span>
            <div class="box1">
              <span>数量:{{itmes.const}}</span>
              <span class="span" @click="add(index)">加</span>
              <span>金额:{{itmes.bookPrice*itmes.const | getq("￥")}}</span>
              <span class="span" @click="sub">减</span></div>
            <span>{{index}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="num">总价:{{nums | nn}} 元</div>
  </div>
</template>

<script>
  import Cookies from "js-cookie";
  import Haeder from '../base/Haeder'
  import {getHotList} from "../api";

  export default {
    name: "payment",
    components:{
      Haeder,
    },
    data(){
      return {
        shoplist:[],
        nums:0,
      }
    },
    filters:{
      getq:function (val,q) {
        return q+val
      },
      nn(val){

        return  "￥"+Math.round(val)+"省了"+(val-Math.round(val))
      }
    },
    created(){
      this.getH();
    },
    methods:{
      getH(){
        getHotList().then((res)=>{
          var cook=JSON.parse(Cookies.get('myshop'));
          console.log(cook);
          if (cook){
            this.shoplist=res.hotlist.filter(item=>{
              item.const = cook[item.bookId];//cook[1]=2,cook[2]=1,coo[4]=1
              item.ised = true;
              // console.log(item);
              return cook[item.bookId] //cook[1],cook[2],coo[4]
            });
            //循环累加得到的数据的价格
            for(let i=0;i<this.shoplist.length;i++){
              this.nums+=this.shoplist[i].bookPrice*this.shoplist[i].const
            }
          }
          console.log(this.shoplist);
        })
      },
      add(index){
        //判断价格 加给总价和各自商品的小计
        // this.shoplist[index].bookInfo-1
        this.shoplist[index].const+=1
      },
      sub(index){
        //判断价格 减去总价和各自商品的小计
        this.shoplist[index].const-=1
      }
    }
  }
</script>
<style lang="less" scoped>
  .num{
    margin-top: .51rem;
      background: #D9534F;
    display: inline-block;
    width: 68%;
    border-radius: .3rem;
    padding-bottom: .5rem;
    padding-top: .5rem;
    }
  .payment{
    margin-bottom: 3rem;
  }
  .uls{
    margin-bottom: 3rem;
    margin-top: -.5rem;
    .lis{
      float: left;
      width: 100%;
      border: .21rem #FEC324 solid;
      margin-bottom: .1rem;
      position: relative;
      background: #EEDFC3;
      img{
        width: 30%;
        float: left;
        height: 100%;
      }
      .box{
        margin-top: 1rem;

        .box1{
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          span{
            margin-left: .2rem;
            font-size: 1.2rem;
            color: #F9F8F3;
            background: #D9534F;
            padding: .5rem;
            border-radius: .4rem;
          }
        }
      }
    }
  }
</style>
