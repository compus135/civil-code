Page({
  data: {
    civil: [
      {
        title: "第一千二百五十九条",
        content:
          "民法所称的“以上”、“以下”、“以内”、“届满”，包括本数；所称的“不满”、“超过”、“以外”，不包括本数。",
      },
      {
        title: "第一千二百六十条",
        content:
          "本法自2021年1月1日起施行。《中华人民共和国婚姻法》、《中华人民共和国继承法》、《中华人民共和国民法通则》、《中华人民共和国收养法》、《中华人民共和国担保法》、《中华人民共和国合同法》、《中华人民共和国物权法》、《中华人民共和国侵权责任法》、《中华人民共和国民法总则》同时废止。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
