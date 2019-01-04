<template>
    <div class="area">
        <!-- 首页区域部分 -->
        <ul class="indexcontent">
            <li v-for="item in lockerCodelist">
                
              <router-link :to="{name:'areadetail',params:{obj:item}}">{{item.lockerCode}}</router-link>
               
                
            </li>
            <!-- <li class="active">
                <router-link to="{name:'areadetail'+item.lockerCode}" class="active">K1</router-link>
            </li>
            <li>
                <router-link to="/areadetail">K1</router-link>
            </li>
            <li>
                <router-link to="/areadetail">K1</router-link>
            </li> -->
        </ul>
    </div>
</template>
<script>
export default {
  name: "areas",
  data: function() {
    return {
      num: 0,
      areaShow: false,
      exampleShow: false,
      lockerCodelist: this.$store.state.lockerCodelist
    };
  },
  methods: {
   
    
  },
  created: function() {
    // this.lockerCodelist=this.$store.state.lockerCodelist;
    // this.initsocket()
    // this.getParkBerthList();
    // console.log(this.$store.state.lockerCodelist)
  }
};
</script>
<style>
.indexcontent li a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
