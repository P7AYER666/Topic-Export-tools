<template>
  <div>
    <el-form class="img_module">
      <el-form-item
        :label="activeComponent.componentType + ' Cover Image'"
      ></el-form-item>
      <el-form-item>
        <el-input
          placeholder="Cover Image URL"
          size="small"
          v-model="activeComponent.coverSrc"
        ></el-input>
      </el-form-item>
      <el-form-item label="Preview:" v-if="activeComponent.coverSrc">
        <el-image
          style="width: 100%; height: 160px"
          :src="activeComponent.coverSrc"
          fit="contain"
        ></el-image>
      </el-form-item>
    </el-form>
    <div class="form-item_inline">
      <el-form-item label="W:">
        <el-input v-model="activeComponent.width" size="small"></el-input>
      </el-form-item>
      <!-- 标题背景高 -->
      <el-form-item label="H:">
        <el-input v-model="activeComponent.height" size="small"></el-input>
      </el-form-item>
    </div>
    <el-divider class="form-item_divider"></el-divider>
  </div>
</template>
        
  <script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "UploadComponentBackground",
  computed: {
    ...mapGetters("fc", ["activeComponent"]),
  },
};
</script>
        
<style>
</style>