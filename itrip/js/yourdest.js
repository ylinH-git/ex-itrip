Vue.component('left-nav', {
    props: ['navitems'],
    template: `
        <aside class="leftNav">
            <ul>
                <li><a href="#" @click="$emit('choose',item.id)" :key="item.id" v-for="item in navitems" :class="item.classname+' '+item.on"><i></i><span>{{item.text}}</span></a></li>
            </ul>
        </aside>
    `
})
Vue.component('dest-content', {
    props: ['destitems'],
    template: `
        <section class="destBox">
            <div :key="items.id" v-for="items in destitems" :class="items.type" :style="{'display':items.isShow}">
                <a :key="item.id" v-for="item in items.items" class="item">
                    <img :src="item.url" alt="">
                    <div class="text">{{item.text}}</div>                     
                </a>
            </div>
        </section>
    `
})
var destPage = new Vue({
    el: '#destPage',
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
            on: 'on',
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
            on: '',
            url: '#'
        }],
        nav: [{
                id: 0,
                classname: 'hot',
                text: '热 门',
                on: 'on'
            },
            {
                id: 1,
                classname: 'gn',
                text: '国 内',
                on: ''
            },
            {
                id: 2,
                classname: 'gw',
                text: '国 外',
                on: ''
            }
        ],
        destitems: [{ 
            id: 0,
            type: 'hot',
            isShow:'flex',
            items: [{
                    id: 0,
                    url: 'images/img/search0407_01.jpg',
                    text: '上海迪士尼'
                },
                {
                    id: 1,
                    url: 'images/img/search0407_02.jpg',
                    text: '云南'
                },
                {
                    id: 2,
                    url: 'images/img/search0407_03.jpg',
                    text: '厦门'
                },
                {
                    id: 3,
                    url: 'images/img/search0407_04.jpg',
                    text: '香港'
                },
                {
                    id: 4,
                    url: 'images/img/search0407_05.jpg',
                    text: '法国'
                },
                {
                    id: 5,
                    url: 'images/img/search0407_06.jpg',
                    text: '泰国'
                },
                {
                    id: 6,
                    url: 'images/img/search0407_07.jpg',
                    text: '美国'
                },
                {
                    id: 7,
                    url: 'images/img/search0407_08.jpg',
                    text: '英国'
                },
            ]
        },{
            id: 1,
            type: 'gn',
            isShow:'none',
            items: [{
                    id: 0,
                    url: 'images/img/guonei0407_03.jpg',
                    text: '上海迪士尼'
                },
                {
                    id: 1,
                    url: 'images/img/guonei0407_05.jpg',
                    text: '稻城亚丁'
                },
                {
                    id: 2,
                    url: 'images/img/guonei0407_09.jpg',
                    text: '九寨沟'
                },
                {
                    id: 3,
                    url: 'images/img/guonei0407_10.jpg',
                    text: '乌镇'
                },
                {
                    id: 4,
                    url: 'images/img/guonei0407_13.jpg',
                    text: '婺源'
                },
                {
                    id: 5,
                    url: 'images/img/guonei0407_14.jpg',
                    text: '青海湖'
                },
                {
                    id: 6,
                    url: 'images/img/guonei0407_17.jpg',
                    text: '云深'
                },
                {
                    id: 7,
                    url: 'images/img/guonei0407_18.jpg',
                    text: '不知处'
                },
            ]
        },{
            id: 2,
            type: 'gw',
            isShow:'none',
            items: [{
                    id: 0,
                    url: 'images/img/waiguo0407_03.jpg',
                    text: '马尔代夫'
                },
                {
                    id: 1,
                    url: 'images/img/waiguo0407_05.jpg',
                    text: '夏威夷'
                },
                {
                    id: 2,
                    url: 'images/img/waiguo0407_09.jpg',
                    text: '巴厘岛'
                },
                {
                    id: 3,
                    url: 'images/img/waiguo0407_10.jpg',
                    text: '曼谷'
                },
                {
                    id: 4,
                    url: 'images/img/waiguo0407_13.jpg',
                    text: '西班牙'
                },
                {
                    id: 5,
                    url: 'images/img/waiguo0407_14.jpg',
                    text: '拉斯维加斯'
                },
                {
                    id: 6,
                    url: 'images/img/waiguo0407_17.jpg',
                    text: '长滩岛'
                },
                {
                    id: 7,
                    url: 'images/img/waiguo0407_18.jpg',
                    text: '菲律宾'
                },
            ]
        }]
    },
    methods:{
        changeNav:function(id){
            this.nav.forEach(function(item){
                if(id==item.id){
                    item.on='on';
                }else{
                    item.on='';
                }
            });
            this.destitems.forEach(function(item){
                if(id==item.id){
                    item.isShow='flex';
                }else{
                    item.isShow='none';
                }
            });
        }
    }
});