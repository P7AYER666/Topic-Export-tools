<template>
  <div>
    <el-form class="img_module">
      <el-form-item
        :label="activeComponent.componentType + ' Video Image'"
      ></el-form-item>
      <el-form-item>
        <el-input
          placeholder="Video URL"
          size="small"
          v-model="activeComponent.videoSrc"
        ></el-input>
      </el-form-item>
      <el-form-item label="Preview:" v-if="activeComponent.videoSrc">
        <video
          :style="{ width: '100%', height: '160px' }"
          :src="activeComponent.videoSrc"
          webkit-playsinline="true"
          playsinline="true"
          preload="auto"
          controls
        ></video>
      </el-form-item>
    </el-form>
    <div class="form-item_inline">
      <el-form-item label="W:">
        <el-input v-model="activeComponent.width" size="small"></el-input>
      </el-form-item>
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