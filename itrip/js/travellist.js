var hub = new Vue();

Vue.component('tl-nav', {
    props: ['navbtn'],
    template: `
            <nav>
                <a href="#" @click.stop="choose(index)" v-if="navbtn.status==200" :key="item.id" v-for="(item,index) in navbtn.list" :class="item.on"><div>{{item.type}}</div></a>
                <a href="#" v-if="navbtn.status==100"><div>读取错误，请刷新</div></a>
            </nav>
    `,
    methods: {
        choose: function (index) {
            $('nav>a').removeClass('on');
            $('nav>a').eq(index).addClass('on')
            hub.$emit('nav-change', index);
        },
    },
});
const content = {
    data: function () {
        return {
            id: 0
        }
    },
    props: ['list'],
    template: `
    <div class="contentBox">
        <ul class="content" v-if="items.id==id" v-for=" items in list ">
            <li :key="item.id" v-for="item in items.content">
                <a :href="item.href">
                    <img :src="item.url" alt="">
                    <div class="details">
                        <div class="title">{{item.title}}</div>
                        <div class="tab">
                            <span v-for="tab in item.tab">{{tab}}</span><span class="lightTab" v-for="lightTab in item.lightTab">{{lightTab}}</span>
                        </div>
                        <div class="desc">
                            <span class="departure">{{item.departure}}</span>
                            {{item.desc}}
                        </div>
                        <div class="time">{{item.time}}</div>
                        <div class="pncg">
                            <span class="price"><span class="mon">&yen;</span>{{item.price}}<span class="qi">起</span></span>
                            <span class="np"><span class="mark">{{item.np}}人</span>出游</span>
                            <span class="coms"><span class="mark">{{item.coms}}条</span>评论<span class="grade"><span>{{item.grade}}</span>分</span></span>   
                        </div>
                    </div>
                </a>  
            </li>
        </ul>
    </div>
       
    `,
    mounted: function () {
        hub.$on('nav-change', id => {
            this.id = id;
        })
    }
}

var tlistPage = new Vue({
    el: '#tList',
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
        list: [],
    },
    // 局部组件
    components: {
        'tl-content': content
    },
    methods: {
        queryData(url) {
            // Promise方式的ajax
            var p = new Promise(function (resolve, reject) {
                var xhr;
                if(window.XMLHttpRequest){
                    xhr=new window.XMLHttpRequest();
                }else{
                    xhr=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xhr.open('get',url);
                xhr.send();
                xhr.onreadystatechange=function(){
                    // 因为onreadystatechange不只调用一次，所以通过下面如果不是4就直接返回
                    if(xhr.readyState!=4) {return};
                    if(xhr.readyState==4&&xhr.status==200){
                        resolve(JSON.parse(xhr.responseText))
                    }else{
                        reject('wrong');
                    }
                }
            });
            return p;
        }
    },
    // 挂载时获取数据
    mounted: function () {
        // zepto/jquery ajax获取方式
        // $.ajax({
        //     type:'get',
        //     url:'../data/list.json',
        //     dataType:'json',
        //     success:function(data){
        //         tlistPage.list=data;
        //     }
        // })

        // 原生js ajax方式
        // let xhr;
        // if(window.XMLHttpRequest){
        //     xhr=new window.XMLHttpRequest();
        // }else{
        //     xhr=new ActiveXObject("Microsoft.XMLHTTP");
        // }
        // xhr.open('get','../data/list.json',true);
        // xhr.send();
        // xhr.onreadystatechange=function(){
        //     if(xhr.readyState==4&&xhr.status==200){
        //         // JSON.parse 将json格式转变为对象
        //         // JSON.stringify() 将对象转变为json格式
        //         tlistPage.list=JSON.parse(xhr.responseText)
        //     }
        // }
        var that=this;
        // Promise 方式的调用
        // this.queryData('../data/list.json').then(function(res){
        //     that.list=res;
        // }).catch(function(rej){
        //     console.log(new Error(rej))
        // });
        // fetch() 方式 获取异步数据
        fetch('../data/list.json').then(function(data){
            return data.text()
        }).then(function(data){
            that.list=JSON.parse(data);
        });
        
    }
})