//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    show:true,
    storeActivityList: [{
        activity_content: "既然时间是不可逆的，它总是无法被追回。↵↵面对自己匆匆又庸碌的上半年，除去唏嘘抱憾不已，且紧紧抓住下半年这最后的一点时光，去勇敢的做点什么吧。那些你平日渴望又害怕的，叫醒你打盹很久的梦想，弥补这颗粒无收的逝年。↵↵人世间唯一公平的东西，怕就是这捧任性又可人的时间了。在时间面前，没有等级，没有贫贱，没有欺凌。",
        activity_date: "2019-12-09",
        activity_id: 4,
      activity_image: "/pages/images/1.jpg",
        activity_title: "有什么样的愿望，就有什么样的人生",
        store_address: "广东省深圳市南山区 桃源街道平山村239号",
        store_name: "海鲜小店"
      },
      {
        activity_content: "既然时间是不可逆的，它总是无法被追回。↵↵面对自己匆匆又庸碌的上半年，除去唏嘘抱憾不已，且紧紧抓住下半年这最后的一点时光，去勇敢的做点什么吧。那些你平日渴望又害怕的，叫醒你打盹很久的梦想，弥补这颗粒无收的逝年。↵↵人世间唯一公平的东西，怕就是这捧任性又可人的时间了。在时间面前，没有等级，没有贫贱，没有欺凌。",
        activity_date: "2019-12-09",
        activity_id: 4,
        activity_image: "/pages/images/1.jpg",
        activity_title: "有什么样的愿望，就有什么样的人生",
        store_address: "广东省深圳市南山区 桃源街道平山村239号",
        store_name: "海鲜小店"
      },
      {
        activity_content: "既然时间是不可逆的，它总是无法被追回。↵↵面对自己匆匆又庸碌的上半年，除去唏嘘抱憾不已，且紧紧抓住下半年这最后的一点时光，去勇敢的做点什么吧。那些你平日渴望又害怕的，叫醒你打盹很久的梦想，弥补这颗粒无收的逝年。↵↵人世间唯一公平的东西，怕就是这捧任性又可人的时间了。在时间面前，没有等级，没有贫贱，没有欺凌。",
        activity_date: "2019-12-09",
        activity_id: 4,
        activity_image: "/pages/images/1.jpg",
        activity_title: "有什么样的愿望，就有什么样的人生",
        store_address: "广东省深圳市南山区 桃源街道平山村239号",
        store_name: "海鲜小店"
      },
      {
        activity_content: "既然时间是不可逆的，它总是无法被追回。↵↵面对自己匆匆又庸碌的上半年，除去唏嘘抱憾不已，且紧紧抓住下半年这最后的一点时光，去勇敢的做点什么吧。那些你平日渴望又害怕的，叫醒你打盹很久的梦想，弥补这颗粒无收的逝年。↵↵人世间唯一公平的东西，怕就是这捧任性又可人的时间了。在时间面前，没有等级，没有贫贱，没有欺凌。",
        activity_date: "2019-12-09",
        activity_id: 4,
        activity_image: "/pages/images/1.jpg",
        activity_title: "有什么样的愿望，就有什么样的人生",
        store_address: "广东省深圳市南山区 桃源街道平山村239号",
        store_name: "海鲜小店"
      },
      {
        activity_content: "既然时间是不可逆的，它总是无法被追回。↵↵面对自己匆匆又庸碌的上半年，除去唏嘘抱憾不已，且紧紧抓住下半年这最后的一点时光，去勇敢的做点什么吧。那些你平日渴望又害怕的，叫醒你打盹很久的梦想，弥补这颗粒无收的逝年。↵↵人世间唯一公平的东西，怕就是这捧任性又可人的时间了。在时间面前，没有等级，没有贫贱，没有欺凌。",
        activity_date: "2019-12-09",
        activity_id: 4,
        activity_image: "/pages/images/1.jpg",
        activity_title: "有什么样的愿望，就有什么样的人生",
        store_address: "广东省深圳市南山区 桃源街道平山村239号",
        store_name: "海鲜小店"
      }
    ]
  },
  // 关闭按钮
  activityCancel(e){
  },
  // 查看详情
  activityDetail(e){
    console.log("查看详情")
  }
})