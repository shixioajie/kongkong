<template>
  <div class="home">
    <div class="top">
      <ul>
        <li>更新</li>
        <li>精选</li>
        <li>三体</li>
        <li>少年魂</li>
        <li>少女心</li>
        <li>...</li>
      </ul>
    </div>
    <div class="ipt">
      <ul>
        <li><input type="text" placeholder="请输入" /></li>
        <li class="iconfont icon-gouwuche"></li>
        <li class="iconfont icon-jiangbei"></li>
        <li class="iconfont icon-fenlei"></li>
      </ul>
    </div>

    <Swiper></Swiper>

    <div class="zujian">
      <div><img src="/static/img/1.jpg" alt="" /></div>
      <div><img src="/static/img/2.jpg" alt="" /></div>
      <div><img src="/static/img/3.jpg" alt="" /></div>
      <div><img src="/static/img/4.jpg" alt="" /></div>
      <div><img src="/static/img/8.jpg" alt="" /></div>
      <div><img src="/static/img/6.jpg" alt="" /></div>
      <div><img src="/static/img/1747.jpg" alt="" /></div>
      <div><img src="/static/img/2050.jpg" alt="" /></div>
      <div><img src="/static/img/2213.jpg" alt="" /></div>
      <div><img src="/static/img/2560.jpg" alt="" /></div>
      <div><img src="/static/img/2679.jpg" alt="" /></div>
      <div><img src="/static/img/2706.jpg" alt="" /></div>
      <div><img src="/static/img/3964.jpg" alt="" /></div>
      <div><img src="/static/img/5177.jpg" alt="" /></div>
      <div><img src="/static/img/1.jpg" alt="" /></div>
      <div><img src="/static/img/2.jpg" alt="" /></div>
    </div>
  </div>
</template>

<script>
import Swiper from "../base/swiper";
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Swiper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home .top {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background: #999;
}
.home .top li {
  width: 16%;
  height: 40px;
  line-height: 40px;
  float: left;
  list-style: none;
  font-size: 12px;
  font-weight: bold;
}
.home .top li:nth-child(2) {
  font-size: 20px;
}
.home .ipt {
  background: #ccc;
  position: fixed;
z-index: 100;
  top: 40px;
  width: 100%;
  height: 30px;
}
.home .ipt input {
  border-radius: 10px;
  text-indent: 1rem;
  border: 1px solid #ccc;
  outline: none;
}
.home .ipt li {
  list-style: none;
  float: left;
  margin-left: 22px;
  height: 25px;
  line-height: 30px;
}
.home .zujian div {
  width: 43%;
  height: 18rem;
  float: left;
  margin: 20px 3%;
  border-radius: 5%;
  background-repeat: round;
  background-size: cover;
}
.home .zujian div img {
  width: 100%;
  height: 100%;
  border-radius: 5%;
}
</style>
