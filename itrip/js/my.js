Vue.component('my-content',{
    template:`
    <section>
    <div class="infor">
        <div class="title">您好 游客</div>
        <div class="text">世界很大，抬脚出去荡</div>
        <div class="mon">
            <div class="dis">
                <div class="mark"><span>&yen;</span>50</div>
                <div class="type">红包优惠券</div>
            </div>
            <div class="count">
             <div class="mark">1000<span>分</span></div>
             <div class="type">积分</div>
         </div>
        </div>
    </div>
    <div class="order">
        <a href="#">
            <i class="all"></i>
            全部订单
        </a>
        <a href="#">
         <i class="noPay"></i>
         待付款
     </a>
     <a href="#">
         <i class="noGo"></i>
         未出行
     </a>
     <a href="#">
         <i class="noCom"></i>
         待点评
     </a>
    </div>
    <nav>
        <ul>
            <li><a href="#"><i class="photos"></i><span>我的相册</span></a></li>
            <li><a href="#"><i class="jour"></i><span>我的形程</span></a></li>
            <li><a href="#"><i class="notes"></i><span>我的游记</span></a></li>
            <li><a href="#"><i class="wealth"></i><span>我的财富</span></a></li>
        </ul>
    </nav>
 </section>
    `
});
var myPage = new Vue({
    el: "#myPage",
    data: {
        footer: [{
            id: 0,
            text: '首 页',
            classname: 'index',
            on: '',
            url: 'index.html'
        }, {
            id: 1,
            text: '目 的 地',
            classname: 'dest',
            on: '',
            url: 'yourdest.html'
        }, {
            id: 2,
            text: '浏览历史',
            classname: 'history',
            on: '',
            url: 'history.html'
        }, {
            id: 3,
            text: '个 人',
            classname: 'my',
            on: 'on',
            url: '#'
        }],
    }
});