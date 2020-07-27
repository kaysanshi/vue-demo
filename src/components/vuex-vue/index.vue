<template>
    <div>Vuex 解决不同组件的数据共享，数据的持久化
        Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
        Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能
        用Vuex可以实现的用LocalStorage和SessionStorage都可以实现
        小项目中尽量不用这个可以使用Localstorage或者sessionStorage
        使用：
            安装vuex npm install vuex --save
            1.新建一个vuex的文件夹
            2.新建一个store.js
            3.在store.js引入vue ,vuex 并且use vuex 并暴露出去
            4.引入使用
            5.该变数据
                this.$store.commint('incCount')

        <!---{{this.$store.state.count}}--->
        <button @click="incCount()">改变数据</button>
    </div>
</template>
<script>
import store from '../vuex/store'
export default {
    data() {
        return {
            
        }
    },
    // 注册
    store,
    methods:{
        incCount(){
            this.$store.commit('incCount')
        }
    }
}
</script>
<style scoped>

</style>