// components/activity/activity.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activityList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nowIdx: 0,//当前swiper索引
    windowHeight:0
  },
  lifetimes: {
    attached: function () {
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function () {
    // 在组件实例进入页面节点树时执行
  },
  detached: function () {
    // 在组件实例被从页面节点树移除时执行
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //swiper滑动事件
    swiperChange: function (e) {
      this.setData({
        nowIdx: e.detail.current
      })
    },
    // 关闭活动
    cancel(e){
      this.triggerEvent("activityCancel")
    },
    // 查看活动详情
    activity_detail(e) {
      this.triggerEvent("activityDetail")
    }
  },
  
})
