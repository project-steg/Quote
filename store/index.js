export const state = () => ({
  list: [
    {
      id: 0,
      name: "メインビジュアル",
      value: 10000,
      select: false,
      img: "img/home-page.svg",
      descript:
        "トップページの一番目立つところに画像やロゴ、タグラインなどを載せます。"
    },
    {
      id: 1,
      name: "会社概要",
      value: 10000,
      select: false,
      img: "img/company.svg",
      descript:
        "自分たちの会社や団体の紹介文をイメージ画像などとともに載せます。"
    },
    {
      id: 2,
      name: "提携企業",
      value: 10000,
      select: false,
      img: "img/partners.svg",
      descript: "協賛や提携などをしている企業や団体の一覧を載せます。"
    },
    {
      id: 3,
      name: "メンバー一覧",
      value: 10000,
      select: false,
      img: "img/members.svg",
      descript: "社員やメンバーを一覧表示で載せます。"
    }
  ],
  sumValue: 0
});

export const mutations = {
  selectContents(state, id) {
    state.list[id].select = !state.list[id].select;
    if (state.list[id].select) {
      state.sumValue += state.list[id].value;
    } else {
      state.sumValue -= state.list[id].value;
    }
  }
};
