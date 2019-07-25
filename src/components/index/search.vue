<template>
	<main class="smain">
		<mt-search v-model="value"></mt-search>
		<p class="back" @click="back()">取消</p>
		<!--<br />-->
		<hr style="clear: both; border: 0.04rem solid gainsboro;margin-bottom: 1rem;" />
		<div class="history">
			<span class="histxt">搜索历史</span>
			<ul class="searchtxt">
				<li class="stype"><span class="txtbt">html</span></li>
				<li class="stype"><span class="txtbt">css</span></li>
				<li class="stype"><span class="txtbt">ajax</span></li>
				<li class="stype"><span class="txtbt">小程序</span></li>
				<li class="stype"><span class="txtbt">Vue</span></li>
			</ul>
		</div>
		<div class="hot">
			<span class="histxt">热门搜索</span>
			<ul class="searchtxt">
				<li class="stype"><span class="txtbt">java</span></li>
				<li class="stype"><span class="txtbt">python</span></li>
				<li class="stype"><span class="txtbt">spring</span></li>
				<li class="stype"><span class="txtbt">react</span></li>
				<li class="stype"><span class="txtbt">linux</span></li>
			</ul>
			<ul class="searchtxt">
				<li class="stype"><span class="txtbt">mysql</span></li>
				<li class="stype"><span class="txtbt">大数据</span></li>
				<li class="stype"><span class="txtbt">机器人</span></li>
				<li class="stype"><span class="txtbt">node.js</span></li>
				<li class="stype"><span class="txtbt">docker</span></li>
			</ul>
		</div>
		<div class="classify">
			<span class="classifytxt">
				查看课程分类
			</span>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				value:''
			}
		},
		methods:{
			
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.smain{
		width: 100%;
	}
	.mint-search{
		float: left;
		width: 75%;
		background: white;
		padding:5%;
		height: auto;
	}
	.mint-searchbar{
		padding: 0;
		background-color: white;
		border: 0.1rem solid #F3F5F7;
		border-radius: 0.5rem;
	}
	.mint-searchbar-inner .mintui-search{
		font-size: 1.5rem;
	}
	.mint-searchbar-core{
		font-size: 1.2rem;
	}
	.mint-searchbar-cancel{
		display: none;
	}
	.back{
		float: left;
		padding-top:7%;
		font-size: 1.1rem;
		color: gray;
	}
	.history{
		width: 100%;
		height: auto;
	}
	.histxt{
		padding: 5%;
		font-size: 1rem;
	}
	.searchtxt{
		overflow: hidden;
	}
	.stype{
		float: left;
		margin-top: 1rem;
		margin-left: 4%;
		background: #f3f5f7;
		line-height: 2rem;
		text-align: center;
		font-size: 0.5rem;
		color: gray;
		border-radius: 0.2rem;
		cursor: pointer;
	}
	.txtbt{
		padding: 0.8rem;
	}
	.hot{
		overflow: hidden;
		width: 100%;
		height: auto;
		margin-top: 1rem;
	}
	.classify{
		width: 50%;
		height: auto;
		margin: 5% auto;
		text-align: center;
		line-height: 2.5rem;
		border: 1px solid gainsboro;
		border-radius: 2rem;
		cursor: pointer;
		font-size: 0.9rem;
	}
</style>
