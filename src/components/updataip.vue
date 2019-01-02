<template>
    <!-- 修改IP -->
    <div class="updataip">
        <div class="title">
            <i @click="prev" class="iconfont icon-xiazai6"></i>
        </div>
        <ul class="currentIp">
            <li>当前连接IP:{{currentIp}}</li>
            <li>当前连接服务端口:{{currentPort}}</li>
            <li>通知端口:</li>
        </ul>
        <div class="ip">
            <input type="text" placeholder="请输入ip" v-model="changeIp">
            <input type="text" placeholder="请输入服务端口号" v-model="changePort">
            <input type="text" placeholder="请输入通知端口号">
            <button @click="sunmitAddress">确定</button>
        </div>
        <div class="historyTitle">
            <span>IP历史纪录</span><span class="clear" @click="clearHistory">清除历史</span>
        </div>
        <div class="unhistory" v-if="historyAddress.length<=0">暂无历史记录</div>
        <ul class="history" v-if="historyAddress.length>0">
            <li v-for="item in historyAddress">
                <span>服务地址：tcp://{{item}}</span>
                <span>通知地址：tcp://</span>
            </li>
            <!-- <li>
                <span>服务地址：tcp://172.16.11.249:6060</span>
                <span>通知地址：tcp://172.16.11.249:6061</span>
            </li> -->
        </ul>
    </div>
</template>
<script>
export default {
  name: "updataip",
  data: function() {
    return {
      changeIp: "",
      changePort: "",
      currentIp: "",
      currentPort: "",
      historyAddress: []
    };
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    sunmitAddress() {
        if(this.changeIp==''||this.changePort==''){
            this.$message('输入不能为空');
        }else{
            this.$store.commit("changeIp", this.changeIp);
            this.$store.commit("changePort", this.changePort);
            console.log(typeof this.historyAddress);
            this.historyAddress.push(this.changeIp + ":" + this.changePort);
            this.$router.push('/login')
           
        }
      
      
    },
   
    clearHistory() {
      this.historyAddress = [];
    },
    init() {
      let historyData = this.$store.state.historyAddress;
      if (historyData != null) {
        this.historyAddress = historyData;
      } else {
        this.historyAddress = [];
      }
    }
  },
  created() {
    this.currentIp = this.$store.state.currentIp;
    this.currentPort = this.$store.state.currentPort;
    this.init();
    console.log(this.$store.state.historyAddress);
  },
  watch: {
    historyAddress: {
      handler: function(newVal, oldVal) {
        this.$store.commit("historyAddress", this.historyAddress);
      },
      deep: true
    }
  }
};
</script>
<style>
.updataip {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  font-size: 12px;
  color: #7b7b7b;
}
.updataip .title {
  height: 50px;
  width: 100%;
  position: relative;
  background-color: #f8f8f8;
  font-size: 12px;
}
.updataip .title > .iconfont {
  width: 50px;
  height: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  left: 0;
}
.updataip .unhistory {
  width: 100%;
  text-align: center;
  line-height: 40px;
}
.updataip .currentIp {
  padding-bottom: 15px;
  width: 100%;
}
.updataip .currentIp > li {
  width: 100%;
  text-align: center;
  line-height: 18px;
}
.updataip .ip {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  position: relative;
}
.updataip .ip > input {
  background-color: #fafafa;
  height: 40px;
  border: 1px solid #ebebeb;
  padding-left: 10px;
  font-size: 12px;
}
.updataip .ip > input:nth-child(1),
.updataip .ip > input:nth-child(2) {
  border-bottom: 0;
}
.updataip .ip > button {
  width: 95%;
  height: 35px;
  background-color: #ff8532;
  box-shadow: 0 1px 2px #888888;
  color: #fff;
  border: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
}
.historyTitle {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 75px;
  background-color: #dedede;
  height: 30px;
  line-height: 30px;
}
.history {
  margin-top: 15px;
  padding: 0 20px;
}
.history li {
  border-bottom: 1px solid #e0a072;
  padding: 5px 0;
}
.history span {
  display: block;
  text-align: center;
  line-height: 22px;
}
.clear {
  color: #e45461;
}
</style>
