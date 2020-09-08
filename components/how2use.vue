<template>
  <div class="how2use-wrapper">
    <div class="how2use-label">
      <p>使い方</p>
    </div>
    <div class="how2use-contents">
      <div class="how2use-contents-l">
        <div class="empty-stick"></div>
        <div class="circle">
          <v-icon m-large dark>mdi-align-horizontal-left</v-icon>
        </div>
        <div class="stick"></div>
      </div>
      <div class="how2use-contents-c">
        <div class="how2use-step">Step1</div>
        <div class="how2use-title">見積もり</div>
        <div class="how2use-subtitle">Quote</div>
      </div>
      <div class="how2use-contents-r">
        <div class="how2use-details-wrapper">
          <div class="how2use-details-l">
            <div class="empty-stick-min"></div>
            <div class="circle-min">1</div>
            <div class="stick-min"></div>
          </div>
          <div class="how2use-details-r">制作するWebサイトに載せたいコンテンツを選択する</div>
        </div>
        <div class="how2use-details-wrapper">
          <div class="how2use-details-l">
            <div class="stick-min"></div>
            <div class="circle-min">2</div>
            <div class="stick-min"></div>
          </div>
          <div class="how2use-details-r">見積もりボタンを押して、見積もり金額を確認する</div>
        </div>
        <div class="how2use-details-wrapper">
          <div class="how2use-details-l">
            <div class="stick-min"></div>
            <div class="circle-min">3</div>
            <div class="empty-stick-min"></div>
          </div>
          <div class="how2use-details-r">「この内容でお問い合わせる」ボタンを押してお問い合わせを送る</div>
        </div>
      </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.how2use-contents-c {
  width: 20%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 25px;
}
.how2use-contents-r {
  width: 60%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media screen and (max-width: 480px) {
  .how2use-contents-l {
    display: none;
  }
  .how2use-contents-c {
    width: 40%;
  }
}
.empty-stick {
  width: 0;
  height: 100px;
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #20d8ba;
  display: grid;
  place-items: center;
}
.stick {
  width: 7px;
  height: 100px;
  background-color: #20d8ba;
}
.how2use-step {
  color: #4cdfc7;
  font-size: 1rem;
  font-weight: 700;
}
.how2use-title {
  color: #17171b;
  font-size: 1.2rem;
}
.how2use-subtitle {
  color: #909090;
}
.how2use-details-wrapper {
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
}
.empty-stick-min {
  width: 0;
  height: 25px;
}
.circle-min {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #20d8ba;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 0.9rem;
  padding-bottom: 2px;
  color: #ffffff;
}
.stick-min {
  width: 3px;
  height: 25px;
  background-color: #20d8ba;
}
.how2use-details-l {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.how2use-details-r {
  width: 80%;
  font-weight: 700;
  color: #17171b;
}
@media screen and (max-width: 480px) {
  .how2use-details-r {
    padding-left: 15px;
    font-size: 0.8rem;
  }
}
</style>
