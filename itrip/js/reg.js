Vue.component('reg-box',{
    props:['value'],
    data:function(){
        return {
            backValue:{
                telnum:this.value.telnum,
                password:this.value.password,
                checkNum:this.value.checkNum
            },
            isShow:'password',
            setId:null,
            time:60
        }
    },
    methods:{
        clearInput:function(e){
            e.target.style.display='none';
            if(e.target.parentElement.className=='tel'){
                this.backValue.telnum='';
            }else{
                this.backValue.password='';
            }
            
        },
        pwdShow:function(){
            if(this.isShow=='password'){
                this.isShow='text';
            }else{
                this.isShow='password';
            }
        },
        checkTime:function(e){
            if(!this.setId){
                this.setId=setInterval(()=>{
                    this.time--;
                    e.target.innerHTML=`${this.time} S`
                    if(this.time<=0){
                        e.target.innerHTML=`重新获取`
                        clearInterval(this.setId);
                        this.setId=null;
                        this.time=60
                    }
                },1000)
            }
        },
        clearShow(e){
            this.$emit('input',this.backValue)
            if(this.backValue.telnum||this.backValue.password){
                e.target.nextElementSibling.style.display='block'
            }else{
                e.target.nextElementSibling.style.display='none'
            }
           
        }
    },
    template:`
        <ul>
            <li>
                <span>国家/地区</span>
                <input type="text" name="local" class="local" value="中国大陆 86">
            </li>
            <li class="tel">
                <span>手机号</span>
                <input v-model="backValue.telnum" @input="clearShow($event)" type="text" name="telNumber" class="telNumber" placeholder="常用手机号">
                <a href="#" class="clear" @click="clearInput($event)"></a>
            </li>
            <li class="check">
                <span>验证码</span>
                <input v-model="backValue.checkNum" @input="$emit('input',backValue)" type="text" name="check" class="check" placeholder="短信验证码">
                <a href="#" class="checktime" @click="checkTime($event)">获取验证码</a>
            </li>
            <li class="pwdInput">
                <span>密码</span>
                <input v-model="backValue.password" @input="clearShow($event)" :type="isShow"  name="pwd" class="pwd" placeholder="6~12位大小写字母、数字">
                <a href="#" class="clear" @click="clearInput($event)"></a>
                <a href="#" class="show" @click="pwdShow"></a>
            </li>
            <li class="regBtn">
                <button>注册</button>
            </li>
        </ul>
    `
});
var regPage=new Vue({
    el:"#regPage",
    data:{
        regInfo:{
            telnum:'',
            password:'',
            checkNum:''
        }  
    }
});