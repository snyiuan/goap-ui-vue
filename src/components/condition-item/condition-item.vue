<template>
<<<<<<< HEAD
  <a-input type="text" v-model="conditions.arr[index]" allowClear>
    <a-button
      slot="suffix"
      class="deleteBtn"
      type="link"
      shape="circle"
      icon="minus-circle"
      size="small"
      @click="deleteItem(index)"
    ></a-button>
=======
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
>>>>>>> parent of ce9dc8f... temp
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