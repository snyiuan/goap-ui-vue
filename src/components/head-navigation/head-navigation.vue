<template>
  <div>
    <div>
      <a-button
        class="btn"
        type="primary"
        shape="round"
        @click="handleClick('TASK')"
      >
        Add Tasks
      </a-button>
      <a-button
        class="btn"
        type="primary"
        shape="round"
        @click="() => handleClick('ACTION')"
      >
        Add Actions
      </a-button>
      <a-button class="btn" type="primary" shape="round" @click="generator">
        Generator
      </a-button>
    </div>
    <div>
      <a-modal
        :title="modalTitle"
        :visible="visible"
        @cancel="handleCancel"
        @ok="handleOk"
      >
        <a-input
          type="text"
          v-model="stateName"
          :aria-placeholder="modalTitle"
        />
      </a-modal>
    </div>
  </div>
</template>

<script>
// const aaa = require("../../generate/kgoap.js");
export default {
  data() {
    return {
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
    handleClick(type) {
      if (type === "TASK") {
        this.addType = "Task";
        this.visible = true;
      } else {
        this.addType = "Action";
        this.visible = true;
      }
    },
    handleOk() {
      let name = this.stateName;
      if (name) {
        this.$store.dispatch("add" + this.addType, name);
        this.stateName = "";
        this.visible = false;
      } else {
        this.handleCancel();
        this.$message.info(this.addType + " name can not be empty");
      }
    },
    generator() {
      this.$store.dispatch("generateResults", { vue: this });
    },
    handleCancel() {
      this.visible = false;
      this.stateName = "";
    },
  },
};
</script>

<style scope>
.btn {
  margin: 0px 16px;
}
</style>