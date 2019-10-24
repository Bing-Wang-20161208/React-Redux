一切皆组件
1.路由传参：
    1.query
    2.动态路由 /path/:param => param 回传数据参数里面去获取
    3.使用state隐式传参
埋点：用于第三方统计网站流量的软件来统计数据
2.发送数据的方式：
    1.ajax  //成功率最低
    2.img：
        const img = new Image();
        img.src = "http:www.domainname.com/button-01.gif?x=1&y=2"
    3.sendBeacon    //成功率最高，但是兼容性最低