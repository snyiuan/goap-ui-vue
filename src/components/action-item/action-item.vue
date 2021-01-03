<template>
  <a-card :title="item">
    <a-row type="flex" justify="space-between">
      <a-col>Name</a-col
      ><a-col><a-input type="text" v-model="stateActions.arr[index]" /></a-col>
    </a-row>
    <a-row type="flex" justify="space-between">
      <a-col>Cost</a-col><a-col><a-input type="number" v-model="cost" /></a-col>
    </a-row>
    <a-row type="flex" justify="space-between">
      <a-col>Pre Conditions</a-col>
      <a-col>
        <a-dropdown :trigger="['click']">
          <a-button
            icon="plus-circle"
            type="link"
            shape="circle"
            size="small"
          ></a-button>
          <a-menu slot="overlay">
            <template v-for="(condition, index) in conditions.arr">
              <a-menu-item :key="index">
                <a @click.prevent="addPreCondition(index)">{{ condition }}</a>
              </a-menu-item>
            </template>
          </a-menu>
        </a-dropdown>
      </a-col>
    </a-row>
    <a-list :data-source="preConditions" item-layout="vertical">
      <a-list-item slot="renderItem" slot-scope="condition, index">
        <a-row type="flex" justify="space-between">
          <a-col
            ><a-checkbox @chang="changeConditionState(condition)">{{
              conditions.arr[condition]
            }}</a-checkbox></a-col
          >
          <a-col
            ><a-button
              icon="minus-circle"
              type="link"
              shape="circle"
              size="small"
              @click="removePreCondition(index)"
            ></a-button
          ></a-col>
        </a-row>
      </a-list-item>
    </a-list>
    <a-row type="flex" justify="space-between">
      <a-col>Post Conditions</a-col>
      <a-col>
        <a-dropdown :trigger="['click']">
          <a-button
            icon="plus-circle"
            type="link"
            shape="circle"
            size="small"
          ></a-button>
          <a-menu slot="overlay">
            <template v-for="(condition, index) in conditions.arr">
              <a-menu-item :key="index">
                <a @click.prevent="addPostCondition(index)">{{ condition }}</a>
              </a-menu-item>
            </template>
          </a-menu>
        </a-dropdown>
      </a-col>
    </a-row>
    <a-list :data-source="postConditions" item-layout="vertical">
      <a-list-item slot="renderItem" slot-scope="condition, index">
        <a-row type="flex" justify="space-between">
          <a-col
            ><a-checkbox @chang="changeConditionState(condition)">{{
              conditions.arr[index]
            }}</a-checkbox></a-col
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
  </a-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["item", "index"],
  methods: {
    addPreCondition(index) {
      if (this.preConditions.indexOf(index) === -1) {
        this.preConditions.push(index);
      } else {
        this.$message.info("PreConditions are repeated");
      }
    },
    addPostCondition(index) {
      if (this.postConditions.indexOf(index) === -1) {
        this.postConditions.push(index);
      } else {
        this.$message.info("PostConditions are repeated");
      }
    },
    removePreCondition(index) {
      this.preConditions.splice(index, 1);
    },
    removePostCondition(index) {
      this.postConditions.splice(index, 1);
    },
    changeConditionState(condition) {
      console.log(condition);
    },
  },
  data() {
    return {
      cost: 0,
      preConditions: [],
      postConditions: [],
    };
  },
  watch: {
    cost(val) {
      console.log(val);
      // this.conditions.arr[this.index].cost
    },
  },
  computed: {
    ...mapState(["conditions", "stateActions"]),
  },
};
</script>

<style>
</style>