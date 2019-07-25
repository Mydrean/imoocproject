<template>
	<div id="articlebox" style="overflow: hidden;">
		<mt-swipe :auto="4000">
		  <mt-swipe-item>
		  	<img src="../../assets/images/indeximg/indexlunbo6.jpg" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/indeximg/indexlunbo5.png" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/indeximg/indexlunbo4.jpg" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/indeximg/indexlunbo3.png" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/indeximg/indexlunbo2.png" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/indeximg/indexlunbo1.jpg" />
		  </mt-swipe-item>
		</mt-swipe>
		
		<div class="artul">
			<swiper :options="swiperOption">
		        <swiper-slide>推荐</swiper-slide>
		        <swiper-slide>资讯</swiper-slide>
		        <swiper-slide>新文章</swiper-slide>
		        <swiper-slide>区块链</swiper-slide>
		        <swiper-slide>云计算</swiper-slide>
		        <swiper-slide>大数据</swiper-slide>
		        <swiper-slide>前端</swiper-slide>
		        <swiper-slide>后端</swiper-slide>
		        <swiper-slide>互联网</swiper-slide>
		        <swiper-slide>资源</swiper-slide>
		        <swiper-slide>职场</swiper-slide>
		        <swiper-slide>段子</swiper-slide>
		        <swiper-slide>其他</swiper-slide>
		      </swiper>
		      <hr />
		</div>
		
		<aside class="artdet">
			<div v-for="(item,index) in article" style="padding-bottom: 5%;">
				<div class="artlf l">
					<p>{{item.artcourse}}</p>
					<p class="arthang">
						<span>{{item.name}}</span>
						|
						<span>{{item.job}}</span>
					</p>
					<p class="arthang">
						<span class="nowprice">{{item.nowprice}}</span>
						<span class="lastprice other">{{item.lastprice}}</span>
						<span class="other">{{item.class}}</span>
					</p>
				</div>
				<p class="artrt l">
					<img :src="item.src" />
				</p>
				
				<hr />
			</div>
		</aside>
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
	</div>
	
</template>

<script>
	export default {
	    data() {
	      return {
	      	article:[],
	      	i:0,
	        swiperOption: {
	          slidesPerView: 4,
	          spaceBetween: 30,
	          freeMode: true,
	          pagination: {
	            el: '.swiper-pagination',
	            clickable: true
	          }
	        }
	      }
	    },
	    mounted(){
				var _this=this;
				this.$http.get('./data/article.json')
				.then(function(res){
					_this.article=res.data.article
					
				})
				.catch(()=>{
			    	
			  	})
			  	.then((f)=>{
			    
			  	});
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
<style>
	#articlebox{
		width: 100%;
		padding-bottom: 3rem;
		max-width: 750px;
		
	}
	#articlebox .mint-swipe{
		overflow: hidden;
		margin-left: 0.8rem;
		margin-right: 0.8rem;
	}
	#articlebox .mint-swipe-items-wrap{
		margin-top: 7.5rem;
		padding-bottom: 41%;
		height: auto;
		width:100%;
		
	}
	#articlebox .mint-swipe-items-wrap img{
		width: 100%;
		height: 100%;
	}
	#articlebox .is-active{
		background: white;
		opacity: 1;
	}
</style>
<style  scoped="scoped">
	.artul{
		clear: both;
		width: 100%;
		height: 50px;
		padding: 2% 0;
	}
	.swiper-container{
		line-height: 45px;
		width: 300px;
		height: 45px!important;
	}
	.artdet{
		width: 100%;
		height: auto;
		padding: 3% 5%;
		box-sizing: border-box;
		
	}
	.artlf{
		width: 75%;
		
	}
	.artrt{
		width: 25%;
		height: auto;
		padding-bottom: 4%;
	}
	.artrt img{
		width: 100%;
		height: 90px;
		border-radius: 0.5rem;
		
	}
	.arthang{
		padding-top: 5%;
		font-size: 0.8rem;
	}
	
	.nowprice{
		color: blueviolet;
	}
	.lastprice{
		text-decoration: line-through;
	}
	.other{
		padding-left: 2%;
		color: gray;
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