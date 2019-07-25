<template>
	<section id="ireply">
		<ul class="ireplyul">
			<li class="ireplyli l" @click="iback()">
				<i class="iconfont icon-xiangzuo"></i>
				我要回答
			</li>
			<li class="ireplyli r"><i class="iconfont icon-xiangqing1"></i></li>
		</ul>
		<div class="iline"></div>
		<textarea v-model= "msg" style="border: none;width: 100%;resize: none; height: 18rem; font-size: 1rem;padding: 3%;" name="" id="txt"  maxlength="20000" placeholder="写下你的回答"></textarea>
		<button id="btn">确定</button>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				msg:''
			}
		},
		methods:{
			iback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	#ireply{
		overflow: hidden;
		width: 100%;
		height: auto;
		background: #f4f4f4;
	}
	.ireplyul{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 3%;
		box-sizing: border-box;
		background: #fff;
	}
	.ireplyli{
		text-align: center;
		padding: 3%;
	}
	.iline{
		width: 100%;
		height: 5px;
		background: #f4f4f4;
	}
	textarea:hover{
		color: #222;
	}
	#btn{
		width: 70%;
		height: auto;
		padding: 3%;
		margin: 10% 15% 53% 15%;
		border: none;
		background: #14b4ff;
		color: white;
		font-size: 1.1rem;
		border-radius: 0.2rem;
	}
</style>