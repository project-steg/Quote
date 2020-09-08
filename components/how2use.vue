<template>
  <div class="how2use-wrapper">
    <div class="how2use-label">
      <p>使い方</p>
    </div>
    <div class="how2use-contents">
      <div class="how2use-contents-l"></div>
      <div class="how2use-contents-c"></div>
      <div class="how2use-contents-r"></div>
    </div>
  </div>
</template>
<style scoped>
.how2use-wrapper {
  width: 100%;
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.how2use-label {
  width: 60%;
  height: 80px;
  background: #20d8ba;
  padding: 0.4em 0.8em 0.3em;
  margin: 0 0 1em;
  text-align: left;
  color: #000;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.how2use-label::after {
  position: absolute;
  content: "";
  top: 100%;
  left: 30px;
  border: 15px solid transparent;
  border-top: 15px solid #20d8ba;
  width: 0;
  height: 0;
}
.how2use-label p {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 5px;
}
.how2use-contents {
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.how2use-contents-l {
  width: 20%;
  height: 300px;
  background-color: aqua;
}
.how2use-contents-c {
  width: 20%;
  background-color: #20d8ba;
  height: 300px;
}
.how2use-contents-r {
  width: 60%;
  background-color: red;
  height: 300px;
}
</style>
