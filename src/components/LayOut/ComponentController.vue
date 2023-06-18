<template>
  <div class="controller right">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="Background Image" name="1">
        <!-- upload -->
        <el-form :inline="true" class="form-style">
          <upload-resource type="backgroundImage"></upload-resource>
        </el-form>
      </el-collapse-item>
      <el-collapse-item title="LayOut" name="2">
        <!-- lay out -->
        <lay-out></lay-out>
      </el-collapse-item>
      <el-collapse-item
        title="Selected Object"
        name="3"
        :disabled="childrenNodes.length === 0"
      >
        <el-form :inline="true" class="form-style" v-if="activeComponent">
          <el-form-item label="Name:">
            <span style="color: #409eff">
              {{ activeComponent.componentType }}</span
            >
          </el-form-item>
          <!-- width & height -->
          <content-size></content-size>
          <el-divider class="form-item_divider"></el-divider>
          <!-- outer padding  -->
          <outer-padding
            v-if="activeComponent.componentType !== 'LVideo'"
          ></outer-padding>
          <!-- inner padding -->
          <inner-padding
            v-if="activeComponent.componentType !== 'LVideo'"
          ></inner-padding>
          <!-- outer margin -->
          <outer-margin></outer-margin>
          <!-- about text style -->
          <inner-text
            v-if="activeComponent.componentType !== 'LVideo'"
          ></inner-text>
          <!-- upload source(background image / video / cover) -->
          <upload-resource
            v-if="activeComponent.componentType !== 'LVideo'"
            type="component"
          ></upload-resource>
          <upload-resource
            v-if="activeComponent.componentType === 'LVideo'"
            type="cover"
          ></upload-resource>
          <upload-resource
            v-if="activeComponent.componentType === 'LVideo'"
            type="video"
          ></upload-resource>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import LayOut from "@/components/Configuration/LayOut.vue";
import ContentSize from "@/components/Configuration/ContentSize.vue";
import OuterPadding from "@/components/Configuration/OuterPadding.vue";
import InnerPadding from "@/components/Configuration/InnerPadding.vue";
import OuterMargin from "@/components/Configuration/OuterMargin.vue";
import InnerText from "@/components/Configuration/InnerText.vue";
import UploadResource from "@/components/Configuration/UploadResource.vue";
export default {
  name: "ComponentController",
  components: {
    LayOut,
    ContentSize,
    OuterPadding,
    InnerPadding,
    OuterMargin,
    InnerText,
    UploadResource,
  },
  data() {
    return {
      activeNames: "1",
      disabled: false,
    };
  },
  computed: {
    ...mapState("fc", {
      bodyWidth: (state) => state.domTree[0].style.width,
      bodyHeight: (state) => state.domTree[0].style.height,
      activeIndex: (state) => state.activeIndex,
      childrenNodes: (state) => state.domTree[0].childrenNodes,
    }),
    ...mapGetters("fc", ["activeComponent"]),
  },

  watch: {
    activeIndex: {
      handler(newActiveIndex) {
        this.activeNames = "3";
      },
    },
  },
  methods: {
    ...mapMutations("fc", ["set_BackgroundImage"]),
    /**
     * @description: delete (Abandoned)
     * @return {*}
     * @author: lf
     */
    handleRemove(file) {
      this.$refs.upload.uploadFiles.shift();
      this.set_BackgroundImage(null);
    },
    /**
     * @description: delete (Abandoned)
     * @return {*}
     * @author: lf
     */
    handleComponentRemove(file) {
      this.$refs.uploadComponent.uploadFiles.shift();
      this.$set(this.activeComponent, "backgroundImage", "");
    },
    /**
     * @description: delete (Abandoned)
     * @return {*}
     * @author: lf
     */
    handleChange(file) {
      this.set_BackgroundImage(file.url);
    },
    /**
     * @description: delete (Abandoned)
     * @return {*}
     * @author: lf
     */
    handleComponentChange(file) {
      this.$set(this.activeComponent, "backgroundImage", file.url);
    },
    /**
     * @description: delete (Abandoned)
     * @return {*}
     * @author: lf
     */
    handleUpload(file) {
      console.log(file);
    },
    /**
     * @description: delete (Abandoned)
     * @return {*}
     * @author: lf
     */
    handleComponentUpload(file) {
      console.log(file);
    },
  },
};
</script>

<style lang="scss">
@import "./controllerStyle.scss";
</style>