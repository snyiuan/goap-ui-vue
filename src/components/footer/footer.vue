<template>
  <div class="f-container">
<!--    <div class="m-container">-->
<!--      <div class="f-title">-->
<!--        name<a-button-->
<!--          type="primary"-->
<!--          icon="close"-->
<!--          style="float: right; border-radius: 8px"-->
<!--        ></a-button>-->
<!--      </div>-->
<!--      <template v-for="(msg, index) in msgs">-->
<!--        <p :key="index">{{ msg }}&#45;&#45;{index}}</p>-->
<!--      </template>-->
<!--      <template v-for="(msg, index) in msgs">-->
<!--        <a-input type="text" :key="index" v-model="msgs[index]">-->
<!--          <a-icon slot="addonAfter" type="minus-circle" />-->
<!--        </a-input>-->
<!--      </template>-->
<!--    </div>-->
    footer
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