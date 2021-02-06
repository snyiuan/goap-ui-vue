<template>
  <div>
    <a-list
      v-if="results.length"
      :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
      :data-source="results"
    >
      <template slot="renderItem" slot-scope="item, index">
        <step-item :key="index" :result="item" :index="index"></step-item>
      </template>
    </a-list>
  </div>
</template>

<script>
import { mapState } from "vuex";
import stepItem from "./step/step-item.vue";

export default {
  components: { stepItem },
  computed: {
    ...mapState(["results"]),
  },
};
</script>

<style>
</style>