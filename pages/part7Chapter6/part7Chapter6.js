Page({
  data: {
    civil: [
      {
        title: "第一千二百一十八条",
        content:
          "患者在诊疗活动中受到损害，医疗机构或者其医务人员有过错的，由医疗机构承担赔偿责任。",
      },
      {
        title: "第一千二百一十九条",
        content: [
          "医务人员在诊疗活动中应当向患者说明病情和医疗措施。需要实施手术、特殊检查、特殊治疗的，医务人员应当及时向患者具体说明医疗风险、替代医疗方案等情况，并取得其明确同意；不能或者不宜向患者说明的，应当向患者的近亲属说明，并取得其明确同意。",
          "医务人员未尽到前款义务，造成患者损害的，医疗机构应当承担赔偿责任。",
        ],
      },
      {
        title: "第一千二百二十条",
        content:
          "因抢救生命垂危的患者等紧急情况，不能取得患者或者其近亲属意见的，经医疗机构负责人或者授权的负责人批准，可以立即实施相应的医疗措施。",
      },
      {
        title: "第一千二百二十一条",
        content:
          "医务人员在诊疗活动中未尽到与当时的医疗水平相应的诊疗义务，造成患者损害的，医疗机构应当承担赔偿责任。",
      },
      {
        title: "第一千二百二十二条",
        content: [
          "患者在诊疗活动中受到损害，有下列情形之一的，推定医疗机构有过错：",
          "（一）违反法律、行政法规、规章以及其他有关诊疗规范的规定；",
          "（二）隐匿或者拒绝提供与纠纷有关的病历资料；",
          "（三）遗失、伪造、篡改或者违法销毁病历资料。",
        ],
      },
      {
        title: "第一千二百二十三条",
        content:
          "因药品、消毒产品、医疗器械的缺陷，或者输入不合格的血液造成患者损害的，患者可以向药品上市许可持有人、生产者、血液提供机构请求赔偿，也可以向医疗机构请求赔偿。患者向医疗机构请求赔偿的，医疗机构赔偿后，有权向负有责任的药品上市许可持有人、生产者、血液提供机构追偿。",
      },
      {
        title: "第一千二百二十四条",
        content: [
          "患者在诊疗活动中受到损害，有下列情形之一的，医疗机构不承担赔偿责任：",
          "（一）患者或者其近亲属不配合医疗机构进行符合诊疗规范的诊疗；",
          "（二）医务人员在抢救生命垂危的患者等紧急情况下已经尽到合理诊疗义务；",
          "（三）限于当时的医疗水平难以诊疗。",
          "前款第一项情形中，医疗机构或者其医务人员也有过错的，应当承担相应的赔偿责任。",
        ],
      },
      {
        title: "第一千二百二十五条",
        content: [
          "医疗机构及其医务人员应当按照规定填写并妥善保管住院志、医嘱单、检验报告、手术及麻醉记录、病理资料、护理记录等病历资料。",
          "患者要求查阅、复制前款规定的病历资料的，医疗机构应当及时提供。",
        ],
      },
      {
        title: "第一千二百二十六条",
        content:
          "医疗机构及其医务人员应当对患者的隐私和个人信息保密。泄露患者的隐私和个人信息，或者未经患者同意公开其病历资料的，应当承担侵权责任。",
      },
      {
        title: "第一千二百二十七条",
        content: "医疗机构及其医务人员不得违反诊疗规范实施不必要的检查。",
      },
      {
        title: "第一千二百二十八条",
        content: [
          "医疗机构及其医务人员的合法权益受法律保护。",
          "干扰医疗秩序，妨碍医务人员工作、生活，侵害医务人员合法权益的，应当依法承担法律责任。",
        ],
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
