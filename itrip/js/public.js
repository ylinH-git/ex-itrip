// iscroll初始化
var myScroll;

function loaded() {
    myScroll = new iScroll('wrapper', {
        checkDOMChanges: true
    });
}
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', loaded, false);

Vue.component('index-header', {
    template: `
        <header id="header">
            <input type="text" placeholder="搜索旅行地/酒店/景点">
            <i class="searchIcon"></i>
        </header>
    `
});
Vue.component('wrapper',{
    template:`
        <section id="wrapper">
                <slot name="outer-scroller"></slot>
            <div id="scroller">
                <slot name="inner-scroller"></slot>
            </div>
        </section>
    `
})
Vue.component('my-footer',{
    props:['footer'],
    template:`
        <footer id="footer">
            <a :key="item.id" v-for="item in footer" :href="item.url" :class="item.classname+' '+item.on"><i></i><div>{{item.text}}</div></a>
        </footer>
    `
})
Vue.component('dest-header', {
    template: `
        <header id="header">
            <div class="title"><a href="#"><i></i></a>选择目的地</div>
            <div class="searchBox">
                <i class="searchIcon"></i>
                <input type="text" placeholder="春季旅游节">
            </div>
        </header>
    `
});
Vue.component('tl-header', {
    template: `
            <header id="header">
                <a href="#"><i></i></a>
                <div class="iconBox">
                    <div class="pos">
                        <i></i>
                        <span>北京</span>
                    </div>
                    <i class="searchIcon"></i>
                </div>
                <input type="text" placeholder="目的地/关键词">
            </header>
    `
});
Vue.component('his-header', {
    template: `
        <header id="header">
            <div class="title"><a href="#" class="back"><i></i></a>浏览历史<a href="#" class="clear">清空</a></div>
        </header>
    `
});
Vue.component('my-header', {
    template: `
        <header id="header">
            <div class="title"><a href="#" class="back"><i></i></a>个人</div>
            <div class="photoBox">
            <div class="photo"><a href="#" class="tp"></a></div>
        </div>
        </header>
    `
});
Vue.component('order-header', {
    template: `
        <header id="header">
            <div class="title"><a href="#" class="back"><i></i></a>我的订单<a href="#" class="search">手机查单</a></div>
        </header>
    `
});

Vue.component('order-footer',{
    template:`
    <footer id="footer">
    <a class="filter"><i></i><span>筛选</span></a>
    <a class="time"><i></i><span>预定时间</span></a>
    <a class="effective"><span>有效订单</span><i></i><span class="right"></span></a>
</footer>
    `
})