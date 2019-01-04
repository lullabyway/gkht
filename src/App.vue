<template>
  <div id="app">
    <!-- 路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {

    };
  },
  methods: {
    initsocket() {
      var vm = this;
      var userName = "user" + Math.floor(Math.random() * 1000 + 1);
      var socket = io.connect(
        "http://120.76.123.91:9099?username=" +
          userName +
          "&password=123456&parkid=locker_parkid"
      );
      socket.on("connect", function() {
        console.log("连接成功");
      });
      socket.on("chatevent", function(data) {
        console.log("chatevent" + data);
        // output('<span class="username-msg">' + data.userName + ':</span> ' + data.message);
      });
      socket.on("disconnect", function() {
        console.log("disconnect");
        // output('<span class="disconnect-msg">The client has disconnected!</span>');
      });

      socket.on("onautoplay", function(data) {
        console.log("onautoplay" + data);
        // autoplay 自动播放
        // output('<span class="username-msg">' + data + ':</span> ' );
      });

      socket.on("show", function(data) {
        let lockerCodelist=vm.$store.state.lockerCodelist;
        console.log("show1" + data);
        var lockerData = JSON.parse(data);
        var lockerCode = lockerData.lockerCode;
        var kind = lockerData.kind;
        //  vm.lockerData.push(lockerData);
        var tableData = lockerCodelist;
        var findRow = tableData.find(function(x) {
          return x.lockerCode == lockerCode;
        });

        if (findRow != undefined) {
          console.log("show2" + JSON.stringify(findRow));
          console.log("kind:" + kind);
          // output('<span class="username-msg">kind:' + kind + ':</span> ' );
          if (kind == "noticeLockStatus") {
            findRow.lockerStatus = lockerData.lockerStatus;
            findRow.lockerUpdateTime = lockerData.lockerUpdateTime;
          } else if (kind == "getLockerStatus") {
            findRow.lockerStatus = lockerData.lockerStatus;
            findRow.lockerUpdateTime = lockerData.lockerUpdateTime;
          } else if (kind == "getBitStatus") {
            findRow.sensorStatus = lockerData.sensorStatus;
            findRow.sensorTime = lockerData.sensorTime;
          } else if (kind == "noticeBitStatus") {
            //noticeBitStatus
            findRow.sensorStatus = lockerData.sensorStatus;
            findRow.sensorTime = lockerData.sensorTime;
          } else {
            findRow.lockerStatus = lockerData.lockerStatus;
            findRow.lockerUpdateTime = lockerData.lockerUpdateTime;
            findRow.sensorStatus = lockerData.sensorStatus;
            findRow.sensorTime = lockerData.sensorTime;
          }
        }

        //   output('<span class="username-msg">' + data + ':</span> ' );
      });
    },
    getParkBerthList() {
      let vm = this;
      vm.$axios
        .post("/getBerthLockerList")
        .then(function(response) {
          vm.$store.commit("ipCheck",true);
          let data = response.data;
          // vm.info = data;

          //这里需要将数据赋值
          vm.lockerCodelist = data.data;
          vm.$store.commit("lockerCodelist", vm.lockerCodelist);
          // console.log(vm.lockerCodelist);
          // var lockerData = data; // JSON.parse(data);
          // vm.lockerData=lockerData.data;
        })
        .catch(function(error) {
          vm.$store.commit("ipCheck",false);
          console.log(error);
        });
    }
  },
  
  created() {
    this.getParkBerthList();
    this.initsocket()
  }
};
</script>

<style>
#app {
  font-family: "微软雅黑", "'Avenir', Helvetica, Arial, sans-serif;";
  width: 100%;
  height: 100%;
  /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
}
</style>
