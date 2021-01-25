<template>
  <div>
    <Conditions />
    <hr />
    <world-state></world-state>
    <template v-for="(task, index) in tasks">
      <Task :task="task" :key="index" :index="index" />
    </template>
  </div>
</template>

<script>
import Task from "../task/task";
import Conditions from "../conditions/conditions";
import { mapState } from "vuex";
import WorldState from "./world-state.vue";
export default {
  components: {
    Task,
    Conditions,
    WorldState,
  },
  computed: {
    ...mapState(["tasks"]),
  },
};
</script>

<style>
</style>