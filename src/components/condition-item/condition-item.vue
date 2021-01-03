<template>
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