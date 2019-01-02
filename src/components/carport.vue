<template>
    <!-- 车位信息 -->
    <div class="carport">
        <ul class="carportNav">
            <li class="active">
                6层
            </li>
            <li>
                7层
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'carport',
    data:function(){
        return({

        })
    }
}
</script>
<style>
    .carport {
       
    }
    .carportNav {
        border-bottom: 1px solid #ebebeb;
        border-top: 1px solid #ebebeb;
        font-size: 12px
    }
    .carport ul {
        display: flex;
        justify-content: flex-start;
        padding: 0 10px;
       
    }
    .carport li {
        height: 40px;
        width: 40px;
        line-height: 40px;
        text-align: center
    }
    .carport .active {
        color: #f98430
    }
</style>
