<template>
  <div class="m-task">
    <a-row type="flex" justify="space-between">
      <a-col><a-icon type="star" theme="filled" />&nbsp;{{ task.name }}</a-col>
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
    <a-row type="flex" justify="space-between">
      <p>Goal Conditions</p>
      <a-dropdown :trigger="['click']">
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
    <div class="goalConditions">
      <a-list
        size="small"
        :split="false"
        :data-source="goals"
        item-layout="horizontal"
      >
        <a-list-item slot="renderItem" slot-scope="goal, index">
          <a-checkbox :index="index" v-model="sig">{{
            conditions.arr[goal]
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
  data() {
    return {
      goals: [],
      sig: false,
    };
  },
  methods: {
    removeTask() {
      this.$store.dispatch("removeTask", this.index);
    },
    addGoal(index) {
      if (this.goals.indexOf(index) === -1) {
        console.log("add arr:", index);
        this.goals.push(index);
      } else {
        this.$message.info("goals are repeated");
      }
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
    changeGoalState(val, val2) {
      console.log(val, val2);
    },
  },
  watch: {
    goals: {
      handler: function (val, oldval) {
        console.log("new:", val, "old", oldval);
      },
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