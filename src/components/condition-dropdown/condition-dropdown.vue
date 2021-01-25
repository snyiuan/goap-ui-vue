<template>
  <div>
    <a-dropdown :trigger="['hover']">
      <a-button size="small" type="link" icon="plus-circle"></a-button>
      <a-menu slot="overlay">
        <template v-for="(condition, targetIndex) in conditions">
          <a-menu-item :key="targetIndex">
            <a @click.prevent="handleClick(targetIndex)">{{
              condition.name
            }}</a>
          </a-menu-item>
        </template>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["handleAdd"],
  methods: {
    handleClick(targetIndex) {
      this.handleAdd(targetIndex);
    },
  },
  computed: {
    ...mapState(["conditions"]),
  },
};
</script>

<style>
</style>