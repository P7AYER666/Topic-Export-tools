<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="header_item">DEVICE</div>
        <div class="header_item">
          <el-form :inline="true">
            <el-form-item label="W:">
              <el-input v-model="deviceWidthModel"></el-input>
            </el-form-item>
            <el-form-item label="H:">
              <el-input v-model="deviceHeightModel"></el-input>
            </el-form-item>
          </el-form>
        </div>

        <div class="header_item" style="margin-left: 40px">DESIGN</div>
        <div class="header_item">
          <el-form :inline="true">
            <el-form-item label="W:">
              <el-input v-model="bodyWidthModel"></el-input>
            </el-form-item>
            <el-form-item label="H:">
              <el-input v-model="bodyHeightModel"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-header>
      <el-main>
        <!-- <div class="element-controller"> -->
        <!-- <div class="drag-handle" @mousedown="startDragging"></div> -->
        <!-- 这里放置 element-controller 组件的内容 -->
        <element-controller></element-controller>
        <!-- </div> -->
        <!-- <div class="component-controller"> -->
        <frame-controller></frame-controller>
        <!-- <div class="drag-handle" @mousedown="startDragging"></div> -->
        <!-- 这里放置 component-controller 组件的内容 -->
        <!-- </div> -->
        <!-- <element-controller></element-controller> -->
        <component-controller></component-controller>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
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
      isDragging: false,
      startX: 0,
      startWidths: {
        elementController: "200px",
        componentController: "200px",
      },
    };
  },
  computed: {
    ...mapState("fc", {
      deviceWidth: (state) => state.deviceWidth,
      deviceHeight: (state) => state.deviceHeight,
      bodyWidth: (state) => state.domTree[0].style.width,
      bodyHeight: (state) => state.domTree[0].style.height,
      backgroundSize: (state) => state.domTree[0].style.backgroundSize,
    }),
    deviceWidthModel: {
      get() {
        return this.deviceWidth;
      },
      set(value) {
        this.set_DeviceWidth(value);
      },
    },
    deviceHeightModel: {
      get() {
        return this.deviceHeight;
      },
      set(value) {
        this.set_DeviceHeight(value);
      },
    },
    bodyWidthModel: {
      get() {
        return this.bodyWidth;
      },
      set(value) {
        this.set_BodyWidth(value);
      },
    },
    bodyHeightModel: {
      get() {
        return this.bodyHeight;
      },
      set(value) {
        this.set_BodyHeight(value);
      },
    },
  },
  methods: {
    ...mapMutations("fc", [
      "set_DeviceWidth",
      "set_DeviceHeight",
      "set_BodyWidth",
      "set_BodyHeight",
    ]),
  },
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
