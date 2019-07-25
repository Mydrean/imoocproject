<template>
	<section id="login">
		<div class="form">
			<p class="logotu">
				<img src="../../assets/images/indeximg/loginlogo.png" />
			</p>
			<div class="formbox">
				<span>+86</span>
				<i class="iconfont icon-xiangxia1"></i>
				<input @change ="checkphone" v-model = "phone" id="phone" class="phonenum" type="number" placeholder="手机号" style="border: none;padding: 3%;width: 60%;"/>
			</div>
			<div class="num">
				<input type="number" placeholder="请输入手机验证码" style="border: none;padding: 3%;"/>
				<span id="tipnum" @click="change()">{{content}}</span>
				<!--<span id="tipnum2">重新发送60</span>-->
			</div>
			<p class="tips">{{msgphone}}</p>
			<p class="tip">注册即同意《慕课网注册协议》</p>
			<router-link to="/index">
				<div class="loginbtn">登录</div>
			</router-link>
			<router-link to="/loginhao">
				<p class="hao">账号密码登录</p>
			</router-link>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				msgphone:"",
				phone:"",
				content: '获取验证码',
				totalTime: 60,
				canClick: true //添加canClick
			}
		},
		methods:{
			checkphone:function(){
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
                var otipnum=document.getElementById('tipnum')
                if(this.phone==""){
                    this.msgphone="手机号不能为空";
                    otipnum.style.color='gray'
                }else if(!myreg.test($("#phone").val())){
                    this.msgphone="请输入有效的手机号码";
                    otipnum.style.color='gray';
                }else{
                    this.msgphone=""
                    otipnum.style.color='black'
                }
            },
            change(){
            	if (!this.canClick) return  //改动的是这两行代码
				this.canClick = false
				this.content = '重新发送' + this.totalTime
				let clock = window.setInterval(() => {
				    this.totalTime--
				    this.content = '重新发送' + this.totalTime
				    if (this.totalTime < 0) {
				        window.clearInterval(clock)
				        this.content = '重新发送验证码'
				        this.totalTime = 60
				        this.canClick = true  //这里重新开启
				    }
				},1000)
            }
		}
	}
</script>

<style scoped="scoped">
	#login{
		overflow: hidden;
		width: 100%;
		height: auto;
	}
	.form{
		width: 100%;
		height: 500px;
		background: url(../../assets/images/indeximg/bg.png)no-repeat;
		background-size: 100% auto;
	    padding: 5%;
	   	box-sizing: border-box;
	}
	.logotu{
		width: 100%;
		height: auto;
		text-align: center;
	}
	.formbox{
		padding: 5% 5% 3% 5%;
		box-sizing: border-box;
		border-bottom: 1px solid gainsboro;
		box-sizing: border-box;
	}
	input{
		font-size: 0.8rem;
	}
	input:focus{
		outline: none;
		
	}
	#tipnum{
		font-size: 0.8rem;
	}
	#tipnum2{
		font-size: 0.8rem;
		display: none;
	}
	.num{
		width: 100%;
		height: auto;
		padding: 8% 3% 3% 3%;
		box-sizing: border-box;
		color: gray;
		border-bottom: 1px solid gainsboro;
	}
	.num input{
		width: 65%;
	}
	.tip{
		padding: 5%;
		width: 100%;
		text-align: center;
		font-size: 0.5rem;
		color: gray;
		box-sizing: border-box;
	}
	.loginbtn{
		width: 90%;
		height: auto;
		margin: 5% 5%;
		background: #F20D0D;
		text-align: center;
		padding: 4% 0;
		font-size: 1.2rem;
		color: white;
		font-weight: bold;
		border-radius: 2rem;
	}
	.hao{
		width: 100%;
		height: auto;
		text-align: center;
		color: red;
		padding-top: 5%;
	}
	.tips{
		padding-left: 5%;
		padding-top: 3%;
		font-size: 0.8rem;
		color: red;
	}
</style>