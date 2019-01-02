<template>
    <div class="login">
        <div class="carIcon">
            <i class="iconfont icon-cheliang1"></i>
        </div>
        <div class="loginMessage">
            <div class="inputs">
                <i class="iconfont icon-wulumuqishigongandashujuguanlipingtai-ico-"></i>
                <input type="text" placeholder="请输入账号" v-model="user">
            </div>
            <div class="inputs">
                <i class="iconfont icon-mima"></i>
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <router-link to="/updataip" class="updataIps">修改服务器连接配置>></router-link>
            <button class="submits" @click="login">登录</button>
        </div>
    </div>
</template>
<script>
export default {
  name: "login",
  data: function() {
    return {
      user: "admin",
      password: 123456
    };
  },
  methods: {
    login() {
      let ipLink = this.$store.state.ipCheck;
      if (ipLink == false) {
        this.$message("服务器连接配置有误");
        return;
      } else {
        if (this.user == "admin" && this.password == 123456) {
          let isLogin = true;
          sessionStorage.setItem("isLogin", JSON.stringify(isLogin));
          this.$router.push({
            path: "/index"
          });
        } else {
          this.$message("账号或密码有误,请重新输入");
        }
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.path.indexOf("/updataip") != -1) {
      console.log("updata");
      next(vm => {
        vm.$router.go(0);
      });
    } else {
      next();
    }
  }
};
</script>
<style>
.login {
  padding: 50px 20px;
  background-color: #fff;
  height: 100%;
}
.login .carIcon {
  position: relative;
  width: 135px;
  height: 135px;
  border-radius: 50%;
  background-color: #eeeeee;
  color: #aaaaaa;
  text-align: center;
  line-height: 135px;
  left: 50%;
  transform: translateX(-50%);
}
.login .icon-cheliang1 {
  font-size: 90px;
}
.login .loginMessage {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 50px;
}
.login .loginMessage > .inputs {
  height: 45px;
  border: 1px solid #afafaf;
  margin-top: 10px;
  display: flex;
}
.login .loginMessage .iconfont {
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
}
.inputs input {
  flex: 1;
  color: #afafaf;
}
.login .updataIps {
  height: 45px;
  line-height: 45px;
  color: #fe8431;
  text-align: left;
  font-size: 14px;
}
.login .submits {
  border: 0;
  background-color: #fe8431;
  height: 45px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
</style>
