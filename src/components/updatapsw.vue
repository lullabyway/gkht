<template>
<!-- 修改密码 -->
    <div class="updatapsw">
        <div class="title">
            <i @click="prev" class="iconfont icon-xiazai6"></i><span>修改密码</span>
        </div>
        <div class="psw">
            <input type="password" placeholder="旧密码">
            <input type="password" placeholder="新密码">
            <input type="password" placeholder="确认密码">
            <button>完成</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'updatapsw',
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
    .updatapsw {
        width: 100%;
        height: 100%;
        background-color: #fafafa;
    }
    .updatapsw .title {
        height: 50px;
        width: 100%;
        position: relative;
        border-bottom: solid 1px #ebebeb;
        background-color: #f8f8f8;
        font-size: 12px
    }
    .updatapsw .title>.iconfont {
        width: 50px;
        height: 100%;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
        position: absolute;
        left: 0;
    }
    .updatapsw .title span {
        display: inline-block;
        flex: 1;
        width: 100%;
        height: 100%;
        line-height: 50px;
        text-align: center
    }
    .updatapsw .psw {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0 15px;
    }
    .updatapsw .psw>input {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #8b8b8b;
        background-color: #fafafa;
        font-size: 14px
    }
    .updatapsw .psw>button {
        position: relative;
        left: 50%;
        width: 240px;
        height: 40px;
        background-color: #fe8431;
        color: #fff;
        border: 0;
        box-shadow: 0 1px 2px #888888;
        border-radius: 40px;
        transform: translateX(-50%);
        margin-top: 100px;
        font-size: 18px;
        font-weight: 700
    }
</style>
