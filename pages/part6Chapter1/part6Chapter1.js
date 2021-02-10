Page({
  data: {
    civil: [
      {
        title: "第一千一百一十九条",
        content: "本编调整因继承产生的民事关系。",
      },
      {
        title: "第一千一百二十条",
        content: "国家保护自然人的继承权。",
      },
      {
        title: "第一千一百二十一条",
        content: [
          "继承从被继承人死亡时开始。",
          "相互有继承关系的数人在同一事件中死亡，难以确定死亡时间的，推定没有其他继承人的人先死亡。都有其他继承人，辈份不同的，推定长辈先死亡；辈份相同的，推定同时死亡，相互不发生继承。",
        ],
      },
      {
        title: "第一千一百二十二条",
        content: [
          "遗产是自然人死亡时遗留的个人合法财产。",
          "依照法律规定或者根据其性质不得继承的遗产，不得继承。",
        ],
      },
      {
        title: "第一千一百二十三条",
        content:
          "继承开始后，按照法定继承办理；有遗嘱的，按照遗嘱继承或者遗赠办理；有遗赠扶养协议的，按照协议办理。",
      },
      {
        title: "第一千一百二十四条",
        content: [
          "继承开始后，继承人放弃继承的，应当在遗产处理前，以书面形式作出放弃继承的表示；没有表示的，视为接受继承。",
          "受遗赠人应当在知道受遗赠后六十日内，作出接受或者放弃受遗赠的表示；到期没有表示的，视为放弃受遗赠。",
        ],
      },
      {
        title: "第一千一百二十五条",
        content: [
          "继承人有下列行为之一的，丧失继承权：",
          "（一）故意杀害被继承人；",
          "（二）为争夺遗产而杀害其他继承人；",
          "（三）遗弃被继承人，或者虐待被继承人情节严重；",
          "（四）伪造、篡改、隐匿或者销毁遗嘱，情节严重；",
          "（五）以欺诈、胁迫手段迫使或者妨碍被继承人设立、变更或者撤回遗嘱，情节严重。",
          "继承人有前款第三项至第五项行为，确有悔改表现，被继承人表示宽恕或者事后在遗嘱中将其列为继承人的，该继承人不丧失继承权。",
          "受遗赠人有本条第一款规定行为的，丧失受遗赠权。",
        ],
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});