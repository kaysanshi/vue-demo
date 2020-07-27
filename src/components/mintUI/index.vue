<template>
  <div>
    mintUI使用：
        1。安装npm install --save mint-ui
        2。在main.js中配置：使用组件和css
            import MintUI from 'mint-ui'
            import 'mint-ui/lib/style.css'
            Vue.use(MintUI)
        3.直接使用可以直接在git找得到用例然后直接使用
    <div>
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
    </div>
    <div>
        <ActionSheet></ActionSheet>
    </div>
    <div>
      <mt-index-list>
        <mt-index-section index="A">
          <mt-cell title="Aaron"></mt-cell>
          <mt-cell title="Alden"></mt-cell>
          <mt-cell title="Austin"></mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>...
        <mt-index-section index="Z">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>
<script>
import ActionSheet from './ActionSheet'
export default {
  data() {
    return {};
  },
  components:{
      'ActionSheet':ActionSheet
  }
};
</script>
<style scoped>
</style>