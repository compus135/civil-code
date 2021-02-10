Page({
  data: {
    civil: [
      {
        title: "第一千二百三十六条",
        content: "从事高度危险作业造成他人损害的，应当承担侵权责任。",
      },
      {
        title: "第一千二百三十七条",
        content:
          "民用核设施或者运入运出核设施的核材料发生核事故造成他人损害的，民用核设施的营运单位应当承担侵权责任；但是，能够证明损害是因战争、武装冲突、暴乱等情形或者受害人故意造成的，不承担责任。",
      },
      {
        title: "第一千二百三十八条",
        content:
          "民用航空器造成他人损害的，民用航空器的经营者应当承担侵权责任；但是，能够证明损害是因受害人故意造成的，不承担责任。",
      },
      {
        title: "第一千二百三十九条",
        content:
          "占有或者使用易燃、易爆、剧毒、高放射性、强腐蚀性、高致病性等高度危险物造成他人损害的，占有人或者使用人应当承担侵权责任；但是，能够证明损害是因受害人故意或者不可抗力造成的，不承担责任。被侵权人对损害的发生有重大过失的，可以减轻占有人或者使用人的责任。",
      },
      {
        title: "第一千二百四十条",
        content:
          "从事高空、高压、地下挖掘活动或者使用高速轨道运输工具造成他人损害的，经营者应当承担侵权责任；但是，能够证明损害是因受害人故意或者不可抗力造成的，不承担责任。被侵权人对损害的发生有重大过失的，可以减轻经营者的责任。",
      },
      {
        title: "第一千二百四十一条",
        content:
          "遗失、抛弃高度危险物造成他人损害的，由所有人承担侵权责任。所有人将高度危险物交由他人管理的，由管理人承担侵权责任；所有人有过错的，与管理人承担连带责任。",
      },
      {
        title: "第一千二百四十二条",
        content:
          "非法占有高度危险物造成他人损害的，由非法占有人承担侵权责任。所有人、管理人不能证明对防止非法占有尽到高度注意义务的，与非法占有人承担连带责任。",
      },
      {
        title: "第一千二百四十三条",
        content:
          "未经许可进入高度危险活动区域或者高度危险物存放区域受到损害，管理人能够证明已经采取足够安全措施并尽到充分警示义务的，可以减轻或者不承担责任。",
      },
      {
        title: "第一千二百四十四条",
        content:
          "承担高度危险责任，法律规定赔偿限额的，依照其规定，但是行为人有故意或者重大过失的除外。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
