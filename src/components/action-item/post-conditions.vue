<template>
  <div>
    <a-row type="flex" justify="space-between">
      <a-col>Post Conditions</a-col>
      <a-col>
        <a-dropdown :trigger="['hover']">
          <a-button
            icon="plus-circle"
            type="link"
            shape="circle"
            size="small"
          ></a-button>
          <a-menu slot="overlay">
            <template v-for="(condition, conditionIndex) in conditions">
              <a-menu-item :key="conditionIndex">
                <a @click.prevent="addPostCondition(conditionIndex)">{{
                  condition.name
                }}</a>
              </a-menu-item>
            </template>
          </a-menu>
        </a-dropdown>
      </a-col>
    </a-row>

    <div class="post-conditions" v-if="postConditions.length">
      <a-list :data-source="postConditions" item-layout="vertical">
        <a-list-item slot="renderItem" slot-scope="condition, index">
          <a-row type="flex" justify="space-between">
            <a-col
              ><a-checkbox
                v-model="condition.checked"
                :style="{ color: condition.checked ? 'lawngreen' : 'red' }"
                >{{ conditions[condition.index].name }}</a-checkbox
              ></a-col
            >
            <a-col
              ><a-button
                icon="minus-circle"
                type="link"
                shape="circle"
                size="small"
                @click="removePostCondition(index)"
              ></a-button
            ></a-col>
          </a-row>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["actionIndex", "postConditions"],
  methods: {
    addPostCondition(conditionIndex) {
      this.$store.dispatch("addPostCondition", {
        actionIndex: this.actionIndex,
        targetIndex: conditionIndex,
        vue: this,
      });
    },
    removePostCondition(index) {
      this.$store.dispatch("removePostCondition", {
        actionIndex: this.actionIndex,
        targetIndex: index,
      });
    },
  },
  computed: {
    ...mapState(["conditions", "stateActions"]),
  },
};
</script>

<style>
</style>