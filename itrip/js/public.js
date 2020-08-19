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

Vue.component('my-header-1', {
    template: `
        <div id="header">
            <input type="text" placeholder="搜索旅行地/酒店/景点">
            <i class="searchIcon"></i>
        </div>
    `
});
Vue.component('wrapper',{
    template:`
    <div id="wrapper">
            <div id="scroller">
                <slot></slot>
            </div>
        </div>
    `
})
Vue.component('my-footer',{
    template:`
        <div id="footer">
            <div class="index on"><i></i><div>首 页</div></div>
            <div class="dest"><i></i><div>目 的 地</div></div>
            <div class="history"><i></i><div>浏览历史</div></div>
            <div class="my"><i></i><div>个 人</div></div>
        </div>
    `
})