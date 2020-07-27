<template>
    <div>
        <ul>
            路由动态传值
            <li v-for="(item,key) in list" :key="key">
                <router-link :to="'/content/'+key">{{item}}--{{key}}</router-link>
            </li>

            get传值
            <li v-for="(item,key2) in list2" :key="key2">
                <router-link :to="'/content2?aid='+key2">{{item}}--{{key2}}</router-link>
            </li>
        </ul>   
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            list:['DataA','DataB','DataC','DataD','DataE','DataF'],
            list2:['DataA2','DataB2','DataC2','DataD2','DataE2','DataF2']

        }
    },
    methods:{
       
       
    },
    components:{
    }
}
</script>
<style scoped>

</style>