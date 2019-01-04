<template>
    <!-- 首页区域对应详情页 -->
    <div class="areadetail">
        <div class="title">
            <i @click="prev" class="iconfont icon-xiazai6"></i><span>查询结果</span>
        </div>
        <div class="areaDetailContent">
          <ul class="content">
            <li><span>车位编号</span><span>{{carportMassage.floorName}}{{carportMassage.areaName}}</span></li>
            <li>
                <span>车位状态</span>
                <span v-if="carportMassage.sensorStatus==0">空位</span>
                <span v-if="carportMassage.sensorStatus==1">有车</span>
                </li>
            <li>
                <span>车位锁状态</span>
                <span v-if="carportMassage.lockerStatus==0">已下降(可预约)</span>
                <span v-if="carportMassage.lockerStatus==1">下降中</span>
                <span v-if="carportMassage.lockerStatus==2">已上升</span>
                <span v-if="carportMassage.lockerStatus==3">上升中</span>
                </li>
          </ul>
          <div class="contr">
              <div class="left" @click="handleUpClick"><div class="up"><i class="iconfont icon-jiantou-shang"></i><span>升</span></div></div>
              <div class="right" @click="handleDownClick"><div class="down active"><i class="iconfont icon-jiantou-xia"></i><span>降</span></div></div>
          </div>
          <div class="stateCheck">
              <button @click="getThisLockerStatus">地锁状态</button>
              <button @click="getThisBitStatus">车位状态</button>
          </div>
        </div>
        <div class="footer">
            <button class="active">遥控对码</button>
            <button>清除对码</button>
        </div>
    </div>
</template>
<script>
export default {
  name: "areadetail",
  data: function() {
    return {
      lockerCode: "",
      carportMassage: {}
    };
  },
  methods: {
    //  返回上一级
    prev() {
      this.$router.go(-1);
    },
    //地锁下降
    handleDownClick() {
      let vm = this;
      console.log("降");
      console.log(vm.lockerCode);
      console.log(this.$axios.defaults.baseURL);
      vm.$axios
        .post(
          "/lockerDown",
          "lockerCode=" + vm.lockerCode
        )
        .then(function(response) {
          let data = response.data;
          // vm.getThisBitStatus();
          vm.$message(data);
          //   console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //地锁上升
    handleUpClick() {
      let vm = this;
      console.log("升");
      vm.$axios
        .post(
          "/lockerUp",
          "lockerCode=" + vm.lockerCode
        )
        .then(function(response) {
          let data = response.data;
          // vm.getThisBitStatus();
          vm.$message(data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //获取地锁状态
    getThisLockerStatus() {
      var vm = this;
      vm.$axios
        .post(
          "/getLockerStatus",
          "lockerCode=" + vm.lockerCode
        )
        .then(function(response) {
          var data = response.data;
          vm.$message(data);;
          //   console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //获取车位状态
    getThisBitStatus() {
      var vm = this;
      vm.$axios
        .post(
          "/getBitStatus",
          "lockerCode=" + vm.lockerCode
        )
        .then(function(response) {
          var data = response.data;
          vm.$message(data);
          //   console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //获取地锁状态
    getThisLockerStatusSelf() {
      var vm = this;
      vm.$axios
        .post(
          "/getLockerStatus",
          "lockerCode=" + vm.lockerCode
        )
        .then(function(response) {
          var data = response.data;
          // vm.$message("返回：" + data);
          //   console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //获取车位状态
    getThisBitStatusSelf() {
      var vm = this;
      vm.$axios
        .post(
          "/getBitStatus",
          "lockerCode=" + vm.lockerCode
        )
        .then(function(response) {
          var data = response.data;
          // vm.$message("返回：" + data);
          //   console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {
    this.carportMassage = this.$route.params.obj;
    this.lockerCode = this.carportMassage.lockerCode;
    this.getThisLockerStatusSelf();
    this.getThisBitStatusSelf();
    // console.log(this.carportMassage)
  }
};
</script>
<style>
.areadetail {
  
  width: 100%;
  height: 100%;
  background-color: #fafafa;
}
.areadetail .title {
  height: 50px;
  width: 100%;
  position: relative;
  border-bottom: solid 1px #ebebeb;
  background-color: #f8f8f8;
  font-size: 12px;
}
.areadetail .title > .iconfont {
  width: 50px;
  height: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  left: 0;
}
.areadetail .title span {
  display: inline-block;
  flex: 1;
  width: 100%;
  height: 100%;
  line-height: 50px;
  text-align: center;
}
.areadetail .areaDetailContent {
  position: relative;
  /* height: 100%; */
  padding-bottom: 60px
}
.areadetail .content {
  width: 100%;
  padding: 0 10px;
  font-size: 14px;
}
.areadetail .content li {
  height: 70px;
  width: 100%;
  line-height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
}
.areadetail .contr {
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.areadetail .contr > div {
  width: 65px;
  height: 65px;
  border-radius: 100%;
  border: 1px solid #fe8431;
  padding: 3px 3px;
}
.areadetail .up,
.areadetail .down {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  color: #fe8431;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.areadetail .stateCheck {
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
}
.areadetail .stateCheck > button {
  height: 40px;
  border: 1px solid #fe8431;
  color: #fe8431;
  font-size: 14px;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 5px;
}
.areadetail .footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-top: 1px solid #ebebeb;
  display: flex;
  justify-content: space-around;
  padding: 8px 40px;
  background-color: #fafafa;
}
.areadetail .footer button {
  background-color: #fafafa;
  border: 1px solid #ebebeb;
  color: #7b7b7b;
  padding: 0 15px;
  border-radius: 5px;
  font-size: 14px
}
.areadetail .footer .active,
.areadetail .contr .active {
  background-color: #fe8431;
  color: #fff;
}
</style>
