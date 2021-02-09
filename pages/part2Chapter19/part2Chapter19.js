Page({
  data: {
    civil: [
      {
        title: "第四百四十七条",
        content: [
          "债务人不履行到期债务，债权人可以留置已经合法占有的债务人的动产，并有权就该动产优先受偿。",
          "前款规定的债权人为留置权人，占有的动产为留置财产。",
        ],
      },
      {
        title: "第四百四十八条",
        content:
          "债权人留置的动产，应当与债权属于同一法律关系，但是企业之间留置的除外。",
      },
      {
        title: "第四百四十九条",
        content: "法律规定或者当事人约定不得留置的动产，不得留置。",
      },
      {
        title: "第四百五十条",
        content: "留置财产为可分物的，留置财产的价值应当相当于债务的金额。",
      },
      {
        title: "第四百五十一条",
        content:
          "留置权人负有妥善保管留置财产的义务；因保管不善致使留置财产毁损、灭失的，应当承担赔偿责任",
      },
      {
        title: "第四百五十二条",
        content: [
          "留置权人有权收取留置财产的孳息。",
          "前款规定的孳息应当先充抵收取孳息的费用。",
        ],
      },
      {
        title: "第四百五十三条",
        content: [
          "留置权人与债务人应当约定留置财产后的债务履行期限；没有约定或者约定不明确的，留置权人应当给债务人六十日以上履行债务的期限，但是鲜活易腐等不易保管的动产除外。债务人逾期未履行的，留置权人可以与债务人协议以留置财产折价，也可以就拍卖、变卖留置财产所得的价款优先受偿。",
          "留置财产折价或者变卖的，应当参照市场价格。",
        ],
      },
      {
        title: "第四百五十四条",
        content:
          "债务人可以请求留置权人在债务履行期限届满后行使留置权；留置权人不行使的，债务人可以请求人民法院拍卖、变卖留置财产。",
      },
      {
        title: "第四百五十五条",
        content:
          "留置财产折价或者拍卖、变卖后，其价款超过债权数额的部分归债务人所有，不足部分由债务人清偿。",
      },
      {
        title: "第四百五十六条",
        content:
          "同一动产上已经设立抵押权或者质权，该动产又被留置的，留置权人优先受偿。",
      },
      {
        title: "第四百五十七条",
        content:
          "留置权人对留置财产丧失占有或者留置权人接受债务人另行提供担保的，留置权消灭。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
