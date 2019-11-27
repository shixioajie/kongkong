<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) in swiperSlides" :key="index">
      <img :src="item.img" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
        },
        swiperSlides: [
          {img:"../../static/img/6.jpg"},
          {img:"../../static/img/7.jpg"},
          {img:"../../static/img/8.jpg"},
          {img:"../../static/img/9.jpg"}

        ]
      }
    }
  }
</script>
<style lang>
img{
  width: 100%;
  height:15rem;
}
</style>