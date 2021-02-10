Page({
  data: {
    civil: [
      {
        title: "第九百五十一条",
        content:
          "行纪合同是行纪人以自己的名义为委托人从事贸易活动，委托人支付报酬的合同。",
      },
      {
        title: "第九百五十二条",
        content:
          "行纪人处理委托事务支出的费用，由行纪人负担，但是当事人另有约定的除外。",
      },
      {
        title: "第九百五十三条",
        content: "行纪人占有委托物的，应当妥善保管委托物。",
      },
      {
        title: "第九百五十四条",
        content:
          "委托物交付给行纪人时有瑕疵或者容易腐烂、变质的，经委托人同意，行纪人可以处分该物；不能与委托人及时取得联系的，行纪人可以合理处分。",
      },
      {
        title: "第九百五十五条",
        content: [
          "行纪人低于委托人指定的价格卖出或者高于委托人指定的价格买入的，应当经委托人同意；未经委托人同意，行纪人补偿其差额的，该买卖对委托人发生效力。",
          "行纪人高于委托人指定的价格卖出或者低于委托人指定的价格买入的，可以按照约定增加报酬；没有约定或者约定不明确，依据本法第五百一十条的规定仍不能确定的，该利益属于委托人。",
          "委托人对价格有特别指示的，行纪人不得违背该指示卖出或者买入。",
        ],
      },
      {
        title: "第九百五十六条",
        content: [
          "行纪人卖出或者买入具有市场定价的商品，除委托人有相反的意思表示外，行纪人自己可以作为买受人或者出卖人。",
          "行纪人有前款规定情形的，仍然可以请求委托人支付报酬。",
        ],
      },
      {
        title: "第九百五十七条",
        content: [
          "行纪人按照约定买入委托物，委托人应当及时受领。经行纪人催告，委托人无正当理由拒绝受领的，行纪人依法可以提存委托物。",
          "委托物不能卖出或者委托人撤回出卖，经行纪人催告，委托人不取回或者不处分该物的，行纪人依法可以提存委托物。",
        ],
      },
      {
        title: "第九百五十八条",
        content: [
          "行纪人与第三人订立合同的，行纪人对该合同直接享有权利、承担义务。",
          "第三人不履行义务致使委托人受到损害的，行纪人应当承担赔偿责任，但是行纪人与委托人另有约定的除外。",
        ],
      },
      {
        title: "第九百五十九条",
        content:
          "行纪人完成或者部分完成委托事务的，委托人应当向其支付相应的报酬。委托人逾期不支付报酬的，行纪人对委托物享有留置权，但是当事人另有约定的除外。",
      },
      {
        title: "第九百六十条",
        content: "本章没有规定的，参照适用委托合同的有关规定。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});