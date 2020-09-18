export const state = () => ({
  list: [
    {
      id: 0,
      name: "企業理念ページ",
      value: 10000,
      select: false,
      img: "../static/img/home-page.svg"
    },
    { id: 1, name: "お問い合わせ", value: 10000, select: false },
    { id: 2, name: "企業紹介", value: 10000, select: false },
    { id: 3, name: "オフィス地図", value: 10000, select: false }
  ],
  sumValue: 0
});

export const mutations = {
  selectContents(state, id) {
    state.list[id].select = !state.list[id].select;
    console.log(state.list[id].select);
    if (state.list[id].select) {
      state.sumValue += state.list[id].value;
    } else {
      state.sumValue -= state.list[id].value;
    }
    console.log(state.sumValue);
  }
};
