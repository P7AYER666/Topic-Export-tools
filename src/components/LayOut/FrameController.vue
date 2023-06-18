<template>
  <div
    class="frame"
    :style="{ width: deviceWidth + 'px', height: deviceHeight + 'px' }"
  >
    <div
      class="main"
      :style="{
        width: bodyWidth + 'px',
        height: bodyHeight + 'px',
        backgroundImage: 'url(' + backgroundImage + ')',
        backgroundSize: backgroundSize,
        display: display,
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
      }"
    >
      <component
        v-for="(item, index) in childrenNodes"
        :key="item.key"
        :is="renderChildrenNodes(item.componentType)"
        :index="index"
      ></component>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import LTitle from "@/components/UI/LTitle.vue";
import LContent from "@/components/UI/LContent.vue";
import LVideo from "@/components/UI/LVideo.vue";
export default {
  name: "FrameController",
  components: {
    LTitle,
    LContent,
    LVideo,
  },
  computed: {
    ...mapState("fc", {
      deviceWidth: (state) => state.deviceWidth,
      deviceHeight: (state) => state.deviceHeight,
      bodyWidth: (state) => state.domTree[0].style.width,
      bodyHeight: (state) => state.domTree[0].style.height,
      display: (state) => state.domTree[0].style.display,
      flexDirection: (state) => state.domTree[0].style.flexDirection,
      justifyContent: (state) => state.domTree[0].style.justifyContent,
      alignItems: (state) => state.domTree[0].style.alignItems,
      backgroundImage: (state) => state.domTree[0].style.backgroundImage,
      childrenNodes: (state) => state.domTree[0].childrenNodes,
    }),
    ...mapGetters("fc", ["backgroundSize"]),
  },
  methods: {
    /**
     * @description: according to the componentType render component
     * @param {*} componentType
     * @return {*}
     * @author: lf
     */
    renderChildrenNodes(componentType) {
      switch (componentType) {
        case "LTitle":
          return "LTitle";
        case "LContent":
          return "LContent";
        case "LVideo":
          return "LVideo";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./frameStyle.scss";
</style>