<template>
    <div>
        <div>我是孙子组件 {{name}}</div>
    </div>

</template>
<script>
export default {
    name:'header-er',
    data(){
        return{

        }
    },
    props:{
       name :{
           type:String
       }
    }
}
</script>
<style scoped>

</style>