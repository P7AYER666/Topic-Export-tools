<template>
  <div>
    <el-form-item label="Outer Padding:"></el-form-item>
    <div class="form-item_inline">
      <el-form-item label="T:">
        <el-input
          size="small"
          v-model="activeComponent.paddingTop"
        ></el-input> </el-form-item
      ><el-form-item label="R:">
        <el-input
          size="small"
          v-model="activeComponent.paddingRight"
        ></el-input>
      </el-form-item>
    </div>
    <div class="form-item_inline">
      <el-form-item label="B:">
        <el-input
          size="small"
          v-model="activeComponent.paddingBottom"
        ></el-input> </el-form-item
      ><el-form-item label="L:">
        <el-input size="small" v-model="activeComponent.paddingLeft"></el-input>
      </el-form-item>
    </div>
    <el-divider class="form-item_divider"></el-divider>
  </div>
</template>
  
  <script>
import { mapGetters } from "vuex";
export default {
  name: "OuterPadding",
  computed: {
    ...mapGetters("fc", ["activeComponent"]),
  },
};
</script>
  
  <style>
</style>