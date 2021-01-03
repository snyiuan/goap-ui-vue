<template>
  <div>
    <template v-for="(msg, index) in msgs">
      <p :key="index">{{ msg }}--{index}}</p>
    </template>
    <template v-for="(msg, index) in msgs.arr">
      <a-row type="flex" :key="index" justify="space-between">
        <a-col>
          <a-input type="text" :key="index" v-model="msgs.arr[index]" />
        </a-col>
        <a-col>
          <a-icon type="minus-circle" />
        </a-col>
      </a-row>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["msgs"]),
  },
};
</script>

<style>
</style>