Vue.component('order-content',{
    template:`
            <section>
                    <div class="ordersBox">
                        <div class="order">
                            <div class="title">三亚5日4晚半自助游 <span class="price">&yen;6512</span></div>
                            <div class="time">12-23至12-27 <span>未提交</span></div>
                            <div class="btnBox">
                                <button class="cancel">取消</button>
                                <button class="check">查看行程</button>
                                <button class="book on">继续预定</button>
                            </div>
                        </div>
                        <div class="end">
                            <div>已显示全部订单</div> 
                            <a class="lastYear">
                                <span>查看一年前订单</span>
                                <i></i>
                            </a>
                        </div>
                        
                    </div>
                </section>
    `
});
var myOrderPage=new Vue({
    el:"#myOrderPage",
    data:{}
});