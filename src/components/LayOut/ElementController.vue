<template>
  <div class="controller left">
    <el-collapse accordion v-model="activeName">
      <el-collapse-item :name="1">
        <template slot="title">
          <div class="create_button">
            <el-button
              @click="handleCreate"
              :icon="activeName == '1' ? '' : 'el-icon-plus'"
              >{{
                activeName == "1" ? "Close Collapse" : "New Module"
              }}</el-button
            >
          </div>
        </template>
        <el-radio-group v-model="selectedType">
          <el-radio-button type="primary" border plain label="title"
            >Title Component</el-radio-button
          >
          <el-radio-button type="primary" border plain label="content"
            >Content Component</el-radio-button
          >
          <el-radio-button type="primary" border plain label="video"
            >Video Component</el-radio-button
          >
        </el-radio-group>
        <div class="add_button">
          <el-divider></el-divider>
          <el-button
            icon="el-icon-circle-plus-outline"
            type="success"
            @click="handleAdd"
            >添加</el-button
          >
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="module-list">
      <draggable
        v-model="childrenNodes"
        group="module"
        handle=".handle"
        @update="handleUpdate"
      >
        <div
          v-for="(module, index) in childrenNodes"
          :key="module.key"
          @click="handleClick(module, index)"
        >
          <div class="module-handle handle">
            <el-card class="module-card" :data-index="index" shadow="always">
              <div
                class="card_inner"
                :class="{ highlight: index === activeIndex }"
              >
                {{ module.innerText }}
              </div>
              <div class="card_icons">
                <el-popover
                  popper-class="card_popover"
                  placement="right"
                  trigger="hover"
                  v-model="module.show"
                >
                  <div class="popover_view">
                    <div
                      class="icon_box"
                      v-if="
                        index + 1 < childrenNodes.length &&
                        childrenNodes.length > 1
                      "
                    >
                      <i
                        class="el-icon-sort-down"
                        @click="handleChangeOrder(module, index, 'down')"
                      ></i>
                    </div>
                    <div
                      class="icon_box"
                      v-if="index != 0 && childrenNodes.length > 1"
                    >
                      <i
                        class="el-icon-sort-up"
                        @click="handleChangeOrder(module, index, 'up')"
                      ></i>
                    </div>
                    <div class="icon_box">
                      <i
                        class="el-icon-copy-document"
                        @click="handleCopyNode(module)"
                      ></i>
                    </div>
                    <div class="icon_box">
                      <i
                        class="el-icon-delete"
                        @click="handleDeleteNode(module)"
                      ></i>
                    </div>
                  </div>
                  <div slot="reference" class="delete_node">
                    <i class="el-icon-edit"></i>
                  </div>
                </el-popover>
              </div>
            </el-card>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import { titleTemplate } from "@/templates/titleTemplate.js";
import { contentTemplate } from "@/templates/contentTemplate.js";
import { videoTemplate } from "@/templates/videoTemplate.js";
import VueDraggable from "vuedraggable";
import VueSortable from "vue-sortable";
import { mapMutations, mapState } from "vuex";
export default {
  name: "ElementController",
  components: {
    draggable: VueDraggable,
    "sortable-item": VueSortable.item,
    "sortable-list": VueSortable.list,
  },
  data() {
    return {
      activeName: "",
      selectedType: "title",
    };
  },
  computed: {
    ...mapState("fc", {
      activeIndex: (state) => state.activeIndex,
    }),
    childrenNodes: {
      get() {
        return this.$store.state.fc.domTree[0].childrenNodes;
      },
      set(newValue) {
        this.update_ChildrenNodes(newValue);
      },
    },
  },
  methods: {
    ...mapMutations("fc", [
      "set_AcitiveIndex",
      "push_ChildrenNodes",
      "update_ChildrenNodes",
      "splice_ChildrenNodes",
      "swap_ChildrenNodes",
    ]),
    /**
     * @description: open collapse
     * @return {*}
     * @author: lf
     */
    handleCreate() {
      this.isCollapse = true;
    },
    /**
     * @description: add module to childrenNodes & set active index in vuex
     * @return {*}
     * @author: lf
     */
    handleAdd() {
      const moduleMap = {
        title: titleTemplate,
        content: contentTemplate,
        video: videoTemplate,
      };
      const newAppendNode = {
        ...moduleMap[this.selectedType],
        key: this.selectedType + Date.now(),
      };
      this.push_ChildrenNodes(newAppendNode);
      this.set_AcitiveIndex(this.childrenNodes.length - 1);
    },
    /**
     * @description: delete selected module from childrenNodes and reset activeIndex
     * @param {*} module
     * @return {*}
     * @author: lf
     */
    handleDeleteNode(module) {
      const index = this.childrenNodes.findIndex(
        (item) => item.key === module.key
      );
      if (index !== -1) {
        this.set_AcitiveIndex(0);
        this.splice_ChildrenNodes(index);
      }
    },
    /**
     * @description: copy selected module & set new active index & push new module to childrenNodes
     * @param {*} module
     * @return {*}
     * @author: lf
     */
    handleCopyNode(module) {
      const newAppendNode = {
        ...module,
        key: module.nodeName + Date.now(),
        show: false,
      };
      this.push_ChildrenNodes(newAppendNode);
      this.set_AcitiveIndex(this.childrenNodes.length - 1);
    },
    /**
     * @description: we could know the target index and module by the type
     * @param {*} currentMoudle current module
     * @param {*} currentIndex current index
     * @param {*} type (up down)
     * @return {*}
     * @author: lf
     */
    handleChangeOrder(currentMoudle, currentIndex, type) {
      currentMoudle.show = false;
      const targetIndex =
        currentIndex + 1 === this.childrenNodes.length || type === "up"
          ? currentIndex - 1
          : currentIndex + 1;
      this.swap_ChildrenNodes({ targetIndex, currentIndex });
      this.set_AcitiveIndex(targetIndex);
    },
    /**
     * @description: callback function to the draggable
     * @param {*} event
     * @return {*}
     * @author: lf
     */
    handleUpdate(event) {
      const { newDraggableIndex } = event;
      this.set_AcitiveIndex(newDraggableIndex);
    },
    /**
     * @description: highlight selected module
     * @param {*} module
     * @param {*} index
     * @return {*}
     * @author: lf
     */
    handleClick(module, index) {
      this.set_AcitiveIndex(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.highlight {
  color: #409eff !important;
}
.module-card {
  margin-bottom: 10px;
  .card_inner {
    cursor: move;
    width: 70%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 超出部分隐藏 */
    text-overflow: ellipsis; /* 超出部分使用省略号 */
  }
  .card_icons {
    width: 30%;
    display: flex;
    justify-content: flex-end;
  }
  .delete_node {
    margin-left: 10px;
  }
}
</style>