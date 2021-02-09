Page({
  data: {
    civil: [
      {
        title: "第五百零二条",
        content: [
          "依法成立的合同，自成立时生效，但是法律另有规定或者当事人另有约定的除外。",
          "依照法律、行政法规的规定，合同应当办理批准等手续的，依照其规定。未办理批准等手续影响合同生效的，不影响合同中履行报批等义务条款以及相关条款的效力。应当办理申请批准等手续的当事人未履行义务的，对方可以请求其承担违反该义务的责任。",
          "依照法律、行政法规的规定，合同的变更、转让、解除等情形应当办理批准等手续的，适用前款规定。",
        ],
      },
      {
        title: "第五百零三条",
        content:
          "无权代理人以被代理人的名义订立合同，被代理人已经开始履行合同义务或者接受相对人履行的，视为对合同的追认。",
      },
      {
        title: "第五百零四条",
        content:
          "法人的法定代表人或者非法人组织的负责人超越权限订立的合同，除相对人知道或者应当知道其超越权限外，该代表行为有效，订立的合同对法人或者非法人组织发生效力。",
      },
      {
        title: "第五百零五条",
        content:
          "当事人超越经营范围订立的合同的效力，应当依照本法第一编第六章第三节和本编的有关规定确定，不得仅以超越经营范围确认合同无效。",
      },
      {
        title: "第五百零六条",
        content: [
          "合同中的下列免责条款无效：",
          "（一）造成对方人身损害的；",
          "（二）因故意或者重大过失造成对方财产损失的。",
        ],
      },
      {
        title: "第五百零七条",
        content:
          "合同不生效、无效、被撤销或者终止的，不影响合同中有关解决争议方法的条款的效力。",
      },
      {
        title: "第五百零八条",
        content: "本编对合同的效力没有规定的，适用本法第一编第六章的有关规定。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
