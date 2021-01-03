import Vue from 'vue'
import App from './App.vue'
import {
  Button, Modal, Input, message, List, Card,
  Popconfirm, Menu, Icon, Layout, Dropdown,
  Row, Checkbox, Col,
} from 'ant-design-vue'
import store from './store/store'

Vue.use(Button)
Vue.use(Col)
Vue.use(Checkbox)
Vue.use(Row)
Vue.use(Dropdown)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Popconfirm)
Vue.use(Card)
Vue.use(Input)
Vue.use(Modal)
Vue.use(List)

Vue.config.productionTip = false;

Vue.prototype.$store = store;
Vue.prototype.$message = message;

new Vue({
  render: h => h(App),
}).$mount('#app')

