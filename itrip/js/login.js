Vue.component('login-box',{
    props:['value'],
    data:function(){
        return {
            backValue:{
                username:this.value.username,
                password:this.value.password
            },
            isShow:'password'
        }
    },
    methods:{
        clearUsername:function(e){
            this.backValue.username='';
            e.target.style.display='none';
        },
        pwdShow:function(){
            if(this.isShow=='password'){
                this.isShow='text';
            }else{
                this.isShow='password';
            }
        },
        clearShow(e){
            this.$emit('input',this.backValue)
            if(this.backValue.username){
                e.target.nextElementSibling.style.display='block'
            }else{
                e.target.nextElementSibling.style.display='none'
            }
           
        }
    },
    template:`
        <ul>
            <li class="userInput">
                <span>登录</span>
                <input v-model="backValue.username" @input="clearShow($event)" type="text" name="username" class="username" placeholder="手机号码/用户名/邮箱">
                <a href="#" class="clear" @click="clearUsername($event)"></a>
            </li>
            <li class="pwdInput">
                <span>密码</span>
                <input v-model="backValue.pwd" @input="$emit('input',backValue)" :type="isShow"  name="pwd" class="pwd" placeholder="登录密码">
                <a href="#" class="show" @click="pwdShow"></a>
            </li>
            <li class="loginBtn">
                <button>登录</button>
            </li>
            <li class="icon">
                <a href="#" class="wx"></a>
                <a href="#" class="qq"></a>
                <a href="#" class="zfb"></a>
                <a href="#" class="wb"></a>
                <a href="#" class="bd"></a>
            </li>
        </ul>
    `
});
var loginPage=new Vue({
    el:"#loginPage",
    data:{
        loginInfo:{
            username:'',
            password:''
        }  
    }
});