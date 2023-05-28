import Mock from 'mockjs'

Mock.mock(RegExp('/product/search.*'), {
    // 键值对可以自定义
    "ret": 0,
    "data": {
        // 随机生成时间
        "mtime": "@datetime",
        // 随机生成1~800的数字,1是确认生成一个数字
        "score|1-800": 1,
        "rank|1-100": 1,
        "stars|1-5": 1,
        // 随机生成名字
        "nickname": "@cname",
        // 随机生成图片
        "img": "@image('200x100','#ffcc33','#FFF','png','FastMock')",
        "name|2": 'b'
    }
});
