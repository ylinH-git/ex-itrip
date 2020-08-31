let add=new Vue();

Vue.component('time-number-box',{
    data:()=>{
        return{
            adultNum:2,
            childNum:0,
            adultPrice:3159,
        }
    },
    template:`
        <section class="tandN">
            <div id="calender"></div>
            <div class="list">
                <ul>
                    <li>
                        <div class="text"><span>成人</span><span class="price">&yen;{{adultPrice}}/人</span></div>
                        <div class="btnBox">
                            <a href="#" class="reduce" @click="reduce">-</a>
                            <div class="num">{{adultNum}}</div>
                            <a href="#" class="add" @click="add">+</a>
                        </div>
                    </li>
                    <li>
                        <div class="text"><span>儿童</span></div>
                        <div class="btnBox">
                            <a href="#" class="reduce" @click="reduceC">-</a>
                            <div class="num">{{childNum}}</div>
                            <a href="#" class="add"  @click="addC">+</a>
                        </div>
                    </li>
                    <li> 
                        <div class="text">
                            <input type="checkbox" name="yen" id="1">
                            <span>携带幼儿</span>
                            <span class="age">0~2岁</span>
                        </div>
                    </li>
                    <li> 
                        <div class="notice">
                            最少1人起订，年龄2-12州税，不占床，不含早，只含当地的正餐半餐、车位以及导服，其他需要自理。成人+儿童最多支持9人，<span>*以上价格均为起价</span>
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>
    
    `,
    methods:{
        add(){
            if(this.adultNum<99){
                this.adultNum++;
            }
            add.$emit('totalChange',this.adultNum*this.adultPrice)
        },
        addC(){
            if(this.childNum<99){
                this.childNum++;
            }
        },
        reduce(){
            if(this.adultNum>0){
                this.adultNum--;
            }
            add.$emit('totalChange',this.adultNum*this.adultPrice)
        },
        reduceC(){
            if(this.childNum>0){
                this.childNum--;
            }
        }
    },
    mounted(){
        $(function () {
            var now = new Date();
            $('#calender').mobiscroll().calendar({
                lang: 'zh',
                display: 'inline',
                theme: 'default',
                layout:'liquid',
                markedDisplay: 'bottom',
                markedText:true,
                monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                marked: [{
                    d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1),
                    text:'&yen;3159'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2),
                    text:'&yen;3069'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3),
                    text:'&yen;3099'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 4),
                    text:'&yen;3100'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5),
                    text:'&yen;3159'
                },
                {
                    d:new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6),
                    text:'&yen;3259'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
                    text:'&yen;3099'
                },]
            });
        });
    }
})
let timeChoose=new Vue({
    el:"#timeChoose",
})

