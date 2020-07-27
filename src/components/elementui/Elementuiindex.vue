<template>
    <div>
        使用 elementUi的
        1.安装
        2.在main.js引入使用组件和css：
            import ElementUI from 'element-ui'
            import 'element-ui/lib/theme-chalk/index.css';
            Vue.use(ElementUI)
        3.如果使用哪一个组件直接去官网进行
        <v-Table></v-Table>
    </div>
</template>
<script>
import VTable from './Table.vue'
export default {
    data(){
        return{

        }
    },
    methods: {
        
    },
    components:{
        'v-Table':VTable
    }
}
</script>
<style scoped>

</style>