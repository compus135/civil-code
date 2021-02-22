Page({
  data: {
    civil: [
      {
        title: "第二百条",
        content: "民法所称的期间按照公历年、月、日、小时计算。",
      },
      {
        title: "第二百零一条",
        content: [
          "按照年、月、日计算期间的，开始的当日不计入，自下一日开始计算。",
          "按照小时计算期间的，自法律规定或者当事人约定的时间开始计算。",
        ],
      },
      {
        title: "第二百零二条",
        content:
          "按照年、月计算期间的，到期月的对应日为期间的最后一日；没有对应日的，月末日为期间的最后一日。",
      },
      {
        title: "第二百零三条",
        content: [
          "期间的最后一日是法定休假日的，以法定休假日结束的次日为期间的最后一日。",
          "期间的最后一日的截止时间为二十四时；有业务时间的，停止业务活动的时间为截止时间。",
        ],
      },
      {
        title: "第二百零四条",
        content:
          "期间的计算方法依照本法的规定，但是法律另有规定或者当事人另有约定的除外。",
      },
    ],
  },
  onLoad: function (options) {
    const { partIndex, chapterIndex } = options;
    this.setData({ partIndex, chapterIndex });
  },
});
