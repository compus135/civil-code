Page({
  data: {
    civil: [
      {
        title: "第六百四十八条",
        content: [
          "供用电合同是供电人向用电人供电，用电人支付电费的合同。",
          "向社会公众供电的供电人，不得拒绝用电人合理的订立合同要求。",
        ],
      },
      {
        title: "第六百四十九条",
        content:
          "供用电合同的内容一般包括供电的方式、质量、时间，用电容量、地址、性质，计量方式，电价、电费的结算方式，供用电设施的维护责任等条款。",
      },
      {
        title: "第六百五十条",
        content:
          "供用电合同的履行地点，按照当事人约定；当事人没有约定或者约定不明确的，供电设施的产权分界处为履行地点。",
      },
      {
        title: "第六百五十一条",
        content:
          "供电人应当按照国家规定的供电质量标准和约定安全供电。供电人未按照国家规定的供电质量标准和约定安全供电，造成用电人损失的，应当承担赔偿责任。",
      },
      {
        title: "第六百五十二条",
        content:
          "供电人因供电设施计划检修、临时检修、依法限电或者用电人违法用电等原因，需要中断供电时，应当按照国家有关规定事先通知用电人；未事先通知用电人中断供电，造成用电人损失的，应当承担赔偿责任。",
      },
      {
        title: "第六百五十三条",
        content:
          "因自然灾害等原因断电，供电人应当按照国家有关规定及时抢修；未及时抢修，造成用电人损失的，应当承担赔偿责任。",
      },
      {
        title: "第六百五十四条",
        content: [
          "用电人应当按照国家有关规定和当事人的约定及时支付电费。用电人逾期不支付电费的，应当按照约定支付违约金。经催告用电人在合理期限内仍不支付电费和违约金的，供电人可以按照国家规定的程序中止供电。",
          "供电人依据前款规定中止供电的，应当事先通知用电人。",
        ],
      },
      {
        title: "第六百五十五条",
        content:
          "用电人应当按照国家有关规定和当事人的约定安全、节约和计划用电。用电人未按照国家有关规定和当事人的约定用电，造成供电人损失的，应当承担赔偿责任。",
      },
      {
        title: "第六百五十六条",
        content: "供用水、供用气、供用热力合同，参照适用供用电合同的有关规定。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
