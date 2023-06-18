<template>
  <div>
    <el-form class="img_module">
      <el-form-item>
        <el-input
          placeholder="BackgroundImage URL"
          size="small"
          v-model="backgroundImage"
        ></el-input>
      </el-form-item>
      <el-form-item label="Preview:" v-if="backgroundImage">
        <el-image
          style="width: 100%; height: 160px"
          :src="backgroundImage"
          fit="contain"
        ></el-image>
      </el-form-item>
    </el-form>
    <div class="form-item_inline">
      <el-form-item label="W:">
        <el-input v-model="bodyWidth" disabled></el-input> </el-form-item
      ><el-form-item label="H:">
        <el-input v-model="bodyHeight" disabled></el-input>
      </el-form-item>
    </div>
  </div>
</template>
        
  <script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "UploadBodyBackground",
  computed: {
    ...mapGetters("fc", ["activeComponent"]),
    ...mapState("fc", {
      bodyWidth: (state) => state.domTree[0].style.width,
      bodyHeight: (state) => state.domTree[0].style.height,
    }),
    backgroundImage: {
      get() {
        return this.$store.state.fc.domTree[0].style.backgroundImage;
      },
      set(value) {
        this.$store.state.fc.domTree[0].style.backgroundImage = value;
      },
    },
  },
};
</script>
        
<style>
</style>