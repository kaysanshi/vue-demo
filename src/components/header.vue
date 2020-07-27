<template>
    <div> 我是子组件 父组件传入的值为:::{{title}}
        <div>父组件绑定的值{{name}}</div>
        <!-- 父传子，子传孙，使用 v-bind="$attrs"-->
        <header-er :name="name" v-bind="$attrs"></header-er>
        <button @click="run('我是这个方法')">子组件调用父组件的方法</button>
        <button @click="getRun()">子组件调用父组件数据和方法</button>

    </div>
    
</template>
<script>
import header_er from './header_er.vue'
export default {
    props:['title','name','run','home'],
    data() {
        return {
            msg:'我是子组件data'
        }
    },
    methods:{
        getRun(){
            console.log(this.home)

            // 执行父组件的方法
            this.home.run()
            // 执行父组件的方法
            this.home.run_away()
            // 调用父组件的方法的形式
            this.$parent.run_away()
        },
        child(){
            alert('你廖勇了我的方法')
            console.log('我是开林俊杰')
        }
       
    },
    components:{
        'header-er':header_er
    }
}
</script>
<style scoped>

</style>