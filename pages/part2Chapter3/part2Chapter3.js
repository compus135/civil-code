Page({
  data: {
    civil: [
      {
        title: "第二百三十三条",
        content:
          "物权受到侵害的，权利人可以通过和解、调解、仲裁、诉讼等途径解决。",
      },
      {
        title: "第二百三十四条",
        content: "因物权的归属、内容发生争议的，利害关系人可以请求确认权利。",
      },
      {
        title: "第二百三十五条",
        content: "无权占有不动产或者动产的，权利人可以请求返还原物。",
      },
      {
        title: "第二百三十六条",
        content:
          "妨害物权或者可能妨害物权的，权利人可以请求排除妨害或者消除危险。",
      },
      {
        title: "第二百三十七条",
        content:
          "造成不动产或者动产毁损的，权利人可以依法请求修理、重作、更换或者恢复原状。",
      },
      {
        title: "第二百三十八条",
        content:
          "侵害物权，造成权利人损害的，权利人可以依法请求损害赔偿，也可以依法请求承担其他民事责任。",
      },
      {
        title: "第二百三十九条",
        content:
          "本章规定的物权保护方式，可以单独适用，也可以根据权利被侵害的情形合并适用。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
