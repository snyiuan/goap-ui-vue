<template>
  <div class="world-state">
    <a-card title="world state">
      <condition-dropdown
        slot="extra"
        :handleAdd="handleAdd"
      ></condition-dropdown>
      <a-list
        :data-source="worldStates"
        itemLayout="vertical"
        size="small"
        v-if="worldStates.length"
      >
        <a-list-item slot="renderItem" slot-scope="state, index">
          <a-checkbox
            :index="index"
            v-model="state.checked"
            :style="{ color: state.checked ? 'lawngreen' : 'red' }"
          >
            {{ conditions[state.index].name }}</a-checkbox
          >
          <a-button
            type="link"
            icon="minus-circle"
            size="small"
            @click="removeWorldState(index)"
          ></a-button>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ConditionDropdown from "../condition-dropdown/condition-dropdown.vue";
export default {
  components: { ConditionDropdown },
  methods: {
    handleAdd(targetIndex) {
      this.$store.dispatch("addWorldState", {
        targetIndex: targetIndex,
        vue: this,
      });
    },
    removeWorldState(index) {
      this.$store.dispatch("removeWorldState", { index });
    },
  },

  computed: {
    ...mapState(["conditions", "worldStates"]),
  },
};
</script>

<style scope>
.world-state {
  border: 1px solid #1890ff;
}
</style>