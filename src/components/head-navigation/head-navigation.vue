<template>
  <div>
    <a-menu theme="light" mode="horizontal">
      <a-menu-item key="1"> <a-icon type="mail" />Navigation One </a-menu-item>
      <a-menu-item key="2" @click="AddAction">
        <a-icon type="mail" />Add Action
      </a-menu-item>
      <a-menu-item key="3" @click="AddTask">
        <a-icon type="mail" />Add Task
      </a-menu-item>
    </a-menu>

    <a-modal
      :title="modalTitle"
      :visible="visible"
      @cancel="handleCancel"
      @ok="handleOk"
    >
      <a-input type="text" v-model="stateName" :aria-placeholder="modalTitle" />
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ["1"],
      stateName: "",
      visible: false,
      addType: "",
    };
  },
  computed: {
    modalTitle() {
      return "Please enter " + this.addType + " name";
    },
  },

  methods: {
    AddAction() {
      this.addType = "Action";
      this.visible = true;
    },
    AddTask() {
      this.addType = "Task";
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
      this.stateName = "";
    },
    handleOk() {
      var arr;
      if (this.addType === "Task") {
        arr = this.$store.state.tasks.arr;
      } else {
        arr = this.$store.state.stateActions.arr;
      }
      let text = this.stateName;
      if (text) {
        if (arr.indexOf(text) === -1) {
          this.$store.dispatch("add" + this.addType, text);
          this.stateName = "";
          this.visible = false;
        } else {
          this.$message.info(this.addType + " name is repeated");
        }
      } else {
        this.handleCancel();
        this.$message.info(this.addType + " name cat not be empty");
      }
    },
  },
};
</script>

<style>
</style>