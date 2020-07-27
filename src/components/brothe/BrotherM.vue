<template>
    <div>
        <div>我是兄弟M组件 </div>
    </div>

</template>
<script>
import bus from './Bus.js'

export default {
    data(){
        return{

        }
    },
    props:{
       
    },
    mounted(){
        bus.$on('toBrothM',function(data){
            console.log(data)
        })
    }
}
</script>
<style scoped>

</style>