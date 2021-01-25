<template>
  <div>
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
                  condition.name
                }}</a>
              </a-menu-item>
            </template>
          </a-menu>
        </a-dropdown>
      </a-col>
    </a-row>
    <div class="pre-conditions" v-if="preConditions.length">
      <a-list :data-source="preConditions" item-layout="vertical">
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
                @click="removePreCondition(index)"
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
  props: ["actionIndex", "preConditions"],
  methods: {
    addPreCondition(conditionIndex) {
      console.log("addPre");
      this.$store.dispatch("addPreCondition", {
        actionIndex: this.actionIndex,
        targetIndex: conditionIndex,
        vue: this,
      });
    },
    removePreCondition(index) {
      this.$store.dispatch("removePreCondition", {
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