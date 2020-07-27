<template>
    <div>
        <ul>
            使用vue-resource
            1。npm install --save vue-resource 
            2. 使用get方法 
                this.$http.get('',function(){

                })
            3.使用动态路由传值 和 get传值不同
                动态路由时 在路径中 / AA/dd   
                    接收这个传入的参数的形式是 this.route.params.dd
                get传值是 ?   ?aa= 
                    接收get传入的参数的值是 this.route.query.aa
            <li v-for="(item,key) in list" :key="key">
                <router-link :to="'/detail/'+item.aid">{{item.title}}--{{key}}</router-link>
            </li>

        </ul>   
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            list:[],

        }
    },
    mounted(){
        this.requestData()
    },
    methods:{
       requestData(){
           var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=10&page=1"
           this.$http.jsonp(api).then((res)=>{
               console.log(res) 
               this.list=res.body.result
           },function(error){
              console.log(error) 

           })
       }
       
    },
    components:{
    }
}
</script>
<style scoped>

</style>