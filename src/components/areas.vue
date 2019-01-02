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
      lockerCodelist: []
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
        console.log("show" + data);
        var lockerData = JSON.parse(data);
        var lockerCode = lockerData.lockerCode;
        var kind = lockerData.kind;

        //  vm.lockerData.push(lockerData);
        var tableData = vm.lockerCodelist;
        var findRow = tableData.find(function(x) {
          return x.lockerCode == lockerCode;
        });

        if (findRow != undefined) {
          console.log("show" + JSON.stringify(findRow));
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
    
  },
  created: function() {
    this.lockerCodelist=this.$store.state.lockerCodelist;
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
