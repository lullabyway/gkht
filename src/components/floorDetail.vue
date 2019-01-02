<template>
    <!-- 对应楼层区域 -->
    <div class="detail">
        <div class="top">
            <div class="left">6层</div>
            <div class="right">
                <ul>
                    <li>已预约 0</li>
                    <li>可预约 0</li>
                    <li>已停放 0</li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <div class="areas">
                <div class="title">
                    K区
                </div>
                <ul class="content">
                    <li>已预约 0</li>
                    <li>可预约 0</li>
                    <li>已停放 0</li>
                </ul>
            </div>
            <div class="areas">
                <div class="title">
                    K区
                </div>
                <ul class="content">
                    <li>已预约 0</li>
                    <li>可预约 0</li>
                    <li>已停放 0</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'floorDetail'
}
</script>
<style>
    .detail {
        padding: 0 10px;
        height: 120px;
        margin-top: 15px
    }
    .detail .top {
        width: 100%;
        background-color: #fe8333;
        display: flex;
        border-radius: 5px;
        color: #ffffff;
    }
     .detail .top .left {
         width: 30%;
         text-align: center;
         line-height: 120px;
         font-size: 20px
     }
     .detail .top .right {
         flex: 1;
         font-size: 15px
     }
     .detail .top .right  ul {
         display: flex;
         flex-direction: column;
         justify-content: space-around;
     }
      .detail .top .right  ul li {
          width: 100%;
          text-align: left
      }

      .detail .bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          color: #fe8333;
          margin-top: 20px;
          font-size: 15px
      }
      .detail .areas {
          border: 1px solid #fe8333;
          width: 48%;
          border-radius: 5px;
      }
      .detail .title {
          text-align: center;
          line-height: 30px;
      }
      .detail .content {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
         
      }
       .detail .content li {
           width: 100%;
       }
</style>
