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
          required
        ></textarea>
      </div>
      <button type="submit" class="form-button">送信</button>
    </form>
  </div>
</template>
<style scoped>
.result-contact-wrapper {
  width: 100%;
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
.form-contents::placeholder {
  color: #9696aa;
}
.form-contents:focus {
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
</style>