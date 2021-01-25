<template>
  <a-list-item class="drag-div" style="position: relative">
    <a-card :title="item.name">
      <a-button
        slot="extra"
        icon="minus-circle"
        type="link"
        size="small"
        @click="removeAction"
      >
      </a-button>
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
      <pre-conditions
        :actionIndex="index"
        :preConditions="item.preConditions"
      ></pre-conditions>
      <post-conditions
        :actionIndex="index"
        :postConditions="item.postConditions"
      ></post-conditions>
    </a-card>
  </a-list-item>
</template>

<script>
import { mapState } from "vuex";
import PostConditions from "./post-conditions.vue";
import PreConditions from "./pre-conditions";
export default {
  props: ["item", "index"],
  components: {
    PreConditions,
    PostConditions,
  },
  methods: {
    removeAction() {
      this.$store.dispatch("removeAction", { actionIndex: this.index });
    },
  },
  computed: {
    ...mapState(["conditions", "stateActions"]),
  },
};
</script>

<style>
</style>