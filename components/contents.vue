<template>
  <div class="contents-wrapper" :class="{active:list.select}" @click="selectContents(list.id)">
    <div :class="{check:list.select}"></div>
    <div class="contents-icon">
      <img :src="list.img" alt />
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
  methods: {
    selectContents(id) {
      this.$store.commit("selectContents", id);
    },
  },
};
</script>
<style scoped>
.contents-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 3px solid #d1dbda;
  border-radius: 25px;
  filter: drop-shadow(0 3px 6px rgb(0 0 0 16));
  cursor: pointer;
  padding: 30px;
}

.active {
  border: 3px solid #20d8ba;
}
.check {
  width: 30px;
  height: 30px;
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: #20d8ba;
  background-image: url("../static/img/correct.svg");
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
  border-radius: 50%;
}
.contents-icon {
  width: 120px;
  height: 120px;
  background-color: #d3f2ed;
  border-radius: 50%;
  position: relative;
}
.contents-icon img {
  position: absolute;
  width: 55%;
  height: 55%;
  top: 22.5%;
  right: 22.5%;
}
</style>