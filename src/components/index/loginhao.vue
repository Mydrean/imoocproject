<template>
	<section id="loginhao">
		<div class="form">
			<p class="logotu">
				<img src="../../assets/images/indeximg/loginlogo.png" />
			</p>
			<div class="formbox">
				<input @change ="checkphone" v-model = "phone" id="phone" class="phonenum" type="number" placeholder="请输入手机号" style="border: none;padding:3% 0;"/>
			</div>
			<p class="tips">{{msgphone}}</p>
			<div class="num">
				<input @change="checkpassword" v-model="password" id="test" :type="this.registration_data.pwdType" @on-change="password" placeholder="请输入密码" style="border: none;padding: 3% 0;"/>
				<img :src="this.registration_data.src" @click="changeType()" />
			</div>
			<p class="tips">{{msgpassword}}</p>
			<p class="tip">注册即同意《慕课网注册协议》</p>
			<router-link to="/index">
				<div class="loginbtn">登录</div>
			</router-link>
			<router-link to="/login">
				<p class="hao">手机短信登录</p>
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
				msgpassword:"",
				password:"",
				registration_data:{
      				pwdType:"password",
     				src:require("../../assets/images/iconpng/close.png")
    			}
			}
		},
		methods:{
			checkphone:function(){
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
                if(this.phone==""){
                    this.msgphone="手机号不能为空";
                }else if(!myreg.test($("#phone").val())){
                    this.msgphone="请输入有效的手机号码";
                }else{
                    this.msgphone=""
                }
            },
		    checkpassword:function(){
            	var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;//
          		var value = $('#test').val();
		          if(this.password==""){
		            this.msgpassword = "密码不能为空"
		        }else if(!pwdReg.test(value)){
		            this.msgpassword = "请输入6-16位密码，区分大小写，不能使用空格！";
		        }else{
		            this.msgpassword = "";
		        }
		    },
		    changeType(){
		    	this.registration_data.pwdType = this.registration_data.pwdType==='password'?'text':'password';
		    	this.registration_data.src=this.registration_data.src==require("../../assets/images/iconpng/close.png")?require("../../assets/images/iconpng/open.png"):require("../../assets/images/iconpng/close.png");
		    }
		}
	}
</script>

<style scoped="scoped">
	#loginhao{
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
		padding: 5% 5% 3% 3%;
		box-sizing: border-box;
		border-bottom: 1px solid gainsboro;
	}
	input{
		font-size: 1rem;
	}
	input:focus{
		outline: none;
		
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
		width: 80%;
	}
	.num img{
		width: 7%;
		padding-left: 11%;
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
		padding-left: 3%;
		padding-top: 3%;
		font-size: 0.8rem;
		color: red;
	}
</style>