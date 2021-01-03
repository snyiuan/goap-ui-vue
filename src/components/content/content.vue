<template>
  <div class="code-box-demo">
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="stateActions.arr">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <action-item :item="item" :index="index"></action-item>
      </a-list-item>
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