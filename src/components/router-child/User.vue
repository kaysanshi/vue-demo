<template>
  <div>
      <div class="user">
          <div class="left">
              <ul>
                  <li><router-link to="/user/adduser">增加用戶</router-link></li>
                  <li><router-link to="/user/userlist">用戶列表</router-link></li>
              </ul>
          </div>
          <div class="right">
              <!--路由的嵌套-->
              <router-view></router-view>  
          </div>
      </div>
  </div>
</template>

<script>
// 路由嵌套
// 1.配置路由在父路由中配置子路由，通过 <router-link></router-link>进行路由跳转
// 2.如果想使用哪一个div需要使用<router-view></router-view>进行路由嵌套
export default {

}
</script>

<style  scoped>
    .user{
        display: flex;
        
    }
    .left{
         width: 200px;
         min-height: 400px;
         border-right: 1px solid #eee;   
        }
    .right{
        flex: 1
    }
</style>