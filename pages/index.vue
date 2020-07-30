<template>
  <div class="main-wrapper">
    <div class="container">
      <div class="main-title">
        <p>Stegホームページ制作見積もりシステム</p>
      </div>
      <div class="main-description">
        <p>Stegのホームページ制作見積もりシステムです。Stegに所属している学生エンジニアが制作を担当するため、他社に比べて制作費用を節約することができます。いただいたお仕事を、学生はポートフォリオや実績にすることができるため、お仕事をいただければとてもありがたいです。</p>
      </div>
      <div class="how-2-use">
        <p>使い方</p>
      </div>
      <nuxt-link to="/quote" class="quote-button">
        <button>見積もってみる！</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  display: grid;
  place-items: center;
}
.container {
  width: 90%;
  margin-top: 80px;
  display: grid;
  place-items: center;
}
.main-title p {
  font-weight: 700;
  font-size: 2rem;
}
.main-description {
  width: 60%;
  border: #707070 4px solid;
  margin-top: 50px;
  padding: 5vw;
}
.main-description p {
  font-size: 1.2rem;
}
.how-2-use {
  margin-top: 50px;
}
.how-2-use p {
  font-size: 1.5rem;
  font-weight: 700;
}
.quote-button {
  display: grid;
  place-items: center;
  width: 100%;
  margin-top: 100px;
}
button {
  width: 60%;
  height: 50px;
  background-color: #cccccc;
  filter: drop-shadow(4px 4px 6px #707070);
  position: relative;
}
button:active {
  filter: drop-shadow(0px 0px 0px);
  top: 3px;
}
</style>
