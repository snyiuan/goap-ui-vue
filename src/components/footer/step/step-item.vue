<template>
  <a-list-item>
    <a-card :title="index + 1 + ' ' + result[0]">
      <a-list :data-source="Array.from(result[1])">
        <!-- <a-list-item slot="renderItem" slot-scope="item, index">
          <div :key="index">{{ item.name }}</div>
        </a-list-item> -->
        <template slot="renderItem" slot-scope="item, index">
          <div :key="index">
            <a-checkbox v-model="item[1]">{{ item[0] }}</a-checkbox>
          </div>
        </template>
      </a-list>
    </a-card>
  </a-list-item>
</template>

<script>
export default {
  props: ["result", "index"],
};
</script>

<style>
</style>