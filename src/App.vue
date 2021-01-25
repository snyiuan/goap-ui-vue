<template>
  <div id="app">
    <a-layout>
      <a-layout-header :style="mstyle">
        <head-navigation></head-navigation>
      </a-layout-header>
      <a-layout>
        <a-layout-sider theme="light">
          <m-sider></m-sider>
        </a-layout-sider>

        <a-layout-content :style="{ marginTop: '64px' }">
          <Content />
        </a-layout-content>
      </a-layout>
      <a-layout-footer>
        <Footer />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import HeadNavigation from "./components/head-navigation/head-navigation.vue";
import { mapState } from "vuex";
import Content from "./components/content/content.vue";
import Footer from "./components/footer/footer.vue";
import MSider from "./components/m-sider/m-sider.vue";

export default {
  name: "App",
  data() {
    return {
      mstyle: {
        width: "100%",
        position: "fixed",
        "text-align": "center",
        zIndex: 1,
        background: "#fff",
      },
    };
  },
  components: {
    HeadNavigation,
    Content,
    Footer,
    MSider,
  },
  computed: {
    ...mapState(["tasks"]),
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
