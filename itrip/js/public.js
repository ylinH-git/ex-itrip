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