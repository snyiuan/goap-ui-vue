<template>
  <a-input type="text" v-model="conditions[index].name">
    <a-popconfirm
      slot="addonAfter"
      title="Are you sure delete this condition"
      ok-text="Yes"
      cancel-text="No"
      @confirm="deleteItem(index)"
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
    deleteItem(index) {
      this.$store.dispatch("removeCondition", index);
    },
  },
};
</script>

<style>
</style>