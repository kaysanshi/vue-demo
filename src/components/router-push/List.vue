<template>
    <div>
        编程式导航
        使用 'router-link'创建的a标签来定义链接，我们还可以借助于router的实例方法
        注意：在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push。
        想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
        当你点击 router-link 时，这个方法会在内部调用，所以说，点击  router-link :to="..." 等同于调用 router.push(...)。
        可以使用以下方式：
            router.push('home')
            router.push({path:'home'})
            router.push({name:'user',params:{userId:'123'}}) 命名的路由
            router.push({path:'register',query:{plan:'private'}}) 带参数查询的
                const userId = '123'
                router.push({ name: 'user', params: { userId }}) // -> /user/123
                router.push({ path: `/user/${userId}` }) // -> /user/123
                // 这里的 params 不生效
                router.push({ path: '/user', params: { userId }}) // -> /user
        《<button @click="godetail()">通过js跳转到新闻页面</button>
        《<button @click="godetail2()">通过name定义js跳转到新闻页面2</button>


    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        // 两种跳转模式
        godetail(){
            this.$router.push({path:'pushdetail/44'}) 
        },
         godetail2(){
            const id='44'
            this.$router.push({name:'pushdetail',params:{aid:id}}) 
        }
    },
    mounted() {
        
    },
    components:{

    }
}
</script>
<style scoped>

</style>