// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// require('../static/iconfont.css')
Vue.config.productionTip = false
import {a} from './test'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
console.log(_)
a()
$.ajax({
  method:'get',
  url:'/api/users',
  // url:'/exception/list',
  responseType:'json',
  dataType:'json',
  success(data){
    console.log(data)
  },
  error(e){
    console.error(e)
  }
})
