<template>
    <div>
        详情页面 
        <h2>{{list.title}}</h2>
        <h3>{{list.summary}}</h3>

        <div v-html="list.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           list:[]
        }
    },
    mounted() {
        var aid=this.$route.params.aid
        console.log (aid)
        this.requestData(aid)
    },
    methods: {
        requestData(aid){
           var api="http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+aid;
           this.$http.jsonp(api).then((res)=>{
               console.log(res) 
               this.list=res.body.result[0]
           },(error)=>{
              console.log(error) 

           })
       }
    },

}
</script>

<style>

</style>