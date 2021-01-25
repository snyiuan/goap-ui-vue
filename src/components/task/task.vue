<template>
  <div
    class="m-task"
    :style="{ border: task.main ? '1px solid green' : '1px solid #1890ff' }"
  >
    <a-row type="flex" justify="space-between">
      <a-col>
        <!-- <a-button @click="setMain" size="small" icon="star" type="link" /> -->
        <a-icon
          @click="setMainTask"
          type="star"
          :style="{ color: '#1890ff' }"
          :theme="task.main ? 'filled' : 'outlined'"
        />
        <!-- <a-icon type="star" /> -->
        &nbsp;{{ task.name }}
      </a-col>
      <a-col>
        <a-button
          @click="removeTask"
          size="small"
          type="link"
          icon="minus-circle"
        ></a-button
      ></a-col>
    </a-row>
    <a-row type="flex" justify="space-between">
      Name:
      <a-input v-model="tasks[index].name" />
    </a-row>
    <goal-conditions
      :goalConditions="task.goalConditions"
      :taskIndex="index"
    ></goal-conditions>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GoalConditions from "./goal-conditions.vue";
export default {
  components: { GoalConditions },
  props: ["task", "index"],
  methods: {
    setMainTask() {
      this.$store.dispatch("setMainTask", { taskIndex: this.index });
    },
    removeTask() {
      this.$store.dispatch("removeTask", { taskIndex: this.index });
    },
  },
  computed: {
    ...mapState(["conditions", "tasks"]),
  },
};
</script>

<style>
.m-task {
  padding: 10px;
  /* border: solid 1px rgba(0, 140, 255, 0.884); */

  margin: 1px 0;
}
</style>