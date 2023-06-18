<template>
  <div>
    <el-form :inline="true" class="form-style">
      <el-form-item label="display:">
        <el-select size="small" v-model="bodyStyle.display" placeholder="">
          <el-option key="flex" label="flex" value="flex"> </el-option>
          <el-option key="block" label="block" value="block"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="flex direction:" v-if="bodyStyle.display === 'flex'">
        <el-select
          size="small"
          v-model="bodyStyle.flexDirection"
          placeholder=""
        >
          <el-option key="row" label="row" value="row"> </el-option>
          <el-option key="Column" label="Column" value="Column"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="justify content:" v-if="bodyStyle.display === 'flex'">
        <el-select
          size="small"
          v-model="bodyStyle.justifyContent"
          placeholder=""
        >
          <el-option key="flex-start" label="flex-start" value="flex-start">
          </el-option>
          <el-option key="center" label="center" value="center"> </el-option>
          <el-option key="flex-end" label="flex-end" value="flex-end">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="align items:" v-if="bodyStyle.display === 'flex'">
        <el-select size="small" v-model="bodyStyle.alignItems" placeholder="">
          <el-option key="flex-start" label="flex-start" value="flex-start">
          </el-option>
          <el-option key="center" label="center" value="center"> </el-option>
          <el-option key="flex-end" label="flex-end" value="flex-end">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LayOut",
  computed: {
    ...mapState("fc", {
      bodyStyle: (state) => state.domTree[0].style,
    }),
  },
};
</script>

<style>
</style>