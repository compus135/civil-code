Page({
  data: {
    civil: [
      {
        title: "第九百六十一条",
        content:
          "中介合同是中介人向委托人报告订立合同的机会或者提供订立合同的媒介服务，委托人支付报酬的合同。",
      },
      {
        title: "第九百六十二条",
        content: [
          "中介人应当就有关订立合同的事项向委托人如实报告。",
          "中介人故意隐瞒与订立合同有关的重要事实或者提供虚假情况，损害委托人利益的，不得请求支付报酬并应当承担赔偿责任。",
        ],
      },
      {
        title: "第九百六十三条",
        content: [
          "中介人促成合同成立的，委托人应当按照约定支付报酬。对中介人的报酬没有约定或者约定不明确，依据本法第五百一十条的规定仍不能确定的，根据中介人的劳务合理确定。因中介人提供订立合同的媒介服务而促成合同成立的，由该合同的当事人平均负担中介人的报酬。",
          "中介人促成合同成立的，中介活动的费用，由中介人负担。",
        ],
      },
      {
        title: "第九百六十四条",
        content:
          "中介人未促成合同成立的，不得请求支付报酬；但是，可以按照约定请求委托人支付从事中介活动支出的必要费用。",
      },
      {
        title: "第九百六十五条",
        content:
          "委托人在接受中介人的服务后，利用中介人提供的交易机会或者媒介服务，绕开中介人直接订立合同的，应当向中介人支付报酬。",
      },
      {
        title: "第九百六十六条",
        content: "本章没有规定的，参照适用委托合同的有关规定。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
