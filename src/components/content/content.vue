<template>
  <div class="code-box-demo">
    <a-list
      :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
      :data-source="stateActions"
    >
      <template slot="renderItem" slot-scope="action, index">
        <action-item :item="action" :index="index"></action-item>
      </template>
    </a-list>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ActionItem from "../action-item/action-item.vue";
export default {
  components: { ActionItem },
  computed: {
    ...mapState(["stateActions"]),
  },
};
</script>

<style scope>
.code-box-demo {
  border-bottom: 1px solid #ebedf0;
  padding: 42px 24px 50px;
  color: rgba(0, 0, 0, 0.65);
}
</style>