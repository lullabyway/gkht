<template>
    <!-- 信息 -->
    <div class="message">
         <div class="title">
            <i @click="prev" class="iconfont icon-xiazai6"></i><span>告警信息</span>
        </div>
        <div class="seletedMessage">
            <ul>
                <li>楼层</li>
                <li>事件</li>
                <li>时间</li>
            </ul>
        </div>
        <div class="messageContent">
            <ul>
                <li>6层K区K4车位</li>
                <li>车位锁设备缺电；离线</li>
                <li>车位锁设备缺电；离线</li>
                <li><span>二级事件</span><span>2018-12-21 14:20:16</span></li>
            </ul>
        </div>
        <div class="messageContent">
            <ul>
                <li>6层K区K4车位</li>
                <li>车位锁设备缺电；离线</li>
                <li>车位锁设备缺电；离线</li>
                <li><span class="event">二级事件</span><span class="time">2018-12-21 14:20:16</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'message',
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
    .message {
        width: 100%;
        background-color: #fafafa;
    }
    .message .title {
        height: 50px;
        width: 100%;
        position: relative;
        border-bottom: solid 1px #ebebeb;
        background-color: #f8f8f8;
        font-size: 12px
    }
    .message .title>.iconfont {
        width: 50px;
        height: 100%;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
        position: absolute;
        left: 0;
    }
    .message .title span {
        display: inline-block;
        flex: 1;
        width: 100%;
        height: 100%;
        line-height: 50px;
        text-align: center
    }
    .seletedMessage ul {
        display: flex;
        width: 100%;
    }
    .seletedMessage ul li {
        flex: 1;
        border-bottom: 1px solid #ebebeb;
        border-right: 1px solid #ebebeb;
        text-align: center;
        line-height: 45px;
         position: relative;
         font-size: 12px
    }
    .seletedMessage ul li::before {
        content: '';
        width: 0;
        height: 0;
        border-bottom: 10px solid #8e8e8e;
        border-left: 10px solid transparent;
        position: absolute;
        right: 3px;
        bottom: 3px
    }
    .seletedMessage ul li:nth-child(3) {
        border-right: 0
    }
    .messageContent {
        width: 100%;
        padding: 10px 20px;
        background-color: #fff;
        margin-bottom: 5px;
        font-size: 12px;
        color: #737373
    }
    .messageContent ul {
        width: 100%;
        border-left: 4px solid #fbae23;
        padding: 10px 10px;
    }
    .messageContent ul li {
        line-height: 25px;
    }
    .messageContent ul li:last-child {
        display: flex;
        justify-content: space-between
    }
    .messageContent .event {
        background-color: #eeeeee;
        padding: 0 5px;
        border-radius: 5px;
        font-size: 10px
    }
</style>
