<template>
	<div>
	<section id="wendabox">
		<ul class="wendatuijian">
			<li class="l wendatuijianli">推荐分类</li>
			<li class="r wendatuijianli">
				<router-link to="/alltype">
					全部分类>
				</router-link>	
			</li>
		</ul>
		<ul class="wendatuijianul">
			<li class="l wendatuijiantype">Html5</li>
			<li class="l wendatuijiantype">AngalurJS</li>
			<li class="l wendatuijiantype">CSS3</li>
			<li class="l wendatuijiantype">Sass/Less</li>
		</ul>
		<ul class="wendatuijianul">
			<li class="l wendatuijiantype">JAVA</li>
			<li class="l wendatuijiantype">Python</li>
			<li class="l wendatuijiantype">Go</li>
			<li class="l wendatuijiantype">C++/Less</li>
		</ul>
		
		<p class="line"></p>
		
		<ul class="daul">
			<li class="l dali">
				<a @click="show='recommend'" :class="{active:show=='recommend'}">推荐</a>
			</li>
			<li class="l dali">
				<a @click="show='New'" :class="{active:show=='New'}">最新</a>
			</li>
			<li class="l dali">
				<a @click="show='reply'" :class="{active:show=='reply'}">待回复</a>
			</li>
			<li class="l dali">
				<a @click="show='topic'" :class="{active:show=='topic'}">话题</a>
			</li>
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
	import recommend from '../wenda/recommend.vue'
	import New from '../wenda/new.vue'
	import reply from '../wenda/reply.vue'
	import topic from '../wenda/topic.vue'
	export default{
		data(){
			return{
				show:'recommend',
				i:0
			}
		},
		components:{
			recommend,
			New,
			reply,
			topic,
		},
		mounted(){
	    	// 监听（绑定）滚轮 滚动事件
		    window.onscroll=this.handleScroll;
	   },
	   methods:{
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
	    }
	}
</script>

<style scoped="scoped">
	#wendabox{
		overflow: hidden;
		width: 100%;
		height: auto;
	}
	.wendatuijian{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 5% 5% 2% 5%;
		box-sizing: border-box;
		margin-top: 6rem;
	}
	.wendatuijianli{
		height: auto;
		line-height: 2rem;
	}
	.wendatuijianli:nth-of-type(2) a{
		font-size: 0.8rem;
		color: gray;
		cursor: pointer;
	}
	
	.wendatuijianul{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 1% 5% 2% 3%;
		box-sizing: border-box;
	}
	.wendatuijiantype{
		text-align: center;
		width: 23%;
		line-height: 2rem;
		border: 1px solid gainsboro;
		box-sizing: border-box;
		margin-left: 2%;
		border-radius:0.2rem ;
		font-size: 0.5rem;
		color: gray;
		cursor: pointer;
	}
	.line{
		width: 100%;
		height: 8px;
		margin: 5% 0;
		background: #f3f5f7;
	}
	/*回复的样式*/
	.daul{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 0 4% 3% 4%;
		box-sizing: border-box;
		border-bottom: 1px solid gainsboro;
	}
	.dali{
		width: 25%;
		height: auto;
		text-align: center;
		
	}
	.active{
		color: red;
		border-bottom: 1px solid red;
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