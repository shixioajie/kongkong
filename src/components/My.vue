<template>
  <div class="my">
    <Haeder :bool="true">
      <p>我的个人</p>
    </Haeder>
    <div class="myzhu">
      <ul>
        <li class="touxli"><div class="toux"></div><span class="name2">罗小黑</span></li>
        <li class="gg">
          <div>会员中心</div>
          <h3>限时会员专属福利</h3>
          <p>25元优惠券限量抢兑</p>
        </li>
        <li class="dh">
          <router-link to="/person" tag="div"><i class="c icon-zhuye iconfont"></i><span>个人主页</span></router-link>
          <router-link to="/homepage" tag="div"><i class="c iconfont icon-xinxi"></i><span>消息</span></router-link>
          <router-link to="/homepage" tag="div"><i class="c iconfont icon-shoucang"></i><span>收藏</span></router-link>
          <router-link to="/homepage" tag="div"><i class="c iconfont icon-guanzhu"></i><span>关注</span></router-link>
          <router-link to="/homepage" tag="div"><i class="c iconfont icon-zuji"></i><span>足迹</span></router-link>
        </li>
      </ul>
      <div class="font">
        <router-link to="/payment" tag="p" class="iconfon"><i class="iconfont icon-qicheqianlian-"></i>我的购物车</router-link>
        <router-link to="/bought" class="iconfon">买过的</router-link>
<!--        使用专属 view name 指定显示一个内容 买过什么东西-->
      </div>
    </div>
  </div>
</template>

<script>

  import Haeder from '../base/Haeder'
  import Personal from '../ashi/payment'
    export default {
        name: "My",
      components:{
          Haeder,
        // Personal,
      }
    }
</script>

<style lang="less" scoped>
  .font{
    margin-top: .3rem;
    display: flex;
    .iconfon{
      font-size: 1.5rem;
      flex: 1;
      border:.1rem #F3D4B7 solid;
      border-radius: .2rem;
    }
  }

 .myzhu{
   width: 95%;
   height: 100%;
   position: relative;
   left: 2.5%;
   margin-top: 6rem;
   /*text-align: center;*/
   .touxli{
     border: .1rem #F3D4B7 solid;
     height: 4.5rem;
     background: #FAF3C8;
     border-radius: 1rem 1rem 0rem 0rem;
   }
   .toux{
     width: 4rem;
     height: 4rem;
     border: white solid .21rem;
     border-radius:50%;
     position: absolute;
     left: 50%;
     margin-top: -1rem;
     margin-left:-2rem ;
     background: url("../ashi/img/xiaohei.png") center ;
     background-size: 110%;
   }
   .name2{
     position: relative;
     top: 3rem;
     font-weight: bold;
     font-size: 1rem;
   }
   .gg{
     background: #F3D4B7;
     height: 3.5rem;
     border-radius:0rem 0rem  1rem 1rem;
     /*float: left;*/
     h3{
       padding-top: .51rem;
     }
   }
   .gg>div{
     padding-top: .5rem;
     height: 2rem;
     width: 2rem;
     font-weight: bold;
     font-size: 1rem;
     padding-left:1rem ;
     line-height: 1.2rem;
     float: left
     /*display: inline-block;*/
   }
   .dh{
     padding-top:.51rem ;
     padding-bottom:.51rem ;
     margin-top: .5rem;
     display: flex;
     /*font-size: 1rem;*/
     background: #F5DCE0;
     border-radius: .51rem;
     span{
       color: #3C3F41;
       font-size: 1rem;
     }
   }
   .c{
     display: block;
     font-size: 1.5rem;
     color: #FF4466;
   }
   .dh>div{
     flex: 1;
   }
 }
</style>
