<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="header_item">设备</div>
        <div class="header_item">
          <el-form :inline="true" :model="deviceWH">
            <el-form-item label="W">
              <el-input v-model="deviceWidth"></el-input>
            </el-form-item>
            <el-form-item label="H">
              <el-input v-model="deviceHeight"></el-input>
            </el-form-item>
          </el-form>
        </div>

        <div class="header_item" style="margin-left: 40px">设计图</div>
        <div class="header_item">
          <el-form :inline="true" :model="designWH">
            <el-form-item label="W">
              <el-input v-model="designWidth"></el-input>
            </el-form-item>
            <el-form-item label="H">
              <el-input v-model="designHeight"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-header>
      <el-main>
        <element-controller></element-controller>
        <frame-controller
          :designWidth="designWidth"
          :designHeight="designHeight"
          :frameWidth="deviceWidth"
          :frameHeight="deviceHeight"
        ></frame-controller>
        <component-controller></component-controller>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ElementController from "@/components/LayOut/ElementController.vue";
import FrameController from "@/components/LayOut/FrameController.vue";
import ComponentController from "@/components/LayOut/ComponentController.vue";
export default {
  name: "App",
  components: {
    ElementController,
    FrameController,
    ComponentController,
  },
  data() {
    return {
      designWH: {},
      deviceWH: {},
      designWidth: "375", //设计图宽度
      designHeight: "1000", //设计图高度
      deviceWidth: "375", //设计图宽度
      deviceHeight: "1000", //设计图高度
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  background-color: rgb(235, 236, 237);
  position: relative;
}
</style>
