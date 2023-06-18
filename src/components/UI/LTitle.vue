<!--
 * @Description: title component
 * @Autor: lf
 * @Date: 2023-06-07 23:10:58
 * @LastEditors: lf
 * @LastEditTime: 2023-06-17 16:00:03
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
      backgroundImage: 'url(' + activeComponent.backgroundImage + ')',
      backgroundSize:
        activeComponent.backgroundWidth +
        'px ' +
        activeComponent.backgroundHeight +
        'px',
    }"
  >
    <div
      :style="{
        color: activeComponent.color,
        fontSize: activeComponent.fontSize + 'px',
        lineHeight: activeComponent.lineHeight + 'px',
        fontWeight: activeComponent.fontWeight,
        textAlign: activeComponent.textAlign,
        paddingTop: activeComponent.innerPaddingTop + 'px',
        paddingRight: activeComponent.innerPaddingRight + 'px',
        paddingBottom: activeComponent.innerpaddingBottom + 'px',
        paddingLeft: activeComponent.innerpaddingLeft + 'px',
      }"
    >
      {{ activeComponent.innerText }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LTitle",
  props: ["index"],
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
};
</script>

<style>
</style>