<template>
  <div>
    <a-input type="text" disabled v-model="conditions[index].name">
      <a-popconfirm
        slot="addonAfter"
        title="Are you sure delete this condition"
        ok-text="Yes"
        cancel-text="No"
        @confirm="deleteItem(index)"
        placement="right"
      >
        <a-button
          type="link"
          shape="circle"
          icon="minus-circle"
          size="small"
        ></a-button>
      </a-popconfirm>
      <a-button
        slot="addonAfter"
        type="link"
        shape="circle"
        icon="setting"
        @click="clickSetting"
        size="small"
      ></a-button>
    </a-input>
    <a-modal
      title="Change condition"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-input v-model="tempCondition" />
    </a-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      visible: false,
      tempCondition: "",
      confirmLoading: false,
    };
  },
  props: ["condition", "index"],
  computed: {
    ...mapState(["conditions"]),
  },
  methods: {
    clickSetting() {
      this.tempCondition = this.condition.name;
      this.visible = true;
    },
    deleteItem(index) {
      this.$store.dispatch("removeCondition", index);
    },
    handleOk() {
      this.confirmLoading = true;
      this.$store.dispatch("changeCondition", {
        conditionIndex: this.index,
        conditionName: this.tempCondition,
        vue: this,
      });
      this.confirmLoading = false;
      this.visible = false;
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>

<style>
</style>