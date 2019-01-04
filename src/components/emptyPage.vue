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
        // this.$router.go(0);
        
    },
    mounted(){
        this.$router.go(-1)
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
