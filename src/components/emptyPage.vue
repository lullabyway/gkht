<template>
    
</template>
<script>
export default {
    name:'emptyPage',
    data:function(){
        return({

        })
    },
    created(){
        this.$router.go(0);
        
    },
    mounted(){
        this.$router.replace('./updataip')
    }
    // beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //         vm.$router.replace("/login")
    //     })
    // }

}
</script>
<style>

</style>
