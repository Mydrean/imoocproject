<template>
	<section id="new">
		<div class="newbox" v-for="(item,index) in news">
			<div class="newlf l">
				<img :src="item.src" />
			</div>
			<div class="newrt l">
				<p class="newtxt">
					<span class="newrttit">{{item.type}}</span>
					<span class="newrtre">{{item.answernum}}</span>
				</p>
				<router-link to="/quesiondet">
					<p class="quesion">
						{{item.quesion}}
					</p>
				</router-link>
				<p class="answer">
					<router-link to="/ireply">
						<span class="answ"><i class="iconfont icon-jiahao"></i>我要回答</span>
					</router-link>
					<span id="see1" class="see1" @click="see1btn(index)"><i class="iconfont icon-xingxing1"></i>关注</span>
					<span id="see2" class="see2" @click="see2btn(index)"><i class="iconfont icon-xingxing1"></i>已关注</span>
				</p>
			</div>
			<hr style="background: gainsboro;" />
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				news:[]
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/new.json')
			.then(function(res){
				_this.news=res.data.news
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
	#new{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding-top: 4%;
	}
	.newbox{
		width: 100%;
		height: auto;
		padding-left: 2%;
		padding-right: 3%;
		padding-bottom: 5%;
		box-sizing: border-box;
	}
	.newlf{
		width: 20%;
		height: auto;
		box-sizing: border-box;
		text-align: center;
	}
	.newlf img{
		width: 60%;
		height: auto;
		border-radius:0.2rem ;
	}
	.newrt{
		width: 80%;
		height: auto;
		padding-right: 3%;
		box-sizing: border-box;
		
	}
	.newtxt{
		margin-top: -2%;
	}
	.newrttit{
		font-size: 0.5rem;
		color: gray;
	}
	.newrtre{
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
	.answer a{
		color: #71777D;
	}
	.answ{
		display: block;
		float: left;
		padding: 2% 3%;
		text-align: center;
		border: 1px solid gainsboro;
		border-radius: 0.3rem;
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