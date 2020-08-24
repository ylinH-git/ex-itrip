Vue.component('history-content',{
    props:["history"],
    template:`
            <section>
                <div :key="his.id" v-for="his in history">
                    <div class="time">{{his.time}}</div> 
                    <div class="content" :key="item.id" v-for="item in his.data">
                        <aside>
                            <i></i>
                        </aside>
                        <a class="details">
                            <div class="text">
                                <div class="title">{{item.title}}</div>
                                <div class="price"><span>&yen;{{item.price}}</span>起</div>
                            </div>
                            <div>
                                <img :src="item.url" alt="">
                            </div>
                        </a>
                    </div>
                </div>
            </section>
                
                   `
})
var historyPage = new Vue({
    el: "#historyPage",
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
            on: 'on',
            url: 'history.html'
        }, {
            id: 3,
            text: '个 人',
            classname: 'my',
            on: '',
            url: '#'
        }],
        history:[
            {
                id:0,
                time:"今天",
                data:[
                    {
                        id:0,
                        title:"云南昆明+大理+丽江+西双版纳8日7晚跟团游·享4飞经典套餐套餐",
                        price:2900,
                        url:'images/img/history-lis0421_03.jpg'
                    },{
                        id:1,
                        title:"海南三亚6日5晚跟团游(5钻)纯玩薄款·限时促！红树林酒店1晚sdf ",
                        price:3969,
                        url:'images/img/history-lis0421_06.jpg'
                    },{
                        id:2,
                        title:"摄影之旅·广西桂林+漓江+阳朔+南宁+德天瀑布+巴马+北海之遥",
                        price:3021,
                        url:'images/img/history-lis0421_08.jpg'
                    }
                ]
            },{
                id:1,
                time:"昨天",
                data:[
                    {
                        id:0,
                        title:"乐园游·泰国普吉岛7日跟团游(5钻)·【A线直飞】0自费 全程无担忧",
                        price:5596,
                        url:'images/img/history-lis0421_10.jpg'
                    }
                ]
            },{
                id:2,
                time:"前天",
                data:[
                    {
                        id:0,
                        title:"巴厘岛7日5晚自由行(5钻)2晚私密别墅+3晚海边酒店·蜜月旅行",
                        price:5963,
                        url:'images/img/history-lis0421_12.jpg'
                    },{
                        id:1,
                        title:"九江+景德镇+婺源4日跟团游(4钻)·花开正浓 梯田花海深处之旅",
                        price:2966,
                        url:'images/img/history-lis0421_14.jpg'
                    }
                ]
            }
        ]
    }
});