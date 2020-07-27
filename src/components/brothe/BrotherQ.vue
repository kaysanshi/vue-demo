<template>
    <div>
        非父子组件传值：
        1.新建一个js文件，引入vue并实例化，暴露实例 export default Bus
        2.在要广播的地方引入刚才定义的实例
        3.通过 bus.$emit('name','data')
        4.在接受数据的地方通过$on进行监听并接受
            先引入bus.js
            bus.$on('name',function(){})
        <div>我是兄弟Q组件 </div>
        <button @click="sendMessage">给兄弟M发送消息</button>
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
    methods:{
        sendMessage(){
            bus.$emit('toBrothM','消息来一条')
        }
    }
}
</script>
<style scoped>

</style>