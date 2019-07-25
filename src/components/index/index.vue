<template>
	<!--轮播图-->
	<div id="play">
		<mt-swipe :auto="4000">
		  	<mt-swipe-item>
		  		<img src="../../assets/images/indeximg/indexlunbo1.jpg" />
		  	</mt-swipe-item>
		  	<mt-swipe-item>
		  		<img src="../../assets/images/indeximg/indexlunbo2.png" />
		  	</mt-swipe-item>
		  	<mt-swipe-item>
		  		<img src="../../assets/images/indeximg/indexlunbo3.png" />
		  	</mt-swipe-item>
		  	<mt-swipe-item>
		  		<img src="../../assets/images/indeximg/indexlunbo4.jpg" />
		  	</mt-swipe-item>
		  	<mt-swipe-item>
		  		<img src="../../assets/images/indeximg/indexlunbo5.png" />
		  	</mt-swipe-item>
		  	<mt-swipe-item>
		  		<img src="../../assets/images/indeximg/indexlunbo6.jpg" />
		  	</mt-swipe-item>
		</mt-swipe>
		
		<!--实战推荐-->
		<section id="border-top">
			<p class="tit bg1 l">
				<span class="tit-name">实战推荐</span>
			</p>
			<p class="r">
				<router-link to="/practice">
					查看更多  >>
				</router-link>
			</p>
			
			<div id="pracbox" v-for="(item,index) in pracboxlist">
				<router-link to="/details">
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
					<p class="price">
						<span class="pricenum">{{item.pricenum}}</span>
					</p>
					</router-link>
			</div>
			
		</section>
		
		<div id="more">
			<router-link to="/practice">查看更多</router-link>
		</div>
		<!--就业班-->
		<section id="border-top2">
			<p class="tit bg2">
				<span class="tit-name">就业班</span>
				<span class="class-desc">快速迈入互联网行业，轻松挑战 40W 年薪</span>
			</p>
			<p class="classtu classtu1 l"></p>
			<p class="classtu classtu2 l"></p>
			<p class="classtu classtu3 l"></p>
			<p class="classtu classtu4 l"></p>
		</section>
		
		<!--新上好课-->
		<section id="border-top2"  style="padding-bottom: 2rem;">
			<p class="tit bg2">
				<span class="tit-name">新上好课</span>
			</p>
			<div id="pracbox" v-for="(item,index) in newclass">
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
				<p class="price" style="margin-top: 0.1rem;">
					<span class="pricenum">{{item.pricenum}}</span>
				</p>
				<p class="youhui">限时优惠</p>
			</div>
		</section>
		
		<!--精英讲师-->
		<section id="border-top2">
			<p class="tit bg2">
				<span class="tit-name">精英讲师</span>
			</p>
			<swiper :options="swiperOption">
	        <swiper-slide>
	        	<div class="teacher">
					<p class="teachertu">
						<img src="../../../data/images/teachertu1.jpg"/>
					</p>
					<p class="teachername">编程浪子</p>
					<p class="teacherjob">PHP开发工程师</p>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="teacher teacher2">
					<p class="teachertu">
						<img src="../../../data/images/teachertu2.jpg" />
					</p>
					<p class="teachername">城南大师兄</p>
					<p class="teacherjob">JAVA开发工程师</p>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="teacher teacher3">
					<p class="teachertu">
						<img src="../../../data/images/teachertu3.jpg" />
					</p>
					<p class="teachername">城下秋草</p>
					<p class="teacherjob">软件测试工程师</p>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="teacher">
					<p class="teachertu">
						<img src="../../../data/images/teachertu4.jpg" />
					</p>
					<p class="teachername">编程浪子</p>
					<p class="teacherjob">PHP开发工程师</p>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="teacher">
					<p class="teachertu">
						<img src="../../../data/images/teachertu5.jpg" />
					</p>
					<p class="teachername">编程浪子</p>
					<p class="teacherjob">PHP开发工程师</p>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="teacher">
					<p class="teachertu">
						<img src="../../../data/images/teachertu6.jpg" />
					</p>
					<p class="teachername">编程浪子</p>
					<p class="teacherjob">PHP开发工程师</p>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="teacher teacher2">
					<p class="teachertu">
						<img src="../../../data/images/teachertu7.jpg" />
					</p>
					<p class="teachername">城南大师兄</p>
					<p class="teacherjob">JAVA开发工程师</p>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="teacher teacher3">
					<p class="teachertu">
						<img src="../../../data/images/teachertu8.jpg" />
					</p>
					<p class="teachername">城下秋草</p>
					<p class="teacherjob">软件测试工程师</p>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="teacher teacher2">
					<p class="teachertu">
						<img src="../../../data/images/teachertu9.jpg" />
					</p>
					<p class="teachername">城南大师兄</p>
					<p class="teacherjob">JAVA开发工程师</p>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="teacher teacher3">
					<p class="teachertu">
						<img src="../../../data/images/teachertu10.jpg" />
					</p>
					<p class="teachername">城下秋草</p>
					<p class="teacherjob">软件测试工程师</p>
				</div>
	        </swiper-slide>
	        <div class="swiper-pagination" slot="pagination"></div>
	      </swiper>
			
			<div class="teabox2">
				<div id="pracbox" v-for="(item,index) in teacherclass">
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
					<p class="price">
						<span class="pricenum">{{item.pricenum}}</span>
					</p>
				</div>
				
				<p class="foottxt">没有更多内容了</p>
			</div>
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
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pracboxlist:[],
				newclass:[],
				teacherclass:[],
				i:0,
				swiperOption: {
		          slidesPerView: 3,
		          spaceBetween: 30,
		          pagination: {
		            el: '.swiper-pagination',
		            clickable: true
		          }
		        }
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/index.json')
			.then(function(res){
				_this.pracboxlist=res.data.pracboxlist
				_this.newclass=res.data.newclass
				_this.teacherclass=res.data.teacherclass
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
<style>
	body,html{
		margin: 0 auto;
		max-width: 750px;
		font-size: 16px;
	}
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
	/*轮播的样式*/
	.swiper-pagination{
		display: none;
	}
	
	.teacher{
		width: 100%;
	}
	.teachertu{
		padding: 1rem 1rem 0 1rem;
	}
	.teachertu img{
		border-radius: 50%;
		width: 100%;
	}
	.teachername{
		font-size: 1rem;
		text-align: center;
	}
	.teacherjob{
		color: gray;
		font-size: 0.7rem;
		padding-bottom: 1rem;
		text-align: center;
	}
	.teabox2{
		clear: both;
		width: 100%;
		height: auto;
	}
</style>
<style scoped="scoped">
	/*实战推荐的样式*/
	#border-top{
		overflow: hidden;
		width: 100%;
		margin-top: 0.5rem;
		border-top: 0 solid #F8FAFC;
    	border-width: .5rem;
    	height: auto;
    	box-sizing: border-box;
	}
	#border-top .bg1{
		background-image:url(../../assets/images/indeximg/title-bg-1.png) ;
	}
	#border-top .tit,#border-top2 .tit{
		padding-top: 1.5rem;
	    padding-bottom: 0.5rem;
	    padding-left: 1.4rem;
	    padding-right: 0.4rem;
	    box-sizing: border-box;
	    background-position-x: 0.32rem;
	    background-position-y: 0.32rem;
	    background-repeat: no-repeat;
	    background-size: 6rem;
	    line-height: .6rem;
	}
	#border-top .tit-name,#border-top2 .tit-name{
		font-weight: 500;
		font-size: 1.25rem;
	}
	#border-top .r{
		padding-top: 1.2rem;
		padding-right: 5%;
	}
	#border-top .r a{
		text-decoration: none;
		color: #B7BBBF;
		font-size: 0.8rem;
	}
	
	/*实战的内容*/
	#pracbox{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 2% 3%;
		box-sizing: border-box;
	}
	
	.practu{
		float: left;
		width: 25%;
		height: 4rem;
		border-radius: 0.5rem;
	}
	.practu img{
		width: 100%;
		height: 100%;
		border-radius: 0.5rem;
	}
	.practxt{
		overflow: hidden;
		float: left;
		width: 45%;
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
		font-weight: bold;
		color: grey;
		margin-left: 1%;
		font-size: 0.05rem;
	}
	.practxt .geren{
		position: relative;
	}
	.practxt .geren img{
		position: absolute;
		padding-left: 1%;
		padding-top: 2%;
		width: 1rem;
	}
	.practxt .num{
		padding-left: 15%;
	}
	.price{
		float: right;
		width: 20%;
		background: rgba(43,51,59,.06);
		line-height: 2.4rem;
		text-align: center;
		margin-right:3%;
		margin-top: 3%;
		border-radius: 2rem;
	}
	.pricenum{
		color: gray;
	}
	
	#more{
		width: 100%;
		height: auto;
		margin: 2rem auto;
		float: left;
		text-align: center;
		
	}
	#more a{
		text-decoration: none;
	}
	
	/*就业班*/
	#border-top2{
		overflow: hidden;
		width: 100%;
		float: left;
		border-top: 0 solid #F8FAFC;
    	border-width: .5rem;
	}
	#border-top2 .bg2{
		background-image:url(../../assets/images/indeximg/title-bg-1.png) ;
	}
	.class-desc{
		margin-left: 0.8rem;
		font-size: .8rem;
		color: gray;
	}
	.classtu{
		width: 44%;
		height: 100px;
		background: white;
		margin: 2% 0;
		margin-left: 4%;
		border-radius: 2%;
		background-position: center;
	    background-repeat: no-repeat;
	    background-size: cover;
	}
	.classtu1{
		clear: both;
		background-size: 100% 100%;
		background-image: url(../../assets/images/indeximg/indexclass1.png);
	}
	.classtu2{
		background-size: 100% 100%;
		background-image: url(../../assets/images/indeximg/indexclass2.png);
	}
	.classtu3{
		background-size: 100% 100%;
		background-image: url(../../assets/images/indeximg/indexclass3.png);
	}
	.classtu4{
		background-size: 100% 100%;
		background-image: url(../../assets/images/indeximg/indexclass4.png);
	}
	
	/*新上好课的样式*/
	.youhui{
		float: left;
		color: red;
		font-size: 0.5rem;
		margin-left: 7%;
	}
	
	
	.foottxt{
		width: 100%;
		height: auto;
		text-align: center;
		clear: both;
		padding-top: 3rem;
		padding-bottom: 3rem;
		color: gray;
		font-size: 1rem;
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