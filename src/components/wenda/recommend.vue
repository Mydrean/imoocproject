<template>
	<section id="recommend">
		<div class="recommendbox" v-for="(item,index) in recommend">
			<div class="remlf l">
				<img :src="item.src" />
			</div>
			<div class="remrt l">
				<p class="remtxt">
					<span class="remrttit">{{item.type}}</span>
					<span class="remrtre">{{item.answernum}}</span>
				</p>
				<p class="quesion">
					{{item.quesion}}
				</p>
				<p class="result">{{item.result}}</p>
				<p class="answer">								
					{{item.answer}}
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
				recommend:[]
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/recommend.json')
			.then(function(res){
				_this.recommend=res.data.recommend
				
			})
			.catch(()=>{
		    	
		  	})
		  	.then((f)=>{
		    
		  	});  
		}
	}
</script>

<style scoped="scoped">
	#recommend{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding-top: 4%;
	}
	.recommendbox{
		width: 100%;
		height: auto;
		padding-left: 2%;
		padding-right: 3%;
		padding-bottom: 5%;
		box-sizing: border-box;
	}
	.remlf{
		width: 20%;
		height: auto;
		box-sizing: border-box;
		text-align: center;
	}
	.remlf img{
		width: 60%;
		height: auto;
		border-radius:0.2rem ;
	}
	.remrt{
		width: 80%;
		height: auto;
		padding-right: 3%;
		box-sizing: border-box;
		
	}
	.remtxt{
		margin-top: -2%;
	}
	.remrttit{
		font-size: 0.5rem;
		color: gray;
	}
	.remrtre{
		padding-left: 3%;
		font-size: 0.5rem;
		color: gray;
	}
	.quesion{
		font-size: 0.8rem;
		color: #2B333B;
	}
	.result{
		font-size: 0.8rem;
		color: #B7BBBF;
		padding-top: 5%;
		
	}
	.answer{
		font-size: 0.5rem;
		color: #71777D;
		padding-top: 5%;
		padding-bottom: 5%;
		/*以下代码是超出字隐藏，有省略号出现*/
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		word-wrap: break-word;
	}
</style>