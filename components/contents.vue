<template>
  <div
    class="contents-wrapper"
    :class="{ active: list.select }"
    @click="selectContents(list.index)"
  >
    <div :class="{ check: list.select }"></div>
    <div class="contents-icon">
      <img :src="list.img.url" />
    </div>
    <div class="contents-name">
      <p>{{ list.name }}</p>
    </div>
    <div class="contents-descript">
      <p>{{ list.descript }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
  methods: {
    selectContents(index) {
      this.$store.commit("selectContents", index);
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
  box-shadow: 0 2px 3px 1px rgb(20, 20, 20, 0.2);
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
.contents-name {
  margin-top: 15px;
}
.contents-name p {
  font-weight: 700;
  color: #17171b;
}
.contents-descript {
  margin: auto;
  text-align: center;
}
.contents-descript p {
  font-size: 0.9rem;
  font-weight: 700;
  color: #777777;
}
</style>