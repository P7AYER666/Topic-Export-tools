<template>
  <div
    :style="{
      width: titleWidth + 'px',
      height: titleHeight + 'px',
      backgroundImage: url(titleBackGroundImage),
      backGroundSize: titleBackGroundSize,
      ...titleContainerCustomerStyle,
    }"
  >
    <div
      :style="{
        color: titleColor,
        fontWeight: fontWeight,
        fontSize: fontSize,
        ...titleTextCustomerStyle,
      }"
    >
      {{ textContent }}
    </div>
  </div>
</template>

<script>
export default {
  name: "LTitle",
  props: {
    // 标题容器宽度
    titleWidth: {
      type: String,
    },
    // 标题容器高度
    titleHeight: {
      type: String,
    },
    // 标题容器 背景图片
    titleBackGroundImage: {
      type: String,
    },
    titleBackGroundSize: {
      type: String,
      default: "100% 100%",
    },
    // 文本区内容
    textContent: {
      type: String,
      default: "标题",
    },
    // 文本区行高
    lineHeight: {
      type: String,
      default: "100%",
    },
    // 文本区离左边的距离
    textPaddingLeft: {
      type: Number,
      default: 16,
    },
    // 文本区域位置 left：左  center：中
    textAlign: {
      type: String,
      default: "center",
    },
    // 文本区字体粗细
    fontWeight: {
      type: Number,
      default: 400,
    },
    // 字体大小
    fontSize: {
      type: String,
      required: true,
      default: "16px",
    },
    // 字体颜色
    titleColor: {
      type: String,
      required: true,
      default: "#333",
    },
    // 文本区自定义样式
    titleContainerCustomerStyle: {
      type: Object,
    },
    // 文本内容自定义样式
    titleTextCustomerStyle: {
      type: Object,
    },
  },
};
</script>

<style>
</style>