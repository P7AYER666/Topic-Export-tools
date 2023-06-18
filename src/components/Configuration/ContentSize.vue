<template>
  <div>
    <el-form-item label="width:">
      <el-input size="small" v-model="activeComponent.width"
        ><template slot="append">px</template></el-input
      >
    </el-form-item>
    <el-form-item label="height:">
      <el-input size="small" v-model="activeComponent.height"
        ><template slot="append">px</template></el-input
      >
    </el-form-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ContentSize",
  computed: {
    ...mapGetters("fc", ["activeComponent"]),
  },
};
</script>

<style>
</style>