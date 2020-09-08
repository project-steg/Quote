<template>
  <div class="main-visual">
    <div class="main-visual-background">
      <div class="main-visual-l">
        <div class="main-visual-label-wrapper">
          <div class="main-visual-label-url">
            <p>team-steg.com</p>
          </div>
          <div class="main-visual-label-l"></div>
          <div class="main-visual-label-r"></div>
        </div>
      </div>
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
  height: 800px;
  display: flex;
}
.main-visual-l {
  width: 18%;
  height: 100%;
  background-color: #ffffff;
}
.main-visual-r {
  width: 82%;
  height: 100%;
  background-color: #20d8ba;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.steg-logo {
  width: 60%;
  margin-right: 15px;
}
.steg-logo img {
  width: 100%;
}
.main-visual-label-wrapper {
  width: 90vw;
  max-width: 700px;
  height: 300px;
  background-color: #ffffff;
  position: absolute;
  top: 250px;
  display: flex;
  align-items: center;
}
.main-visual-label-url {
  width: 10%;
  height: 300px;
  display: grid;
  place-items: center;
}
.main-visual-label-url p {
  height: 300px;
  letter-spacing: 9px;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin: 0;
}
.main-visual-label-l {
  width: 10%;
  height: 100%;
  background-color: #20d8ba;
}
.main-visual-label-r {
  width: 80%;
  height: 100%;
}
</style>