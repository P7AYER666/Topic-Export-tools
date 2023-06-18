<!--
 * @Description: video component
 * @Autor: lf
 * @Date: 2023-06-14 15:22:48
 * @LastEditors: lf
 * @LastEditTime: 2023-06-17 23:35:10
-->
<template>
  <div
    :style="{
      width: activeComponent.width + 'px',
      height: activeComponent.height + 'px',
      paddingTop: activeComponent.paddingTop + 'px',
      paddingRight: activeComponent.paddingRight + 'px',
      paddingBottom: activeComponent.paddingBottom + 'px',
      paddingLeft: activeComponent.paddingLeft + 'px',
      marginTop: activeComponent.marginTop + 'px',
      marginRight: activeComponent.marginRight + 'px',
      marginBottom: activeComponent.marginBottom + 'px',
      marginLeft: activeComponent.marginLeft + 'px',
      position: 'relative',
    }"
  >
    <img
      :src="activeComponent.coverSrc"
      alt=""
      v-show="showCoverAndBtn"
      :style="{
        width: activeComponent.width + 'px',
        height: activeComponent.height + 'px',
        borderRadius: '15px',
        position: 'absolute',
        zIndex: '1',
      }"
    />
    <img
      @click="handleClickVideo"
      v-show="showCoverAndBtn"
      :style="{
        width: 40 + 'px',
        height: 40 + 'px',
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        margin: 'auto',
        zIndex: '2',
      }"
      :src="require('@/assets/play.png')"
      alt=""
    />
    <video
      :style="{
        width: activeComponent.width + 'px',
        height: activeComponent.height + 'px',
        borderRadius: '15px',
        position: 'absolute',
        zIndex: '0',
      }"
      :src="activeComponent.videoSrc"
      webkit-playsinline="true"
      playsinline="true"
      preload="auto"
      controls
      ref="video"
    ></video>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LVideo",
  props: ["item", "index"],
  computed: {
    ...mapState("fc", {
      activeIndex: (state) => state.activeIndex,
      childrenNodes: (state) => state.domTree[0].childrenNodes,
    }),
    activeComponent() {
      if (this.activeIndex === this.index) {
        return this.childrenNodes[this.activeIndex];
      } else {
        return this.childrenNodes[this.index];
      }
    },
  },
  data() {
    return {
      showCoverAndBtn: true,
    };
  },
  methods: {
    handleClickVideo() {
      this.showCoverAndBtn = false;
      this.$refs.video.play();
    },
  },
};
</script>

<style>
</style>