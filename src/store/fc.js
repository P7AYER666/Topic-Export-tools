import Vue from "vue";
export default {
  namespaced: true,
  state: {
    deviceWidth: "375",
    deviceHeight: "667",
    activeIndex: 0,
    domTree: [
      {
        nodeType: "element",
        nodeName: "body",
        style: {
          width: "375",
          height: "667",
          backgroundImage: "",
          paddingTop: "0",
          paddingRight: "0",
          paddingBottom: "0",
          paddingLeft: "0",
          marginTop: "0",
          marginRight: "0",
          marginBottom: "0",
          marginBottom: "0",
          marginLeft: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "#333",
          fontSize: "16",
          lineHeight: "20",
          fontWeight: "400",
          textAlign: "center",
          paddingTop: "0",
          paddingRight: "0",
          paddingBottom: "0",
          paddingLeft: "0",
        },
        childrenNodes: [],
      },
    ],
  },
  getters: {
    backgroundSize(state) {
      return (
        state.domTree[0].style.width +
        "px " +
        state.domTree[0].style.height +
        "px "
      );
    },
    activeComponent(state) {
      return state.domTree[0].childrenNodes[state.activeIndex];
    },
  },
  mutations: {
    set_DeviceWidth(state, data) {
      state.deviceWidth = data;
    },
    set_DeviceHeight(state, data) {
      state.deviceHeight = data;
    },
    set_BodyWidth(state, data) {
      state.domTree[0].style.width = data;
    },
    set_BodyHeight(state, data) {
      state.domTree[0].style.height = data;
    },
    set_BackgroundImage(state, data) {
      state.domTree[0].style.backgroundImage = data;
    },
    set_AcitiveIndex(state, data) {
      state.activeIndex = data;
    },
    swap_ChildrenNodes(state, { targetIndex, currentIndex }) {
      const temp = state.domTree[0].childrenNodes[targetIndex];
      Vue.set(
        state.domTree[0].childrenNodes,
        targetIndex,
        state.domTree[0].childrenNodes[currentIndex]
      );
      Vue.set(state.domTree[0].childrenNodes, currentIndex, temp);
    },
    push_ChildrenNodes(state, data) {
      state.domTree[0].childrenNodes.push(data);
    },
    update_ChildrenNodes(state, data) {
      state.domTree[0].childrenNodes = data;  
    },
    splice_ChildrenNodes(state, data) {
      state.domTree[0].childrenNodes.splice(data, 1);
    },
  },
  actions: {},
};
