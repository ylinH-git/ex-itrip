const dBanner = {
    props: ['imgurl'],
    template: `
    <section class="banner">
            <li v-for="img in imgurl"><img :src="img"  alt=""></li>
            <div class="text">北京出发 | i旅行 <span>编号：11037168</span></div>
    </section>`,
}
// router
// 配置用于路由的组件
const Feature = {
    template: `
    <div class="content">
        <img src="images/img/detail_nav0417_03.jpg" alt="">
        <img src="images/img/detail_nav0417_04.jpg" alt="">
        <img src="images/img/detail_nav0417_05.jpg" alt="">
        <img src="images/img/detail_nav0417_06.jpg" alt="">
        <img src="images/img/detail_nav0417_07.jpg" alt="">
    </div>       
    `
}
const Jour = {
    data:function(){
        return{
            jour: [{
                text: '呀诺达--槟榔谷--亚龙湾',
                tag: '',
                imgurl: []
            },
            {
                text: '07:30 早餐：中西式自助早餐',
                tag: '30分钟',
                imgurl: []
            },
            {
                text: '08:30 呀诺达雨林文化旅游区',
                tag: '2小时',
                imgurl: [
                    'images/img/list_del228198_0417_04.jpg',
                    'images/img/list_del228198_0417_06.jpg',
                    'images/img/list_del228198_0417_10.jpg',
                    'images/img/list_del228198_0417_11.jpg',
                ]
            },
            {
                text: '11:30 午餐：50元/餐/人',
                tag: '1小时',
                imgurl: []
            },
            {
                text: '13:00 槟榔谷',
                tag: '2小时',
                imgurl: [
                    'images/img/list_del228198_0417_14.jpg',
                    'images/img/list_del228198_0417_15.jpg',
                    'images/img/list_del228198_0417_18.jpg',
                    'images/img/list_del228198_0417_19.jpg',
                ]
            },
            {
                text: '16:00 亚龙湾',
                tag: '1小时',
                imgurl: [
                    'images/img/list_del228198_0417_22.jpg',
                    'images/img/list_del228198_0417_23.jpg',
                ]
            }
        ]
        }
    },
    template: `
    <div class="content">
        <div class="jourDay">
            <div class="dayTag">&nbsp;第2天</div>
            <div class="jourTime" :key="index" v-for="(item,index) in jour">
                <div class="text">{{item.text}}<span v-if="item.tag!=''">{{item.tag}}</span></div>
                <div class="imgBox">
                    <img :src="url" alt="" :key="urlid" v-for="(url,urlid) in item.imgurl">
                </div>
            </div>
        </div>
    </div>

    `
}
const Notice = {
    template: `
    <div class="content">
        <div class="noticeBox">
            <div class="text"> (本产品由北京致远国际旅行社有限公司提供产品销售、资源确认、合同签署、行程安排等全部环节的旅游服务。在您付款成功、并且商家给您最终确认后，商家与您的合同方能生效。在合同生效之前，用户与商家双方均有权更改或取消订单，且无须承担任何损失。)</div>                          
            <div class="title">费用包含</div>
            <div class="text">1.往返机票、燃油附加费(以实际收费标准为准)、机场建设费。</div>
            <div class="text">2.行程所列酒店住宿费用。</div>
            <div class="text">3.酒店押金需客人前台付，酒店房型默认为双标床，如需大床房，请提前告知，我司可根据酒店房态尽量安排，不保证哦!</div>
            <div class="text">4.行程内所列餐食(具体请参考行程推荐，自理除外)。</div>
            <div class="text">5.当地中文导游服务。</div>
            <div class="text">6.8人以下司机兼导游。</div>
            <div class="text">7.行程中所列景点首道大门票，蜈支洲、槟榔谷、亚龙湾。</div>
            <div class="text">8.儿童价特殊说明: 2岁以上1.2米以下儿童只含半价正餐+车位，其他超高费用需自理。由于成人价格是按团队进行报价，如儿童按成人提交无任何费用可退，请知晓。</div>
            <div class="title">自理费用</div>
            <div class="text">1.由于跟团推荐的自费项目门票，已经为旅行社折扣价格，所以客人自行购买自费项目的门票，需要补导游80元/人/项目的费用方可跟车参加。</div>
            <div class="text">2.单人出行必须选择单房差，3成人及以上出行如不补单房差选择加床，全程入住福朋喜来登酒店需现补400元/人差价现补给导游方可安排加床。</div>
            <div class="text">3.因交通延阻、罢工、天气、飞机、 机器故障、航班取消或更改时间等不可抗力原因所导致的额外费用。</div>
            <div class="text">4.酒店内洗衣、理发、电话、传真、收费电视、饮品、烟酒等个人消费。</div>
            <div class="text">5.以上“费用包含”中不包含的其它项目。</div>
        </div>
    </div>
    `
}
// 配置路由路径对应的组件
const routes = [{
        path: '/feature',
        component: Feature,
    },
    {
        path: '/jour',
        component: Jour
    },
    {
        path: '/notice',
        component: Notice
    }
]
// 注册路由对象
const router = new VueRouter({
    routes,
    linkActiveClass: "on"
})
var tDetails = new Vue({
    el: "#tDetails",
    data: {
        imgurls: [
            "images/img/banner-detail0412_01.jpg",
        ]
    },
    components: {
        'd-banner': dBanner
    },
    // 在Vue示例中引入路由对象
    router,
});