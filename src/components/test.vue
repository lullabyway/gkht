<template>
  <div class="load" v-loading.fullscreen.lock="fullscreenLoading">

  </div>
</template>
<script>
export default {
    data:function(){
        return({
            fullscreenLoading :false
        })
    },
    created(){
        this.fullscreenLoading =true
    },
    
}

</script>
<style lang="">
    
</style>