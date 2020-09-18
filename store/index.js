export const state = () => ({
  list: [
    {
      id: 0,
      name: "メインビジュアル",
      value: 10000,
      select: false,
      img: "img/home-page.svg"
    },
    {
      id: 1,
      name: "会社概要",
      value: 10000,
      select: false,
      img: "img/company.svg"
    },
    {
      id: 2,
      name: "提携企業",
      value: 10000,
      select: false,
      img: "img/partners.svg"
    },
    {
      id: 3,
      name: "メンバー一覧",
      value: 10000,
      select: false,
      img: "img/members.svg"
    }
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
