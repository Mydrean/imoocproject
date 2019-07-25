<template>
	<div>
	<section id="reply">
		<div class="replybox" v-for="(item,index) in reply">
			<div class="replylf l">
				<img :src="item.src" />
			</div>
			<div class="replyrt l">
				<p class="replytxt">
					<span class="replyrttit">{{item.type}}</span>
					<span class="replyrtre">{{item.answernum}}</span>
				</p>
				<router-link to="/quesiondet">
					<p class="quesion">
						{{item.quesion}}
					</p>
				</router-link>
				<p class="answer">
					<span class="answ">
						<router-link to="/ireply">
							<i class="iconfont icon-jiahao"></i>我要回答
						</router-link>
					</span>
					<span id="see1" class="see1" @click="see1btn(index)"><i class="iconfont icon-xingxing1"></i>关注</span>
					<span id="see2" class="see2" @click="see2btn(index)"><i class="iconfont icon-xingxing1"></i>已关注</span>
				</p>
			</div>
			<hr style="background: gainsboro;" />
		</div>
	</section>
	<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				reply:[]
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/reply.json')
			.then(function(res){
				_this.reply=res.data.reply

			})
			.catch(()=>{

		  	})
		  	.then((f)=>{

		  	});  
		},
		methods:{
			see1btn(a){
				var s1=document.getElementsByClassName('see1');
				var s2=document.getElementsByClassName('see2');
					s1[a].style.display="none";
					s2[a].style.display="block";
			},
			see2btn(b){
				var s1=document.getElementsByClassName('see1');
				var s2=document.getElementsByClassName('see2');
					s2[b].style.display = 'none';
					s1[b].style.display = 'block';
			}
		}
	}
</script>

<style scoped="scoped">
	#reply{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding-top: 4%;
	}
	.replybox{
		width: 100%;
		height: auto;
		padding-left: 2%;
		padding-right: 3%;
		padding-bottom: 5%;
		box-sizing: border-box;
	}
	.replylf{
		width: 20%;
		height: auto;
		box-sizing: border-box;
		text-align: center;
	}
	.replylf img{
		width: 60%;
		height: auto;
		border-radius:0.2rem ;
	}
	.replyrt{
		width: 80%;
		height: auto;
		padding-right: 3%;
		box-sizing: border-box;
		
	}
	.replytxt{
		margin-top: -2%;
	}
	.replyrttit{
		font-size: 0.5rem;
		color: gray;
	}
	.replyrtre{
		padding-left: 3%;
		font-size: 0.5rem;
		color: gray;
	}
	.quesion{
		font-size: 0.9rem;
		color: #2B333B;
	}
	
	.answer{
		overflow: hidden;
		width: 100%;
		height: auto;
		font-size: 0.5rem;
		color: #71777D;
		padding-top: 8%;
		padding-bottom: 5%;
	}
	.answ a{
		display: block;
		float: left;
		padding: 2% 3%;
		text-align: center;
		border: 1px solid gainsboro;
		border-radius: 0.3rem;
		color: #71777D;
	}
	.see1{
		float: left;
		margin-left: 3%;
		padding: 2% 3%;
		text-align: center;
		border: 1px solid gainsboro;
		border-radius: 0.3rem;
		display: block;
	}
	.see2{
		float: left;
		margin-left: 3%;
		padding: 2% 3%;
		text-align: center;
		border: 1px solid gainsboro;
		border-radius: 0.3rem;
		color: red;
		display: none;
	}
</style>