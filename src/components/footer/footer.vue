<template>
  <div class="f-container" v-drag>
    <div class="m-container">
      <div class="f-title">
        name<a-button
          type="primary"
          icon="close"
          style="float: right; border-radius: 8px"
        ></a-button>
      </div>
      <p>msgs0:{{ msgs[0] }}</p>
      <p>msgs0:{{ msgs[0] }}</p>
      <p>msgs0:{{ msgs[0] }}</p>
      <p>msgs0:{{ msgs[0] }}</p>
      <p>msgs0:{{ msgs[0] }}</p>
      <p>msgs0:{{ msgs[0] }}</p>
      <template v-for="(msg, index) in msgs">
        <a-input type="text" :key="index" v-model="msgs[index]">
          <a-icon slot="addonAfter" type="minus-circle" />
        </a-input>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["msgs"]),
  },

  methods: {
    move(e) {
      // console.log(this);
      //获取鼠标位置
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      console.log("mouseXY: ", "(", mouseX, ",", mouseY, ")");

      //获取当前元素left 和top的值
      let tdiv = this.$el; //获取目标元素
      let tdivLeft = window.getComputedStyle(tdiv)["left"].split("px")[0] * 1;
      let tdivTop = window.getComputedStyle(tdiv)["top"].split("px")[0] * 1;

      console.log("tdivXY: ", "(", tdivLeft, ",", tdivTop, ")");
      document.onmousemove = (e) => {
        // let left = tdivLeft + e.movementX;
        // let top = tdivTop + e.movementY;
        console.log(e);
        let left = tdivLeft + e.clientX - mouseX;
        let top = tdivTop + e.clientY - mouseY;

        tdiv.style.left = left + "px";
        tdiv.style.top = top + "px";
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
  },
};
</script>

<style scope>
.out-container {
  width: 100%;
  height: 1000px;
}

.f-container {
  background: white;
  position: relative;
  width: 30%;
  padding: 50px;
  border: 2px solid grey;
  border-radius: 10px;
}
.f-title {
  margin: -11px -11px 0 0;
}
</style>