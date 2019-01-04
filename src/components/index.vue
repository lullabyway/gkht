<template>
  <!-- 默认显示页面 -->
  <div class="index">
    <!-- 头部 -->
    <header>
      <div class="top">
        <router-link to="/user" class="userIcon"><i class="iconfont icon-yonghu"></i></router-link>
        <div class="search">
          <i class="fa fa-search"></i>
          <input type="search" placeholder="请输入车牌号">
        </div>
        <router-link to="/message" class="messageIcon"><i class="iconfont icon-dkw_xiaoxi"></i></router-link>
      </div>
      <div class="location">
        <div class="locationText">
          <i class="iconfont icon-dibiao"></i><span>当前显示区域：</span>
        </div>
        <div>6层K区</div>
        <div>
          <button class="refresh" @click="refresh">刷新</button>
          
        </div>
        <div class="resetTime">
          <span>本次刷新:09:38:18</span>
          <span>下次刷新:09:40:18</span>
        </div>
      </div>
    </header>
    <!-- 路由 -->
    <router-view></router-view>
    <!-- 区域选择 -->
    <div class="seletedarea" v-show="num==1&&areaShow==true">
      <div class="floor">
        <ul>
          <li class="active">6层</li>
          <li>7层</li>
        </ul>
      </div>
      <div class="areas">
        <ul>
          <li class="active">K区</li>
          <li>K区</li>
          <li>K区</li>
        </ul>
      </div>
    </div>
    <!-- 图示 -->
    <div class="example" v-show="num==3&&exampleShow==true">
      <ul>
        <li>
          <i class="iconfont icon-Z"></i>已预约
        </li>
        <li>
          <i class="iconfont icon-Z"></i>设备不在线
        </li>
        <li>
          <i class="iconfont icon-Z"></i>已停放
        </li>
        <li>
          <i class="iconfont icon-Z"></i>地磁异常
        </li>
        <li>
          <i class="iconfont icon-Z"></i>空位
        </li>
        <li>
          <i class="iconfont icon-Z"></i>被异常扳动
        </li>
        <li>
          <i class="iconfont icon-Z"></i>非法占有
        </li>
        <li>
          <i class="iconfont icon-LED"></i>LED灯故障
        </li>
        <li>
          <i class="iconfont icon-icon-test"></i>电量不足
        </li>
        <li>
          <i class="iconfont icon-electricquantity3dianchidianliang"></i>障碍物
        </li>
        <li>
          <i class="iconfont icon-Z"></i>缺电
        </li>
        <li>
          <i class="iconfont icon-Z"></i>蜂鸣器故障
        </li>
        <li>
          <i class="iconfont icon-Z"></i>遥控故障
        </li>
        <li>
          <i class="iconfont icon-Z"></i>非法开盖
        </li>
        <li>
          <i class="iconfont icon-huojing"></i>火警
        </li>
        <li>
          <i class="iconfont icon-zhendong"></i>震动检测
        </li>
        <li>
          <i class="iconfont icon-shuidi"></i>水淹
        </li>
  
      </ul>
    </div>
    <!-- 底部 -->
    <footer>
      <ul class="footer">
        <li @click="num=1,areaShow=!areaShow,exampleShow=false">
          <router-link to="/index/areas"><i class="iconfont icon-dibiao"></i><span>选择区域</span></router-link>
        </li>
        <li @click="num=2,areaShow=false,exampleShow=false">
          <router-link to="/index/carport"><i class="iconfont icon-cheliang"></i><span>车位信息</span></router-link>
        </li>
        <li @click="num=3,exampleShow=!exampleShow,areaShow=false">
          <router-link to="/index/areas"><i class="iconfont icon-tupian"></i><span>图示</span></router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "index",
  data: function() {
    return {
      num: 0,
      areaShow: false,
      exampleShow: false
    };
  },
  methods: {
    refresh(){
      //刷新车场泊位列表
      let vm = this;
      // vm.$router.push('/test')
      vm.$axios
        .post("/getBerthLockerList")
        .then(function(response) {
          let data = response.data;
          //这里需要将数据赋值
          let lockerCodelist = data.data;
          vm.$store.commit("lockerCodelist", lockerCodelist);
           console.log('刷新')
          vm.$router.push('/emptyPage')
           
        })
        .catch(function(error) {
          console.log(error);
        });
    }
 
  },
  mounted: function() {
    
  }
};
</script>


<style>
</style>
