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
Vue.component('time-header', {
    template: `
        <header id="header">
            <div class="title"><a href="#" class="back"><i></i></a>选择日期和人数<a href="#" class="intro ">起价说明</a></div>
        </header>
    `
});
Vue.component('details-header', {
    template: `
        <header id="header">
            <div class="title"><a href="#" class="back"><i></i></a>产品详情<a href="#" class="share"></a> <a href="#" class="more">• • •</a></div>
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
Vue.component('time-footer',{
    data:function(){
        return{total:6318}
    },
    template:`
    <footer id="footer">
        <a class="left">
            <span class="total">总额：&yen;{{total}}</span>
            <span>明细></span>
        </a>
        <a class="right">
            <span class="next">下一步</span>
            <span>选择资源</span>
        </a>
    </footer>
    `,
    mounted(){
        add.$on('totalChange',total=>{
            this.total=total;
        })
    }
})
Vue.component('td-footer',{
    template:`
    <footer id="footer">
        <a href="#" class="like"></a>
        <a href="#" class="add"></a>
        <a href="#" class="contact"></a>
        <a href="#" class="book">开始预订</a>
    </footer>
    `
})

Vue.component('login-header', {
    template: `
        <header id="header">
            <div class="title"><a href="#" class="back"><i></i></a>登录<a href="reg.html" class="reg">注册</a></div>
        </header>
    `
});
Vue.component('reg-header', {
    template: `
        <header id="header">
            <div class="title"><a href="login.html" class="back"><i></i></a>注册</div>
        </header>
    `
});
Vue.component('banner', {
    props: ['imgurl'],
    template: `
    <section class="banner">
        <ul class="slide">
            <li v-for="img in imgurl"><img :src="img"  alt=""></li>
            <li v-if="index==0" v-for="(img,index) in imgurl"><img :src="img"  alt=""></li>
        </ul>
        <ul class="slide-page">
            <li v-if="index==0" v-for="(img,index) in imgurl" class="on"><a href="#"></a></li>
            <li v-if="index!=0" v-for="(img,index) in imgurl"><a href="#"></a></li>
        </ul>
    </section>`,
    methods: {
        slideAni: function () {
            var page = -1;
            var stop = false;
            var currImg = 0

            function slide() {
                if (!stop) {
                    page++;
                    currImg++;
                    if (currImg > $('.slide img').length) {
                        $('.slide').css('left', 0);
                        page = 1;
                        currImg = 2;
                    }
                    $('.slide').animate({
                        left: -page * 10 + 'rem'
                    });
                    if (page <= 3) {
                        $('.slide-page>li').removeClass('on').eq(page).addClass('on');
                    } else {
                        $('.slide-page>li').removeClass('on').eq(0).addClass('on');
                    }
                    if (page > 3) {
                        page = -1;
                    }
                }
                setTimeout(slide, 2000)
            }
            slide();
        }
    },
    mounted: function () {
        this.slideAni();
    }
})