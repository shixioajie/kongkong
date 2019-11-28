<template>
  <div class="payment">
    <Haeder :bool="true">购物车</Haeder>
    <div class="shoplist" v-show="this.switch">
      <ul v-show="itmes.ised"  class="uls" v-for="(itmes,index) in shoplist " :key="itmes.bookId">
        <li class="lis" >
          <img :src="itmes.bookImg" :alt="itmes.bookImg">
          <div class="box">
            <h3>{{itmes.bookName}}</h3>
            <p>{{itmes.bookPrice  | getq("￥")}}</p>
            <span>{{itmes.bookInfo}}</span>
            <div class="box1">
              <span>数量:{{itmes.const}}</span>
              <span class="span" @click="add(index)">加</span>
              <span>金额:{{itmes.bookPrice*itmes.const | getq("￥")}}</span>
              <span class="span" @click="sub(index)">减</span></div>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="!bool" class="num">总价:{{nums |getq("￥")}} 元</div>
    <router-link v-show="bool" class="num" tag="div" to="/books">竟然空空如也,不如再去逛逛</router-link>
    <div><span v-show="!bool" class="jiesuan" @click="pay">单击结单</span></div>
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
        shoplist1:[],
        nums:0,
        bool:false,
        cook:{},
        switch:true
      }
    },
    filters:{
      getq:function (val,q) {
        return q+val
      },
    },
    created(){
      this.getH();
      this.switch=true;
      if (Cookies.get('myshop')==="{}") {
        this.bool=true
      }
    },
    methods:{
      add(index){
        //判断价格 加给总价和各自商品的小计
        this.shoplist[index].const+=1;
        this.nums=0; //当某个商品增加时重新计算nums

        for(let i=0;i<this.shoplist.length;i++){
          this.nums+=this.shoplist[i].bookPrice*this.shoplist[i].const;
        }
      },
      sub(index){
        this.shoplist[index].const-=1; //判断价格 减去总价和各自商品的小计
        this.nums=0;    //总价也重新计算
        if (this.shoplist[index].const===0){ //当某个商品const数量为0时对应元素直接影藏起来
          this.shoplist[index].ised=false
        }
        for(let i=0;i<this.shoplist.length;i++){
          this.nums+=this.shoplist[i].bookPrice*this.shoplist[i].const; //当某商品减时nums从新计算
        }
        if (this.nums===0){
          this.switch=false;
          this.bool=true;
          this.cook=null;
          Cookies.set('myshop',{});
        }
      },
      pay(){
        this.shoplist1=this.shoplist.filter(item=>{
          return item.const!==0
        });
        Cookies.set('myshop',{});//清空购物车
        Cookies.set('record',JSON.stringify(this.shoplist1));
        this.switch=false;
        this.bool=true;
      },
      getH(){
        getHotList().then((res)=>{
          var cook=Cookies.get('myshop');
          if (cook&&this.switch){
            this.cook=cook=JSON.parse(cook);
            this.shoplist=res.hotlist.filter(item=>{  //注意这里是在循环里面
              item.const = this.cook[item.bookId];
              //item是json来的数据给它加了一个const属性是从对应的cook来的对应的方法就是item的id来校准cook里的属性
              // 实际上在这一步就已经改了jsong里的数据了
              item.ised = true; //
              return cook[item.bookId] //cook[1],cook[2],coo[4]
              //这一步是判断条件 筛选return的 cook与item的id对应的 对应则为true
            });
            //循环累加得到的数据的价格
            for(let i=0;i<this.shoplist.length;i++){
              this.nums+=this.shoplist[i].bookPrice*this.shoplist[i].const
            }
          }else {
            this.bool=true
          }
          // console.log(this.shoplist);
          // console.log(this.nums)
        });
      },
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
    .jiesuan{
      /*border: .1rem seagreen solid;*/
      margin-top: .51rem;
      padding: .5rem;
      display: inline-block;
      background: #FDCD42;
      border-radius: .3rem;
      span{
        background: #00ACFE;
        padding: .5rem;
        border-radius: .3rem;
      }
    }
  }
  .uls{
    float:left;
    width: 100%;
    .lis{
      float: left;
      width: 100%;
      height: 9.5rem;
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
          width: 70%;
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          span{
            /*margin-left: .2rem;*/
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
