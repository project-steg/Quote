<template>
  <div class="contents-wrapper active">
    <div class="check"></div>
    <div class="contents-icon">
      <img :src="list.img" alt />
    </div>
    <div class="contents-name">
      <p>{{list.name}}</p>
    </div>
    <div class="contents-descript">
      <p>{{list.descript}}</p>
    </div>
    <div class="cursor">
      <img src="img/cursor.svg" alt="cursor-icon" />
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
  width: 200px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 2px solid #d1dbda;
  border-radius: 25px;
  box-shadow: 0 2px 3px 1px rgb(20, 20, 20, 0.2);
  padding: 20px;
}

.active {
  border: 2px solid #20d8ba;
}
.check {
  width: 25px;
  height: 25px;
  position: absolute;
  top: -11px;
  right: -11px;
  background-color: #20d8ba;
  background-image: url("../static/img/correct.svg");
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
  border-radius: 50%;
}
.contents-icon {
  width: 70px;
  height: 70px;
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
  font-size: 0.7rem;
  font-weight: 700;
  color: #17171b;
}
.contents-descript {
  margin: auto;
  text-align: center;
}
.contents-descript p {
  font-size: 10px;
  font-weight: 700;
  color: #777777;
}

.cursor img {
  width: 50px;
  position: absolute;
  right: -30px;
  bottom: 6px;
}
</style>