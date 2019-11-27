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
     <div><span class="jiesuan" @click="pay">单击结单</span></div>
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
      this.switch=true
    },
    methods:{
      add(index){
        //判断价格 加给总价和各自商品的小计
        this.shoplist[index].const+=1;
        this.nums=0; //当某个商品增加时重新计算nums
        this.shoplist1=[];//备份先重新算起
        for(let i=0;i<this.shoplist.length;i++){
          this.nums+=this.shoplist[i].bookPrice*this.shoplist[i].const;
          this.shoplist1.push(this.shoplist)
        }
      },
      sub(index){
        this.shoplist[index].const-=1; //判断价格 减去总价和各自商品的小计
        this.nums=0;    //总价也重新计算
        this.shoplist1=[]; //清空备份
        if (this.shoplist[index].const===0){ //当某个商品const数量为0时对应元素直接影藏起来
          this.shoplist[index].ised=false
        }
        for(let i=0;i<this.shoplist.length;i++){
          this.nums+=this.shoplist[i].bookPrice*this.shoplist[i].const; //当某商品减时nums从新计算
          this.shoplist1.push(this.shoplist[i]) //当某商品减时 重新备份这个数据
        }
        if (this.nums===0) {
           this.switch=false;
           this.bool=true;
           this.cook=null;
          Cookies.set('myshop',{})
           // delete Cookies
        }
        // this.switch=this.shoplist(function (val,index) {
        //    return val.const > 0
        // });
      },
      pay(){
        if (JSON.stringify(this.shoplist1)==="[]"){
         alert("判断了这个数据是空的数组");
          this.shoplist1=this.shoplist
        }
        Cookies.set('myshop',{});//清空购物车
        // console.log(this.shoplist1);
        Cookies.set('record',JSON.stringify(this.shoplist1));
        alert("nihao");
        this.switch=false
      },
      getH(){
        getHotList().then((res)=>{
          // console.log(123);
            var cook=Cookies.get('myshop');
          // console.log(cook);
          // var cook=JSON.parse(Cookies.get('myshop'));
          if (cook&&this.switch){
            this.cook=cook=JSON.parse(cook);
            this.shoplist=res.hotlist.filter(item=>{
              item.const = this.cook[item.bookId];//cook[1]=2,cook[2]=1,coo[4]=1
              item.ised = true;
              // console.log(item);
              return cook[item.bookId] //cook[1],cook[2],coo[4]
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
