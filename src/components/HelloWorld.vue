<template>
  <div class="hello">
    首页组件---我是父组件
    父组件给子组件传值只需要在父组件中绑定一个值然后在子组件接收一些这个值 通过props:['title']
    1.父组件传值给子组件，在父组件调用子组件时绑定动态属性
    2.子组件通过props:['属性'] 这样就可以接收到了。
    3.同时可以在子组件中定义要传入的值
    4.可以直接传入父组件的方法，通过直接传入run方法
    5.可以直接传入home组件的对象本身
    <v-header :title="title" :name="name" :run="run" :home="this" ref="header"></v-header>
    父组件主动获取子组件的数据和方法
    1.调用子组件的时候定义一个ref
    2.在父组件中通过以下放式直接调用
      this.$refs.子组件名称.属性
      this.$refs.子组件.方法
    <button @click="getChildData">获取子组件的数据和方法</button>
  </div>
</template>

<script>
import Header from './header.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'23333我是传入的值',
      name:'张飞 飞大灰机',
    }
  },
  components:{
    'v-header':Header
  },
  methods:{
     run(){
            alert('我是Home组件')
        },
     run_away(){
       alert('我是父组件中的定义的方法')
     },
     getChildData(){
       alert(this.$refs.header.msg)
       this.$refs.header.child() // 获取子组件的方法
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
