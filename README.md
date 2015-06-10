nodejs angularjs例子
=============
#安装nodejs插件
`npm install`

#安装bower插件
`bower install`

#headroomjs的使用
1. headroomjs只负责触发滚动事件时，修改header的class，需自己添加header的样式定义[animate.css](http://daneden.github.io/animate.css/)
2. 给header添加*header--fixed*样式如下：<br/>
```css
.header--fixed {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  top: 0;
}
```
3. 在angularjs初始化之前设置Headroom的参数如下：
```javascript
Headroom.options.offset = 200;
Headroom.options.classes = {
    initial: "animated",
    pinned: "fadeInDown",
    unpinned: "fadeOutUp",
    top: 'headroom--top',
    notTop: 'headroom--not-top'
};
```