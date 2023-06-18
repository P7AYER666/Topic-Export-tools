<template>
  <div>
    <el-form-item label="Outer Margin:"></el-form-item>
    <div class="form-item_inline">
      <el-form-item label="T:">
        <el-input size="small" v-model="activeComponent.marginTop"></el-input>
      </el-form-item>
      <el-form-item label="R:">
        <el-input size="small" v-model="activeComponent.marginRight"></el-input>
      </el-form-item>
    </div>
    <div class="form-item_inline">
      <el-form-item label="B:">
        <el-input
          size="small"
          v-model="activeComponent.marginBottom"
        ></el-input>
      </el-form-item>
      <el-form-item label="L:">
        <el-input size="small" v-model="activeComponent.marginLeft"></el-input>
      </el-form-item>
    </div>
    <el-divider class="form-item_divider"></el-divider>

  </div>
</template>
  
  <script>
import { mapGetters } from "vuex";
export default {
  name: "OuterMargin",
  computed: {
    ...mapGetters("fc", ["activeComponent"]),
  },
};
</script>
  
  <style>
</style>