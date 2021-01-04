<template>
  <div class="m-task">
    <a-row type="flex" justify="space-between">
      <a-col><a-icon type="star" theme="filled" />&nbsp;{{ task.name }}</a-col>
      <a-col>
        <a-popconfirm
          title="Are you sure delete this task"
          placement="right"
          ok-text="Yes"
          cancel-text="No"
          @confirm="removeTask"
        >
          <a-button size="small" type="link" icon="minus-circle"></a-button>
        </a-popconfirm>
      </a-col>
    </a-row>
    <a-input addonBefore="Name" v-model="tasks[index].name" />
    <a-row type="flex" justify="space-between">
      <p>Goal Conditions</p>
      <a-dropdown :trigger="['hover']">
        <a-button size="small" type="link" icon="plus-circle"></a-button>
        <a-menu slot="overlay">
          <template v-for="(condition, index) in conditions.arr">
            <a-menu-item :key="index">
              <a @click.prevent="addGoal(index)">{{ condition }}</a>
            </a-menu-item>
          </template>
        </a-menu>
      </a-dropdown>
    </a-row>
    <div class="goal-conditions" v-if="task.goalConditions.length">
      <a-list
        size="small"
        :split="false"
        :data-source="task.goalConditions"
        item-layout="horizontal"
      >
        <a-list-item slot="renderItem" slot-scope="goal, index">
          <a-checkbox :index="index" v-model="goal.state">{{
            conditions.arr[goal.conditionIndex]
          }}</a-checkbox>
          <a-button
            type="link"
            icon="minus-circle"
            size="small"
            @click="removeGoal(index)"
          ></a-button>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["task", "index"],
  methods: {
    removeTask() {
      this.$store.dispatch("removeTask", this.index);
    },
    addGoal(conditionIndex) {
      this.$store.dispatch("addGoal", {
        name: this.task.name,
        index: conditionIndex,
        vue: this,
      });
    },
    removeGoal(index) {
      this.task.goalConditions.splice(index, 1);
    },
    changeGoalState(val, val2) {
      console.log(val, val2);
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
  border: solid 1px rgb(0, 140, 255);
}
</style>