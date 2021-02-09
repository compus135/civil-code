Page({
  data: {
    civil: [
      {
        title: "第三百六十二条",
        content:
          "宅基地使用权人依法对集体所有的土地享有占有和使用的权利，有权依法利用该土地建造住宅及其附属设施。",
      },
      {
        title: "第三百六十三条",
        content:
          "宅基地使用权的取得、行使和转让，适用土地管理的法律和国家有关规定。",
      },
      {
        title: "第三百六十四条",
        content:
          "宅基地因自然灾害等原因灭失的，宅基地使用权消灭。对失去宅基地的村民，应当依法重新分配宅基地。",
      },
      {
        title: "第三百六十五条",
        content:
          "已经登记的宅基地使用权转让或者消灭的，应当及时办理变更登记或者注销登记。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
