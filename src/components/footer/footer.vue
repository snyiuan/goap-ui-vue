<template>
  <div class="f-container" v-drag>
    <div class="m-container">
      <div class="f-title">
        name<a-button
          type="primary"
          icon="close"
          style="float: right; border-radius: 8px"
        ></a-button>
      </div>
      <template v-for="(msg, index) in msgs">
        <p :key="index">{{ msg }}--{index}}</p>
      </template>
      <template v-for="(msg, index) in msgs.arr">
        <a-input type="text" :key="index" v-model="msgs.arr[index]">
          <a-icon slot="addonAfter" type="minus-circle" />
        </a-input>
      </template>
    </div>
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