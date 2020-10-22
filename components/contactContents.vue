<template>
  <div class="result-contact-wrapper">
    <form
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfekmFwZc4Lr3STHXnoHMkbgsxeyiGvUxABxhXf28Sx795gcg/formResponse"
    >
      <div class="form-contents">
        <p>氏名(必須)</p>
        <input
          type="text"
          placeholder="氏名"
          name="entry.1220325291"
          required
        />
      </div>
      <div class="form-contents">
        <p>メールアドレス(必須)</p>
        <input
          type="email"
          placeholder="example@mail.com"
          name="entry.222640255"
          required
        />
      </div>
      <div class="form-contents">
        <p>お問い合わせ内容(必須)</p>
        <textarea
          placeholder="お問い合わせ内容"
          name="entry.264940659"
          :value="contactText"
          required
        ></textarea>
      </div>
      <div class="contact-btn">
        <button type="submit" class="form-button">
          <p>送信</p>
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      contactText: (state) => state.contactText,
    }),
  },
};
</script>
<style scoped>
.result-contact-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.form-contents {
  display: flex;
  padding: 15px 0;
}

.form-contents p {
  width: 35%;
  font-size: 1rem;
  color: #17171b;
  line-height: 3rem;
}
input {
  width: 65%;
  height: 3rem;
  font-family: "Noto Sans JP";
  font-size: 1rem;
  color: #17171b;
  border: solid 1px #9696aa;
  border-radius: 5px;
  padding: 0 0.5rem;
}
.form-contents input::placeholder {
  color: #9696aa;
}
.form-contents input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #20d8ba;
}

textarea {
  width: 65%;
  height: 20rem;
  font-family: "Noto Sans JP";
  font-size: 1rem;
  color: #17171b;
  border: solid 1px #9696aa;
  border-radius: 5px;
  resize: none;
  padding: 0.25rem 0.5rem 0;
}
textarea::placeholder {
  color: #9696aa;
}
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px #20d8ba;
}
@media screen and (max-width: 896px) {
  .form-contents {
    flex-direction: column;
    padding: 5px 0;
  }
  .form-contents p {
    width: 100%;
  }
  .form-contents textarea {
    width: 100%;
  }
  .form-contents input {
    width: 100%;
  }
}
.contact-btn button {
  width: 500px;
  height: 75px;
  margin: 50px auto 0;
  background-color: #20d8ba;
  display: grid;
  place-items: center;
}
.contact-btn button:hover {
  width: 500px;
  height: 75px;
  margin-top: 50px;
  background-color: #ffffff;
  border: 4px solid #20d8ba;
  display: grid;
  place-items: center;
}
.contact-btn p {
  color: #ffffff;
  font-weight: 700;
}
.contact-btn button:hover p {
  color: #20d8ba;
  font-weight: 700;
}
p {
  margin: 0;
}
</style>