<template>
    <!-- 用户 -->
    <div class="user">
        <div class="title">
            <i @click="prev" class="iconfont icon-xiazai6"></i><span>设置</span>
        </div>
        <ul class="content">
            <li>
                <router-link to="/updatapsw" class="contentlist"><span>修改密码</span><i class="iconfont icon-jiantou"></i></router-link>
            </li>
            <li>
                <router-link to="/updataip" class="contentlist"><span>修改IP</span><i class="iconfont icon-jiantou"></i></router-link>
            </li>
            <li>
                <router-link to="#" class="contentlist"><span>检测新版本</span><i class="iconfont icon-jiantou"></i></router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    nsme:'user',
    data:function(){
        return({

        })
    },
    methods:{
        prev(){
            this.$router.go(-1)
        }
    }
}
</script>
<style>
    .user {
        width: 100%;
        font-size: 14px
    }
    .user .title {
        height: 50px;
        width: 100%;
        position: relative;
        border-bottom: solid 1px #ebebeb;
    }
    .user .title>.iconfont {
        width: 50px;
        height: 100%;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
        position: absolute;
        left: 0; 
    }
    .user .title span {
        display: inline-block;
        flex: 1;
        width: 100%;
        height: 100%;
        line-height: 50px;
        text-align: center
    }
    .user .content  {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 15px;
    }
    .user .content .contentlist {
        height: 65px;
        line-height: 65px;
        padding: 0 10px;
        display: flex;
        justify-content:space-between;
        border-bottom: 1px solid #ebebeb;
    }
</style>
