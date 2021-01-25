<template>
  <div>
    <a-row type="flex" justify="space-between">
      <p>Goal Conditions</p>
      <a-dropdown :trigger="['hover']">
        <a-button size="small" type="link" icon="plus-circle"></a-button>
        <a-menu slot="overlay">
          <template v-for="(condition, targetIndex) in conditions">
            <a-menu-item :key="targetIndex">
              <a @click.prevent="addGoal(taskIndex, targetIndex)">{{
                condition.name
              }}</a>
            </a-menu-item>
          </template>
        </a-menu>
      </a-dropdown>
    </a-row>
    <div class="goalConditions" v-if="tasks[taskIndex].goalConditions.length">
      <a-list
        size="small"
        :data-source="goalConditions"
        item-layout="horizontal"
      >
        <a-list-item slot="renderItem" slot-scope="goal, index">
          <a-checkbox
            :index="index"
            v-model="goal.checked"
            :style="{ color: goal.checked ? 'lawngreen' : 'red' }"
            >{{ conditions[goal.index].name }}</a-checkbox
          >
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
  props: ["goalConditions", "taskIndex"],
  computed: {
    ...mapState(["conditions", "tasks"]),
  },
  methods: {
    addGoal(taskIndex, targetIndex) {
      this.$store.dispatch("addGoal", {
        vue: this,
        taskIndex,
        targetIndex,
      });
    },
    removeGoal(index) {
      this.tasks[this.taskIndex].goalConditions.splice(index, 1);
    },
  },
};
</script>

<style>
</style>