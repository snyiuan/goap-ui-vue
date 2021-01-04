<template>
  <a-input type="text" @pressEnter="inputEnter" v-model="conditions.arr[index]">
    <a-popconfirm
      slot="addonAfter"
      title="Are you sure delete this condition"
      ok-text="Yes"
      cancel-text="No"
      @confirm="deleteItem"
      placement="right"
    >
      <a-button
        type="link"
        shape="circle"
        icon="minus-circle"
        size="small"
      ></a-button>
      <a-button
        type="link"
        shape="circle"
        icon="setting"
        @click.stop="clickSetting"
        size="small"
      ></a-button>
    </a-popconfirm>
  </a-input>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["condition", "index"],
  computed: {
    ...mapState(["conditions"]),
  },
  methods: {
    deleteItem() {
      this.$store.dispatch("removeCondition", this.index);
    },
    clickSetting() {
      console.log("clicksetting");
    },
    inputEnter() {
      console.log("input enter");
    },
    iChange(v) {
      console.log(v);
    },
  },
};
</script>

<style>
</style>