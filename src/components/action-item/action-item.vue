<template>
  <a-list-item class="drag-div" style="position: relative" v-drag>
    <a-card :title="item.name">
      <a-input
        addonBefore="Name"
        type="text"
        v-model="stateActions[index].name"
      />
      <br />
      <br />
      <a-input addonBefore="Cost" type="number" v-model="item.cost" />
      <br />
      <br />
      <a-row type="flex" justify="space-between">
        <a-col>Pre Conditions</a-col>
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
                  <a @click.prevent="addPreCondition(conditionIndex)">{{
                    condition
                  }}</a>
                </a-menu-item>
              </template>
            </a-menu>
          </a-dropdown>
        </a-col>
      </a-row>
      <div class="pre-conditions" v-if="item.preConditions.length">
        <a-list :data-source="item.preConditions" item-layout="vertical">
          <a-list-item slot="renderItem" slot-scope="condition, index">
            <a-row type="flex" justify="space-between">
              <a-col
                ><a-checkbox v-model="condition.state">{{
                  conditions[condition.conditionIndex]
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
      </div>

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
                    condition
                  }}</a>
                </a-menu-item>
              </template>
            </a-menu>
          </a-dropdown>
        </a-col>
      </a-row>

      <div class="post-conditions" v-if="item.postConditions.length">
        <a-list :data-source="item.postConditions" item-layout="vertical">
          <a-list-item slot="renderItem" slot-scope="condition, index">
            <a-row type="flex" justify="space-between">
              <a-col
                ><a-checkbox v-model="condition.state">{{
                  conditions[condition.conditionIndex]
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
      </div>
    </a-card>
  </a-list-item>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["item", "index", "conditions"],
  mounted() {
    console.log(this.conditions);
  },
  methods: {
    addPreCondition(conditionIndex) {
      console.log("addPre");
      this.$store.dispatch("addPreCondition", {
        name: this.item.name,
        index: conditionIndex,
        vue: this,
      });
    },
    removePreCondition(index) {
      this.item.preConditions.splice(index, 1);
    },
    addPostCondition(conditionIndex) {
      console.log("addPost");
      this.$store.dispatch("addPostCondition", {
        name: this.item.name,
        index: conditionIndex,
        vue: this,
      });
    },
    removePostCondition(index) {
      this.item.postConditions.splice(index, 1);
    },
  },
  computed: {
    ...mapState(["stateActions"]),
  },
};
</script>

<style>
</style>