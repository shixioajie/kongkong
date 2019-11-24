<template>
    <div class="books">
      <Haeder :bool="true">
        <p>书库</p>
      </Haeder>
      <lisBooks :lists="list"></lisBooks>
    </div>
</template>

<script>
  import Haeder from '../base/Haeder'
  import lisBooks from '../ashi/lisBooks'  //图书列表
  import {getHotList} from "../api";

  export default {
        name: "Books",
    data(){
      return{
        list:[]
      }
    },
      components:{
          Haeder,
        lisBooks
      },
    created(){
          this.geth();
    },
    methods:{
      geth(){
        getHotList().then((res)=>{
          console.log(res.hotlist);
          this.list=res.hotlist;
        })
      }
    }
    }
</script>

<style scoped>

</style>
