nodejs angularjs例子
=============
#step 1
`npm install`

#step 2
`bower install`

#headroomjs的使用
1. 导航条动画效果：添加[animate.css](http://daneden.github.io/animate.css/)
2. headroomjs只负责出发滚动时间时，修改header的class，需自己添加header的样式定义
3. 给header添加*header--fixed*样式如下：<br/>
```css
.header--fixed {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  top: 0;
}
```
4. 在angularjs初始化之前设置Headroom的参数如下：
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