<template>
	<div>
		<section id="crouse">
			<ul class="crouseul" id="crouseul">
				<li class="l ctype">
					<a @click="show='allcourse'" :class="{active:show=='allcourse'}">全部</a>
				</li>
				<li class="l ctype">
					<a @click="show='fontEndDevelopment'" :class="{active:show=='fontEndDevelopment'}">前端开发</a>
				</li>
				<li class="l ctype">
					<a @click="show='backStageDevelopment'" :class="{active:show=='backStageDevelopment'}">后端开发</a>
				</li>
				<li class="l ctype">
					<a @click="show='mobileDevelopment'" :class="{active:show=='mobileDevelopment'}">移动开发</a>
				</li>
				<li class="l ctype">
					<a @click="show='screen'">
					<i class="iconfont icon-shaixuan"></i>
					筛选
					</a>
				</li>
				<br /><br />
				<hr />
				<hr style="position:absolute;width: 40%;background: red;margin-top: -0.15rem;" />
			</ul>
			
			<!--底部的广告-->
			<ul id="footbox1" class="footbox">
				<li class="l footli" style="padding-left:4% ;">
					<span  class="iconfont icon-quxiao1" @click="quxiao()"></span>
				</li>
				<li class="l footli" style="padding-left:4% ;">
					<p class="foottu">
						<img src="../../assets/images/practiceimg/logo-small@2x.png" />
					</p>
				</li>
				<li class="l footli">
					<span class="apptxt">慕课网APP</span>
				</li>
				<li class="l footli">
					<span class="prcfoottxt">随时随地学习</span>
				</li>
			</ul>
		</section>
		<component :is="show"></component>
	</div>
</template>

<script>
	import allcourse from '../course/allcourse.vue'
	import fontEndDevelopment from '../course/fontEndDevelopment.vue'
	import backStageDevelopment from '../course/backStageDevelopment.vue'
	import mobileDevelopment from '../course/mobileDevelopment.vue'
	import Screen from '../course/screen.vue'
	export default{
		data(){
			return{
				show:'allcourse',
				i:0,
				showSlide:false
			}
		},
	    methods:{
	    	scree(){
	    		screebtn.style.display='block'
	    	},
	    	handleScroll(){
	    		// 页面滚动距顶部距离
	    		var ofootbox =document.getElementById('footbox1')
	    		var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
	    			document.body.scrollTop
	    			var scroll = scrollTop - this.i;
	    			this.i = scrollTop;
	    			if(scroll<0){
						ofootbox.style.display='block'
	    			}else{
	    				ofootbox.style.display='none'
	    			}
	    	},
	    	quxiao(){
	    		var ofootbox =document.getElementById('footbox1')
	    		ofootbox.style.display='none'
	    	}
	    	
	    	
	    },
		components:{
			allcourse,
			fontEndDevelopment,
			backStageDevelopment,
			mobileDevelopment,
			Screen,
		},
		mounted(){
	    	// 监听（绑定）滚轮 滚动事件
	    	window.onscroll=this.handleScroll;
	   	}
	}
</script>

<style scoped="scoped">
	#crouse{
		margin: 0 auto;
		width: 100%;
		height: auto;
		max-width: 750px;
	}
	.crouseul{
		width: 100%;
		height: auto;
		text-align: center;
		padding-top: 7rem;
		padding-left: 2%;
		padding-right: 2%;
		box-sizing: border-box;
		display:table;
		overflow:hidden;
	}
	.ctype{
		margin-left: 2%;
		background: #f3f5f7;
		line-height: 2rem;
		text-align: center;
		font-size: 0.7rem;
		color: gray;
		padding-left: 3%;
		padding-right: 3%;
		border-radius: 1rem;
		cursor: pointer;
		vertical-align:middle;
		display:table-cell;
	}
	.ctype a{
		color: gray;
	}
	.ctype a:hover{
		text-decoration: none;
		border-radius: 1rem;
	}
	.active{
		color: red;
		font-weight: bold;
	}
	/*底部那个广告*/
	#footbox1{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0;
		background: white;
		text-align: center;
	}
	.footli{
		width: auto;
		padding: 3% 0;
		line-height: 2rem;
	}
	.icon-quxiao1{
		font-size: 1.5rem;
	}
	.foottu{
		width: 35%;
		height: 35%;
	}
	.foottu img{
		width: 100%;
		margin-left: 3%;
	}
	.apptxt{
		padding-top: 4%;
		font-size: 1rem;
		
	}
</style>