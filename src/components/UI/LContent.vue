<!--
 * @Description: content component
 * @Autor: lf
 * @Date: 2023-06-14 15:22:48
 * @LastEditors: lf
 * @LastEditTime: 2023-06-17 23:38:12
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
        backgroundImage: 'url(' + activeComponent.backgroundImage + ')',
        backgroundSize:
          activeComponent.backgroundWidth +
          'px ' +
          activeComponent.backgroundHeight +
          'px',
      }"
    >
      {{ activeComponent.innerText }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LContent",
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
};
</script>

<style>
</style>