<template>
  <div class="main-visual">
    <div class="main-visual-background">
      <div class="main-visual-l"></div>
      <div class="main-visual-r">
        <div class="steg-logo">
          <img src="img/steg-logo-light.png" alt="circle-logo" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-visual {
  width: 100%;
  height: 100%;
}
.main-visual-background {
  width: 100%;
  height: 100vh;
  display: flex;
}
.main-visual-l {
  width: 18%;
  height: 100vh;
  background-color: #ffffff;
}
.main-visual-r {
  width: 82%;
  height: 100vh;
  background-color: #20d8ba;
}
.steg-logo {
  width: 60%;
}
.steg-logo img {
  width: 100%;
}
</style>