<template>
	<section id="topic">
		<div class="topicbox" v-for="(item,index) in topic">
			<p class="topiclf l">
				<img :src="item.src" />
			</p>
			<div class="topicrt r">
				<p class="topictit">{{item.tit}}</p>
				<p class="topictxt">{{item.txt}}</p>
				<p class="topicnum">{{item.num}}</p>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				topic:[]
			}
		},
		mounted(){
			var _this=this;
			_this.$http.get('./data/new.json')
			.then(function(res){
				_this.topic=res.data.topic
			})
			.catch(()=>{
				
			})
			.then((f)=>{
				
			});
		}
	}
</script>

<style scoped="scoped">
	#topic{
		overflow: hidden;
		width: 100%;
		height: auto;
	}
	.topicbox{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 3% 5% 2% 5%;
		box-sizing: border-box;
	}
	.topiclf{
		width: 30%;
		height: auto;
	}
	.topiclf img{
		width: 100%;
		border-radius: 0.2rem;
	}
	.topicrt{
		width: 70%;
		height: auto;
		padding-left: 2%;
		box-sizing: border-box;
		
	}
	.topictit{
		font-size: 0.9rem;
	}
	.topictxt{
		padding-top: 2%;
		font-size: 0.5rem;
		color: gray;
		/*以下代码是超出字隐藏，有省略号出现*/
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		word-wrap: break-word;
	}
	.topicnum{
		color: gray;
		font-size: 0.4rem;
		padding-top: 3%;
	}
</style>