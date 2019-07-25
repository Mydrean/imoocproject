<template>
	<!--轮播图-->
	<div id="play" style="overflow: hidden;">
		<mt-swipe :auto="4000">
		  <mt-swipe-item>
		  	<img src="../../assets/images/practiceimg/practicelunbo1.jpg" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/practiceimg/practicelunbo2.jpg" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/practiceimg/practicelunbo3.jpg" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/practiceimg/practicelunbo1.jpg" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/practiceimg/practicelunbo2.jpg" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/practiceimg/practicelunbo3.jpg" />
		  </mt-swipe-item>
		</mt-swipe>
		
		<div class="practicenav">
	      <swiper :options="swiperOption">
	        <swiper-slide v-for="(item,index) in classnamelist">
	        	<ul >
					<li class="pracli l">
						<p class="pracclass">{{item.classname1}}</p>
						<p class="prach">{{item.classhours1}}</p>
					</li>
					<li class="pracli l">
						<p class="pracclass">{{item.classname2}}</p>
						<p class="prach">{{item.classhours2}}</p>
					</li>
					<li class="pracli l">
						<p class="pracclass">{{item.classname3}}</p>
						<p class="prach">{{item.classhours3}}</p>
					</li>
				</ul>
	        </swiper-slide>
	        <div class="swiper-scrollbar" slot="scrollbar"></div>
	      </swiper>
		</div>
		
		<!--数据加载-->
		<ul id="pracbox" v-for="(item,index) in practicelist">
			<li>
			<p class="practu">
				<img :src="item.src" />
			</p>
			<p class="practxt">
				<span class="item-name">
					{{item.itemname}}
				</span>
				<span class="item-level">{{item.itemlevel}}</span>
				<span class="dot">·</span>
				<span class="geren">
					<img src="../../assets/images/iconpng/gerenzhongxin.png" />
				</span>
				<span class="item-level num">{{item.num}}</span>
			</p>
			<p class="priceprac">
				<span class="pricenum">{{item.pricenum}}</span>
			</p>
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
			
			
		
	</div>
</template>

<style>
	#play{
		width: 100%;
		padding-bottom: 3rem;
		max-width: 750px;
	}
	#play .mint-swipe{
		margin-left: .8rem;
		margin-right: 0.8rem;
	}
	#play .mint-swipe-items-wrap{
		margin-top: 7.5rem;
		padding-bottom: 41%;
		border-radius: 1rem;
		height: auto;
		width:100%;
	}
	#play .mint-swipe-items-wrap img{
		width: 100%;
		height: 100%;
	}
    
	#play .is-active{
		background: white;
		opacity: 1;
	}
</style>

<style scoped="scoped">
	body,html{
		max-width: 750px;
	}
	.swiper-slide {
	    width: 100%;
	}
	.swiper-container-horizontal > .swiper-scrollbar {
		width: 95%!important;
		bottom: -4px!important;
	}
	
	.practicenav{
		overflow: hidden;
		width: 100%;
		height: auto;
		margin: 2% 1%;
		text-align: center;
		
	}
	.pracli{
		text-align: center;
		margin-left:1%;
		padding: 2% 7%;
		background: #fbf3e6;
		border-radius: 0.5rem;
	}
	.pracclass{
		font-size: 1rem;
		color: #dfaa44;
	}
	.prach{
		font-size: 0.5rem;
		color: gray;
	}
	
	/*数据加载*/
	#pracbox{
		overflow: hidden;
		width: 100%;
		height: auto;
		margin-top: 5%;
		padding-left: 3%;
		padding-right: 3%;
	}
	.practu{
		float: left;
		width: 26%;
		height: 4rem;
		background: yellow;
		border-radius: 0.5rem;
	}
	.practu img{
		width: 100%;
		height: 100%;
		border-radius: 0.5rem;
	}
	.practxt{
		float: left;
		width: 42%;
		height: auto;
		padding-left: 3%;
	}
	.practxt .item-name{
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.4rem;
		color: #2B333B;
		/*以下代码是超出字隐藏，有省略号出现*/
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		word-wrap: break-word;
	}
	.item-level{
		font-size: 0.8rem;
		color: gray;
	}
	.dot{
		font-size: 0.05rem;
		color: grey;
		font-weight: bold;
		margin-left: 1%;
	}
	.practxt .geren{
		position: relative;
	}
	.practxt .geren img{
		position: absolute;
		padding-left: 1%;
		padding-top: 0.25rem;
		width: 1rem;
	}
	.practxt .num{
		padding-left: 15%;
	}
	.priceprac{
		overflow: hidden;
		float: right;
		width: 20%;
		background: rgba(43,51,59,.06);
		line-height: 2.4rem;
		text-align: center;
		margin-right:7%;
		margin-top: 2%;
		border-radius: 2rem;
	}
	.pricenum{
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

<script>
	export default {
	    data() {
	      return {
	      	practicelist:[],
	      	classnamelist:[],
	        swiperOption: {
	          scrollbar: {
	            el: '.swiper-scrollbar',
	            hide: true
	          }
	        },
	        i:0
	      }
	    },
	    mounted(){
	    	var _this=this;
			this.$http.get('./data/index.json')
			.then(function(res){
				_this.practicelist=res.data.practicelist
				_this.classnamelist=res.data.classnamelist
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
	    	},
	    }
	} 

</script>
