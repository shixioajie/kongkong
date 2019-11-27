<template>
<div class="lisBooks">
    <ul >
<!--      <li v-for="(items,index) in lists" :key="index">-->
<!--        <img :src="items.bookImg" :alt="items.bookImg">-->
<!--      </li>-->
      <router-link v-for="(items,index) in lists" :key="index"
                   :to="{name:'book',params:{id:index}}" tag="li">
        <img :src="items.bookImg" :alt="items.bookImg">
        <div class="xixi">
          <p class="bookname">{{items.bookName}}</p>
          <span class="nowrop">描述：{{items.bookInfo}}</span>
          <p class="price">{{items.bookPrice | setq}}</p>
        </div>
      </router-link>
      <div class="du">还看啊没了...</div>
    </ul>
</div>
</template>

<script>
    export default {
        name: "lisBooks",
      props:["lists"],
      filters:{
          setq(vla){
             return "￥"+vla
          }
      }
    }
    console.log()
</script>

<style lang="less" scoped>

  .lisBooks{
    li{
      /*border: 1px slateblue solid;*/
      border-bottom: .2rem #F9F8F3 solid ;
      height: 10rem;
    }
    li::after{
      content: "";
      clear: both;
      display: block;
    }
    img{
      width: 30%;
      height: 100%;
      float: left;
      padding-left: 1%;
    };
    .xixi{
      margin-top: 2rem;
      float: right;
      width: 69%;
      font-size: 1.2rem;
      /*border:1px slateblue solid;*/
      p{
        margin-top: .2rem;
        margin-bottom: 0.2rem;
      }
      .bookname{
        color: slateblue;
        font-weight: bold;
      }
      .nowrop{
        color: darkslateblue;
      }
    }
    .du{
      height: 5rem;
    }
  }

</style>
