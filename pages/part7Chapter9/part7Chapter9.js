Page({
  data: {
    civil: [
      {
        title: "第一千二百四十五条",
        content:
          "饲养的动物造成他人损害的，动物饲养人或者管理人应当承担侵权责任；但是，能够证明损害是因被侵权人故意或者重大过失造成的，可以不承担或者减轻责任。",
      },
      {
        title: "第一千二百四十六条",
        content:
          "违反管理规定，未对动物采取安全措施造成他人损害的，动物饲养人或者管理人应当承担侵权责任；但是，能够证明损害是因被侵权人故意造成的，可以减轻责任。",
      },
      {
        title: "第一千二百四十七条",
        content:
          "禁止饲养的烈性犬等危险动物造成他人损害的，动物饲养人或者管理人应当承担侵权责任。",
      },
      {
        title: "第一千二百四十八条",
        content:
          "动物园的动物造成他人损害的，动物园应当承担侵权责任；但是，能够证明尽到管理职责的，不承担侵权责任。",
      },
      {
        title: "第一千二百四十九条",
        content:
          "遗弃、逃逸的动物在遗弃、逃逸期间造成他人损害的，由动物原饲养人或者管理人承担侵权责任。",
      },
      {
        title: "第一千二百五十条",
        content:
          "因第三人的过错致使动物造成他人损害的，被侵权人可以向动物饲养人或者管理人请求赔偿，也可以向第三人请求赔偿。动物饲养人或者管理人赔偿后，有权向第三人追偿。",
      },
      {
        title: "第一千二百五十一条",
        content: "饲养动物应当遵守法律法规，尊重社会公德，不得妨碍他人生活。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
