<template>
  <div id="app">
    <a-layout>
      <a-layout-header
        :style="{
          width: '100%',
          position: 'fixed',
          'text-align': 'center',
          zIndex: 1,
          background: '#fff',
        }"
      >
        <head-navigation></head-navigation>
      </a-layout-header>
      <a-layout>
        <a-layout-sider theme="light">
          <Conditions :conditions="conditions" />
          <hr />
          <template v-for="(task, index) in tasks">
            <Task
              :task="task"
              :key="index"
              :index="index"
              :conditions="conditions"
            />
          </template>
        </a-layout-sider>
        <a-layout-content :style="{ marginTop: '64px' }">
          <Content :conditions="conditions" />
        </a-layout-content>
      </a-layout>
      <a-layout-footer>
        <Footer />
      </a-layout-footer>
    </a-layout>
    <Footer :conditions="conditions" />
  </div>
</template>

<script>
import Conditions from "./components/conditions/conditions.vue";
import HeadNavigation from "./components/head-navigation/head-navigation.vue";
import { mapState } from "vuex";
import Task from "./components/task/task";
import Content from "./components/content/content.vue";
import Footer from "./components/footer/footer.vue";

export default {
  name: "App",
  data() {
    return {
      conditions: ["a", "b", "c", "d", "e", "f"],
    };
  },
  components: {
    HeadNavigation,
    Conditions,
    Task,
    Content,
    Footer,
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
