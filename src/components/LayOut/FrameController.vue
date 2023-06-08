<template>
  <div
    class="frame"
    :style="{ width: deviceWidth + 'px', height: deviceHeight + 'px' }"
  >
    <div
      class="main"
      :style="{ width: designWidth + 'px', height: designHeight + 'px' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FrameController",
  props: {
    designWidth: {
      type: String,
      default: '375',
    },
    designHeight: {
      type: String,
      default: '1000',
    },
    deviceWidth: {
      type: String,
      default: '375',
    },
    deviceHeight: {
      type: String,
      default: '667',
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./frameStyle.scss";
</style>