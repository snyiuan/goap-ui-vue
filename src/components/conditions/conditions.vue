<template>
  <div class="conditions">
    <a-row type="flex" justify="space-between">
      <a-col>CONDITIONS</a-col>
      <a-button
        @click="addCondition"
        icon="plus-circle"
        size="small"
        type="link"
        shape="circle"
      ></a-button>
    </a-row>

    <a-list size="small" :data-source="conditions" item-layout="vertical">
      <a-list-item slot="renderItem" slot-scope="condition, index">
        <condition-item
          :condition="condition"
          :index="index"
          :conditions="conditions"
        />
      </a-list-item>
    </a-list>

    <a-modal
      title="Please enter message"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-input
        type="text"
        v-model="conditionText"
        aria-placeholder="Please enter condition"
      />
    </a-modal>
  </div>
</template>

<script>
import ConditionItem from "../condition-item/condition-item";
export default {
  data() {
    return {
      visible: false,
      conditionText: "",
    };
  },
  mounted() {
    console.log(this.conditions, this.conditions[0]);
  },
  props: ["conditions"],
  components: {
    ConditionItem,
  },
  methods: {
    deleteItem(index) {
      this.$store.dispatch("removeCondition", index);
    },
    addCondition() {
      this.visible = true;
    },

    handleOk() {
      let condition = this.conditionText;
      if (condition) {
        if (this.conditions.indexOf(condition) === -1) {
          this.$store.dispatch("addCondition", condition);
          this.conditionText = "";
          this.visible = false;
        } else {
          this.$message.info("Conditions has the same condition");
        }
      } else {
        this.handleCancel();
        this.$message.info("Condition can not be empty");
      }
    },
    handleCancel() {
      console.log("Click cancel button");
      this.conditionText = "";
      this.visible = false;
    },
  },
  computed: {},
};
</script>

<style scope>
.conditions {
  margin: 64px 0;
  padding: 10px;
}
</style>