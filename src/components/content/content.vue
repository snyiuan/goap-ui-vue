<template>
  <div class="code-box-demo">
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="stateActions">
      <template slot="renderItem" slot-scope="action, index">
        <action-item
          :item="action"
          :index="index"
          :conditions="conditions"
        ></action-item>
      </template>
    </a-list>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ActionItem from "../action-item/action-item.vue";
export default {
  components: { ActionItem },
  props: ["conditions"],
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