Vue.component('travel-nav', {
    data: function () {
        return {
            type:[
            {
                href:'travelList.html',
                text:'出境游',
                className:'cjy'
            },
            {
                href:'#',
                text:'国内游',
                className:'gny'
            },
            {
                href:'#',
                text:'周边游',
                className:'zby'
            },
            {
                href:'#',
                text:'当地游',
                className:'当地游'
            }]
        }
    },
    template: `
    <nav class="travelType">
        <div class="navBox">
            <a :href="item.href" :key="index" :class="item.className" v-for="(item,index) in type">
                <i></i>
                <div class="text">{{item.text}}</div>
            </a>
        </div>
    </nav>
    `
})
Vue.component('travel-show', {
    props: ['tsurl'],
    template: `
    <ul class="travelShow">
        <li :key="index" v-for="(url,index) in tsurl">
            <a href="#">
                <img :src="url" alt=""> 
                <i class="tag"></i>
            </a>
        </li>
    </ul>
    `
})
// items
Vue.component('items-sell', {
    props: ['listItems'],
    template: `
        <div class="items">
        <div class="item" :key="item.id" v-for="item in listItems">
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
var tIndex = new Vue({
    el: '#tIndex',
    data: {
        footer: [{
            id: 0,
            text: '旅游首页',
            classname: 'tl',
            on: '',
            url: '#'
        }, {
            id: 1,
            text: '目 的 地',
            classname: 'dest',
            on: '',
            url: '#'
        }, {
            id: 2,
            text: '浏览历史',
            classname: 'history',
            on: '',
            url: '#'
        }, {
            id: 3,
            text: '个 人',
            classname: 'my',
            on: '',
            url: '#'
        }],
        imgurls: [
            "images/img/travel-banner01.jpg",
            "images/img/travel-banner02.jpg",
            "images/img/travel-banner03.jpg",
            "images/img/travel-banner04.jpg",
        ],
        tSUrls: [
            "images/img/travel-show_01.jpg",
            "images/img/travel-show_02.jpg",
            "images/img/travel-show_03.jpg",
            "images/img/travel-show_04.jpg",
        ],
        listItems: [{
            id: 0,
            imgsrc: "images/img/travel-look0401_02.jpg",
            text: "曼谷+芭提雅6日5晚自由行（4钻）",
            seat: "席位充足",
            price: 3060
        }, {
            id: 1,
            imgsrc: "images/img/travel-look0401_03.jpg",
            text: "美国东西海岸+夏威夷+波士顿+纽约+华盛顿+拉西蒂",
            seat: "席位充足",
            price: 9099
        }, {
            id: 2,
            imgsrc: "images/img/travel-look0401_04.jpg",
            text: "日本东京+大阪7日6晚自由行【美食·购物】",
            seat: "席位充足",
            price: 5353
        }, {
            id: 3,
            imgsrc: "images/img/travel-look0401_05.jpg",
            text: "意大利+梵蒂冈+瑞士+法国+维罗纳13日跟团游游游游",
            seat: "席位充足",
            price: 13999
        }, {
            id: 4,
            imgsrc: "images/img/travel-look0401_06.jpg",
            text: "普吉岛6日5晚自由行·DIY自由定制，酒店任选海岸美丽",
            seat: "席位充足",
            price: 1999
        }, {
            id: 5,
            imgsrc: "images/img/travel-look0401_07.jpg",
            text: "澳大利亚悉尼+黄金海岸+墨尔本自由行·11天9晚晚晚晚晚",
            seat: "席位充足",
            price: 1999
        }, ],
    }
})