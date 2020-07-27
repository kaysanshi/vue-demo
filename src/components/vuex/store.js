import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 1.在state用于Vuex中存储数据
var state={
    count:1
}
// 2.使用mutations改变state里面的数据，在mutations中主要放的是方法

var mutations={
    incCount(){
        ++state.count;
    }
}
// 3.实例化Vuex.Store
const store=new Vuex.Store({
    state,
    mutations
})
// 4.暴露出去这个
export default state