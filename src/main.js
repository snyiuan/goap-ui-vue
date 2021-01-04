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

Vue.directive('drag', {
  bind: function (el) {
    let tdiv = el;
    tdiv.onmousedown = (e) => {
      //获取鼠标点击下的位置
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      //获取当前元素left 和top的值
      let tdivLeft =
        window.getComputedStyle(tdiv)["left"].split("px")[0] * 1;
      let tdivTop = window.getComputedStyle(tdiv)["top"].split("px")[0] * 1;
      // console.log("tdivXY: ", "(", tdivLeft, ",", tdivTop, ")");

      document.onmousemove = (e) => {
        //偏移=原偏移+鼠标移动后位置-鼠标点击位置
        let left = tdivLeft + e.clientX - mouseX;
        let top = tdivTop + e.clientY - mouseY;
        tdiv.style.left = left + "px";
        tdiv.style.top = top + "px";
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  },
})

new Vue({
  render: h => h(App),

}).$mount('#app')

