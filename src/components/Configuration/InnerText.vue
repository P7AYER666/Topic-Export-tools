<template>
  <div>
    <el-form-item
      :label="activeComponent.componentType + ' Text Style'"
    ></el-form-item>
    <el-form-item label="font color:">
      <el-color-picker
        size="small"
        v-model="activeComponent.color"
      ></el-color-picker>
    </el-form-item>

    <el-form-item label="font size:">
      <el-input size="small" v-model="activeComponent.fontSize"
        ><template slot="append">px</template></el-input
      >
    </el-form-item>

    <el-form-item label="line height:">
      <el-input size="small" v-model="activeComponent.lineHeight"
        ><template slot="append">px</template></el-input
      >
    </el-form-item>

    <el-form-item label="font weight:">
      <el-select
        size="small"
        v-model="activeComponent.fontWeight"
        placeholder=""
      >
        <el-option :key="400" :label="400" :value="400"> </el-option>
        <el-option :key="500" :label="500" :value="500"> </el-option>
        <el-option :key="600" :label="600" :value="600"> </el-option>
        <el-option :key="700" :label="700" :value="700"> </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="font align:">
      <el-select
        size="small"
        v-model="activeComponent.textAlign"
        placeholder=""
      >
        <el-option key="left" label="left" value="left"> </el-option>
        <el-option key="center" label="center" value="center"> </el-option>
        <el-option key="right" label="right" value="right"> </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="inner text:"></el-form-item>
    <el-form-item class="inner_text_item">
      <el-input
        size="small"
        autosize
        type="textarea"
        v-model="activeComponent.innerText"
      ></el-input>
    </el-form-item>
    <el-divider class="form-item_divider"></el-divider>
  </div>
</template>
    
    <script>
import { mapGetters } from "vuex";
export default {
  name: "InnerText",
  computed: {
    ...mapGetters("fc", ["activeComponent"]),
  },
};
</script>
    
    <style>
</style>