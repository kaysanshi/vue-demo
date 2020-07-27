import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BrotherQ from'@/components/brothe/BrotherQ'
import Content from '@/components/router-get/content'
import Content2 from '@/components/router-get/Content2'

import List from '@/components/router-get/list'
import ResourceList from '@/components/vue-resources/list'
import detail from '@/components/vue-resources/detail'

import pushList from '@/components/router-push/List'
import pushdetail from '@/components/router-push/Detail'
import User from '@/components/router-child/User'
import AddUser from '@/components/router-child/AddUser'
import ListUser from '@/components/router-child/UserList'

import minitUI from '@/components/mintUI/index'
import ElementUIindex from '@/components/elementui/Elementuiindex'

import ScollPage from '@/components/mintUI/ScollPage'

import vuexindex from '@/components/vuex-vue/index'



Vue.use(Router)
// 先引入-->use()-->实例化new Router({}) 并且暴露出去
// 路由就是动态的将页面挂载到app.vue下 在main.js中引入并且挂载到vue中

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/brother',
      name: 'BrotherQ',
      component: BrotherQ
    },{
      path: '/list',
      name: 'List',
      component: List
    },{
      path:'/content/:aid', // 动态路由
      name:'content',
      component:Content
    },
    {
      path:'/content2', // 动态路由
      name:'content2',
      component:Content2
    },
    {
      path:'/resourelist',
      name:'ResourceList',
      component:ResourceList
    },{
      path:'/detail/:aid',
      name:'detail',
      component:detail
    },
    {
      path:'/pushList',
      name:'pushList',
      component:pushList
    },{
      path:'/pushdetail/:aid',
      name:'pushdetail',
      component:pushdetail
    },{
      path:'/user',
      name:'user',
      component:User,
      children:[{
        path:'adduser',component:AddUser
      },{
        path:'userlist',component:ListUser
      }
    ]
    },{
      path:'/index',
      name:'minitUI',
      component:minitUI
    },{
      path:"/ScollPage",
      name:'ScollPage',
      component:ScollPage
    },{
      path:'/eleindex',
      name:'ElementUIindex',
      component:ElementUIindex
    },{
      path:"/vuexindex",
      name:'vuexindex',
      component:vuexindex
    }
  ]
})
