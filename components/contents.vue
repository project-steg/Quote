<template>
  <div class="contents-wrapper"></div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {
      checkedName: "",
    };
  },
};
</script>
<style scoped>
.contents-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 3px solid #d1dbda;
  filter: drop-shadow(0 3px 6px rgb(0 0 0 16));
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