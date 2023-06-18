<template>
  <div>
    <Upload-body-background
      v-if="type === 'backgroundImage'"
    ></Upload-body-background>
    <Upload-component-background
      v-if="type === 'component'"
    ></Upload-component-background>
    <Upload-cover-image v-if="type === 'cover'"></Upload-cover-image>
    <Upload-video-src v-if="type === 'video'"></Upload-video-src>
  </div>
</template>
      
<script>
import UploadBodyBackground from "@/components/Configuration/uploadType/UploadBodyBackground.vue";
import UploadComponentBackground from "@/components/Configuration/uploadType/UploadComponentBackground.vue";
import UploadCoverImage from "@/components/Configuration/uploadType/UploadCoverImage.vue";
import UploadVideoSrc from "@/components/Configuration/uploadType/UploadVideoSrc.vue";
export default {
  name: "UploadResource",
  props: ["type"],
  components: {
    UploadBodyBackground,
    UploadComponentBackground,
    UploadCoverImage,
    UploadVideoSrc,
  },
};
</script>
      
      <style>
</style>