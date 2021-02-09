Page({
  data: {
    civil: [
      {
        title: "第二百四十条",
        content:
          "所有权人对自己的不动产或者动产，依法享有占有、使用、收益和处分的权利。",
      },
      {
        title: "第二百四十一条",
        content:
          "所有权人有权在自己的不动产或者动产上设立用益物权和担保物权。用益物权人、担保物权人行使权利，不得损害所有权人的权益。",
      },
      {
        title: "第二百四十二条",
        content:
          "法律规定专属于国家所有的不动产和动产，任何组织或者个人不能取得所有权。",
      },
      {
        title: "第二百四十三条",
        content: [
          "为了公共利益的需要，依照法律规定的权限和程序可以征收集体所有的土地和组织、个人的房屋以及其他不动产。",
          "征收集体所有的土地，应当依法及时足额支付土地补偿费、安置补助费以及农村村民住宅、其他地上附着物和青苗等的补偿费用，并安排被征地农民的社会保障费用，保障被征地农民的生活，维护被征地农民的合法权益。",
          "征收组织、个人的房屋以及其他不动产，应当依法给予征收补偿，维护被征收人的合法权益；征收个人住宅的，还应当保障被征收人的居住条件。",
          "任何组织或者个人不得贪污、挪用、私分、截留、拖欠征收补偿费等费用。",
        ],
      },
      {
        title: "第二百四十四条",
        content:
          "国家对耕地实行特殊保护，严格限制农用地转为建设用地，控制建设用地总量。不得违反法律规定的权限和程序征收集体所有的土地。",
      },
      {
        title: "第二百四十五条",
        content:
          "因抢险救灾、疫情防控等紧急需要，依照法律规定的权限和程序可以征用组织、个人的不动产或者动产。被征用的不动产或者动产使用后，应当返还被征用人。组织、个人的不动产或者动产被征用或者征用后毁损、灭失的，应当给予补偿。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
