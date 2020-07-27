<template>
    <div>
        详情页面{{this.msg}}    
    </div>
</template>

<script>
export default {
    data() {
        return {
           msg:this.$route.params.aid 
        }
    },
    mounted() {
        console.log(this.$route.params)
    },
    methods: {
        
    },

}
</script>

<style>

</style>