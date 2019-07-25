<template>
	<section id="quesiondet">
		<ul class="quesiondetul">
			<li class="quesiondetli l" @click="qback()">
				<i class="iconfont icon-xiangzuo"></i>
				详细问题
			</li>
			<li class="quesiondetli r"><i class="iconfont icon-xiangqing1"></i></li>
		</ul>
		<div class="iline"></div>
		<div class="ques">
			<span class="quetit">问题：</span>
			世界上最好的语言有哪些？
		</div>
		<p class="quereply">回复：</p>
		<textarea v-model="msg" class="kk" placeholder="写下你的回复"></textarea>
		<button @click="add()">确定</button>
		<ul class="replydet" v-for="(item,index) in allreplys">
			<li class="replydetli" >
				<span>{{item.aa}}楼:</span>
				<span>{{item.contents}}</span>
				<p>
					<span class="time">{{item.times}}</span>
					<span class="good r" @click="change(index)">
						<i class="iconfont icon-dianzan"></i>
					</span>
				</p>
			</li>
			
		</ul>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				num:0,
				msg:'',
				aa:4,
				allreplys:
				[
				{
					aa:"3",
					contents:"肯定是javascript啦！！！",
					times:"2019-7-1 15:12:24"
				},
				{
					aa:"2",
					contents:"肯定是java啦！！！",
					times:"2019-7-1 15:12:24"
				},
				{
					aa:"1",
					contents:"肯定是php啦！！！",
					times:"2019-7-1 15:12:24"
				}
				]
			}
		},
		methods:{
			qback(){
				this.$router.go(-1)
			},
			add(){
				var date=new Date();
				//判断输入的内容不能为空 
				if(this.msg!=""){
					this.allreplys.unshift({
						contents:this.msg,
						times:date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate()+1)+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds(),
						aa:this.aa++,
					});
				}else{
					alert("回复的内容不能为空！！！")
					return;
				}
				//清空内容
				this.msg='';
			},
			change(a){
				var ogood=document.getElementsByClassName('good');
				
				if(this.num ==1){
					ogood[a].style.color="red";
					this.num =0
				}else{
					ogood[a].style.color="";
					this.num =1
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#quesiondet{
		overflow: hidden;
		width: 100%;
		height: auto;
		
	}
	.quesiondetul{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 3%;
		box-sizing: border-box;
		background: #fff;
	}
	.quesiondetli{
		text-align: center;
		padding: 3%;
	}
	.iline{
		width: 100%;
		height: 5px;
		background: #f4f4f4;
	}
	.ques{
		margin: 5%;
	}
	.quetit{
		font-size: 1.2rem;
	}
	.quereply{
		margin: 5%;
		font-size: 1.2rem;
	}
	
	.kk{
		overflow: hidden;
		padding: 3%;
		width: 80%;
		height: 80px;
		margin-left:5%;
		box-sizing: border-box;
		font-size: 1rem;
		border: 1px solid gainsboro;
	}
	.kk:focus{
		outline: none;
	}
	
	.replydet{
		margin: 5%;
	}
	.replydetli{
		font-size: 1rem;
		padding-bottom: 3%;
	}
	.time{
		color: gainsboro;
		padding-left: 10%;
	}
</style>