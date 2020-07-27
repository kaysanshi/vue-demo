<template>
    <div>
        详情页面get传值2:{{this.msg}}    
    </div>
</template>

<script>
export default {
    data() {
        return {
           msg:this.$route.query.aid 
        }
    },
    mounted() {
        console.log(this.$route.query)
    },
    methods: {
        
    },

}
</script>

<style>

</style>