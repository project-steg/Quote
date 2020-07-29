<template>
  <div>
    <div class="contents-wrapper">
      <div class="contents-checkbox">
        <input type="checkbox" id="vision" value="3000円" v-model="checkedName" />
        <label for="vision"></label>
        <div>{{checkedName}}</div>
      </div>
      <div class="contents-details">
        <p>{{list.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {
      checkedName: "",
    };
  },
  methods: {
    checkedData() {
      this.$emit("vision", this.checkedName);
    },
  },
};
</script>
<style scoped>
.contents-wrapper {
  width: 100%;
  height: 75px;
  background-color: #eeeeee;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
}
.contents-checkbox {
  width: 100px;
  height: 75px;
  border-right: #cccccc 1px solid;
  display: grid;
  place-items: center;
}
.contents-details {
  width: 100%;
  display: grid;
  place-items: center;
}
</style>