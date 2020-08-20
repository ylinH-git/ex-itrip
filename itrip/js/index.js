// banner


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
// navbox
Vue.component('nav-box-item', {
    props: ['item'],
    template: `
         <ul class="clearfix">
             <li :key="deteil.id" v-for="(deteil,name) in item" :class="deteil.pos">
                  <a href="#" :class="name">
                     {{deteil.text}}
                     <div v-if="deteil.circle==true" class='circle'>
                         <i class="top"></i>
                         <i class="bottom"></i>
                     </div>
                  </a>
             </li>
         </ul>
     `,
});
// items
Vue.component('items-sell', {
    props: ['sellitems'],
    template: `
        <div class="items">
        <div class="item" :key="item.id" v-for="item in sellitems">
            <img :src="item.imgsrc" alt="">
            <div class="text">
                {{item.text}}
            </div>
             <div class="detail clearfix">
                <span class="seat">{{item.seat}}</span>
                     <span class="price">
                            <span class="yen">&yen;</span>
                            <span class="mon">{{item.price}}</span>
                    <span>起</span>
                </span>
            </div>
        </div>
    </div>
    `
});
var indexPage = new Vue({
    el: '#indexPage',
    data: {
        sellitems: [{
            id: 0,
            imgsrc: "images/img/item-img0329_01.jpg",
            text: "台湾环岛8日7晚跟团游。甩尾狂甩3人行1人免单免单免单免单",
            seat: "席位充足",
            price: 1999
        },{
            id: 1,
            imgsrc: "images/img/item-img0329_02.jpg",
            text: "巴厘岛7日5晚自由行。五星豪庭，三星价格3月特价特价特价",
            seat: "席位充足",
            price: 2989
        }, {
            id: 2,
            imgsrc: "images/img/item-img0329_03.jpg",
            text: "韩国首尔5日4晚跟团游。暑假预售商圈五花，好好好好",
            seat: "席位充足",
            price: 1699
        }, {
            id: 3,
            imgsrc: "images/img/item-img0329_04.jpg",
            text: "马尔代夫6日自由行·6月4晚。全球顶级海岛蜜月蜜月蜜月",
            seat: "席位充足",
            price: 3099
        }, {
            id: 4,
            imgsrc: "images/img/item-img0329_05.jpg",
            text: "香港5日自由行·仅含往返机票。星光大道+天星小小小小",
            seat: "席位充足",
            price: 1888
        }, {
            id: 5,
            imgsrc: "images/img/item-img0329_06.jpg",
            text: "新加坡5日4晚自由行。错峰周末游，特赠送价值价值价值",
            seat: "席位充足",
            price: 2689
        },  ],
        items: [{
                id: 0,
                trip: {
                    id: 0,
                    pos: 'leftImg',
                    text: '旅游'
                },
                cj: {
                    id: 1,
                    pos: 'rightImg',
                    text: '出 境 游'
                },
                gn: {
                    id: 2,
                    pos: 'rightImg',
                    text: '国 内 游'
                },
                zb: {
                    id: 3,
                    pos: 'rightImg',
                    text: '周 边 游'
                },
                dd: {
                    id: 4,
                    pos: 'rightImg',
                    text: '当 地 游'
                },
            },
            {
                id: 1,
                ticket: {
                    id: 0,
                    pos: 'leftImg',
                    text: '机票'
                },
                djjp: {
                    id: 1,
                    circle: true,
                    pos: 'rightImg',
                    text: '低价机票'
                },
                qchc: {
                    id: 2,
                    pos: 'rightImg',
                    text: '汽车票/船票'
                },
                hcp: {
                    id: 3,
                    pos: 'rightImg',
                    text: '火 车 票'
                },
                zczj: {
                    id: 4,
                    pos: 'rightImg',
                    text: '专车/自驾'
                },
            }, {
                id: 2,
                hotel: {
                    id: 0,
                    pos: 'leftImg',
                    text: '酒店'
                },
                hwjd: {
                    id: 1,
                    pos: 'rightImg',
                    text: '海外酒店'
                },
                gnjd: {
                    id: 2,
                    pos: 'rightImg',
                    text: '国内酒店'
                },
                rmjd: {
                    id: 3,
                    pos: 'rightImg',
                    text: '热门酒店'
                },
                tsjd: {
                    id: 4,
                    pos: 'rightImg',
                    text: '特色酒店'
                },
            }
        ],
        imgurls: [
            "images/img/banner2.jpg",
            "images/img/banner3.jpg",
            "images/img/banner4.jpg",
            "images/img/banner1.jpg",
        ],
        footer: [{
            id: 0,
            text: '首 页',
            classname: 'index',
            on: 'on',
            url:'index.html'
        }, {
            id: 1,
            text: '目 的 地',
            classname: 'dest',
            on: '',
            url:'yourdest.html'
        }, {
            id: 2,
            text: '浏览历史',
            classname: 'history',
            on: '',
            url:'#'
        }, {
            id: 3,
            text: '个 人',
            classname: 'my',
            on: '',
            url:'#'
        }
    ]
    },
})