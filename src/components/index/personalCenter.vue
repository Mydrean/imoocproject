<template>
	<section id="personal">
		<ul class="header">
			<li class="headerli l" @click="pback()">
				<i class="iconfont icon-xiangzuo"></i>
				个人中心
			</li>
			<li class="headerli r" @click="nav()">
				<i class="iconfont icon-xiangqing1"></i>
			</li>
		</ul>
		<div class="personaltu">
			<p class="tu l">
				<img src="../../../dist/personal.jpg" />
			</p>
			<div class="txt r">
				<p class="ptit">慕粉1354074951</p>
				<p class="time">学习时长 166小时29分 | 经验 1713</p>
			</div>
		</div>
		<ul class="navul">
			<li class="navli l">
				<p class="xtu">
					<img src="../../assets/images/iconpng/kecheng.png" />
				</p>
				<p class="ptest">我的课程</p>
			</li>
			<li class="navli l">
				<p class="xtu">
					<img src="../../assets/images/iconpng/shizhan.png" />
				</p>
				<p class="ptest">我的实战</p>
			</li>
			<li class="navli l">
				<p class="xtu">
					<img src="../../assets/images/iconpng/xunwen.png" />
				</p>
				<p class="ptest">我的猿问</p>
			</li>
			<li class="navli l">
				<p class="xtu">
					<img src="../../assets/images/iconpng/jilu.png" />
				</p>
				<p class="ptest">我的手记</p>
			</li>
		</ul>
		
		<div class="pline"></div>
		
		<ul class="muluul">
			<li class="mululi">
				<router-link to="/shopcar">
					<i class="iconfont icon-gouwucheman" style="color: orange;"></i>
					<span class="fonttxt">我的购物车</span>
				</router-link>
			</li>
			<li class="mululi">
				<i class="iconfont icon-aixin" style="color: red;"></i>
				<span class="fonttxt">我的收藏</span>
			</li>
			<li class="mululi">
				<i class="iconfont icon-dingdan" style="color: orangered;"></i>
				<span class="fonttxt">我的订单</span>
			</li>
			<li class="mululi">
				<i class="iconfont icon-kecheng" style="color: blueviolet;"></i>
				<span class="fonttxt">我的专栏</span>
			</li>
			<li class="mululi">
				<i class="iconfont icon-qianbao" style="color: darkgoldenrod;"></i>
				<span class="fonttxt">邀请有奖</span>
			</li>
			<li class="mululi">
				<i class="iconfont icon-wodeyouhuijuan" style="color: blue;"></i>
				<span class="fonttxt">优惠卷</span>
			</li>
			<li class="mululi">
				<i class="iconfont icon-xunwen" style="color: red;"></i>
				<span class="fonttxt">常有问题</span>
			</li>
			<li class="mululi">
				<i class="iconfont icon-fankui" style="color: orange;"></i>
				<span class="fonttxt">意见反馈</span>
			</li>
		</ul>
		<router-link to="/login">
			<div class="btn">退出登录</div>
		</router-link>
		<!--小弹窗的导航条-->
		<div class="mubox" v-show="mubox">
			<ul class="muboxul animated slideInDown">
				<li class="muboxli">
					<router-link to="/index">
					<i class="iconfont icon-shouye"></i>
					回到首页
					</router-link>
				</li>
				<li class="muboxli">
					<router-link to="/personalCenter">
					<i class="iconfont icon-gerenzhongxin"></i>
					个人中心
					</router-link>
				</li>
				<li class="muboxli">
					<router-link to="/index">
					<i class="iconfont icon-fankui"></i>
					反馈问题
					</router-link>
				</li>
				<li class="muboxli">
					<router-link to="/login">
					<i class="iconfont icon-tuichu"></i>
					登录注册
					</router-link>
				</li>
			</ul>
		</div>
		
	</section>
</template>

<script>
	export default{
		data(){
			return{
				mubox:false
			}
		},
		mounted(){
			window.onscroll=this.handleScroll;
		},
		methods:{
			pback(){
				this.$router.go(-1)
			},
			nav(){
				this.mubox=!this.mubox
			}
		}
	}
</script>

<style scoped="scoped">
	#personal{
		overflow: hidden;
		width: 100%;
		height: auto;
	}
	.header{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 5%;
		box-sizing: border-box;
		position: fixed;
		background: white;
		z-index: 15;
	}
	.headerli{
		font-size: 1.1rem;
		font-weight: bold;
		color: gray;
	}
	.personaltu{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 5%;
		box-sizing: border-box;
		background-color: #33384a;
		margin-top: 61.5px;
	}	
	.tu{
		width: 20%;
		text-align: center;
	}
	.tu img{
		text-align: center;
		width: 100%;
		border-radius: 50%;
	}
	.txt{
		width: 70%;
		height: auto;
		color: white;
	}
	.ptit{
		padding-top: 3%;
		font-size: 1.3rem;
	}
	.time{
		padding-top: 3%;
		font-size: 0.6rem;
	}
	.navul{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 5%;
		box-sizing: border-box;
	}
	.navli{
		overflow: hidden;
		width: 25%;
		height: auto;
		text-align: center;
	}
	.xtu{
		text-align: center;
		width: 40%;
		height: auto;
		line-height: -moz-block-height;
		transform: translateX(80%);
	}
	.xtu img{
		width: 100%;
		vertical-align: middle;
	}	
	.ptest{
		color: gray;
		font-size: 0.9rem;
	}
	.pline{
		width: 100%;
		height: 40px;
		background: #f3f5f7;
	}
	.muluul{
		width: 100%;
		height: auto;
		padding: 3%;
		box-sizing: border-box;
	}
	.mululi{
		width: 100%;
		padding-top:3%;
		padding-bottom: 3%;
		border-bottom: 1px solid gainsboro;
		padding-left: 2%;
		box-sizing: border-box;
	}
	.mululi a{
		color: black;
	}
	.fonttxt{
		padding-left: 3%;
		font-size: 0.9rem;
		color: gray;
	}
	.btn{
		margin: 10% 15% 10% 15%;
		text-align: center;
		width:70%;
		border: 1px solid gray;
		box-sizing: border-box;
		padding: 3% 5%;
		color: gray;
		cursor: pointer;
	}
	/*小弹窗的导航条样式*/
	.mubox{
		position: fixed;
		width: 100%;
		height: 700px;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background-color: rgba(43,51,59,.6);
	}
	.muboxul{
		position: absolute;
		width: 35%;
		height: auto;
		top: 62.5px;
		right: 0;
		margin: auto;
		background: white;
		border-radius:0 0 1rem 1rem ;
		padding: 3%;
		box-sizing: border-box;
		box-shadow: 0 2px 4px 0 rgba(28,31,33,.1), 0 4px 8px 0 rgba(28,31,33,.1), 0 8px 16px 0 rgba(28,31,33,.1), 0 12px 24px 0 rgba(28,31,33,.1), 0 16px 32px 0 rgba(28,31,33,.1);
	}
	.muboxul{
		width: 35%;
		padding: 8% 3% 3% 3%;
	}
	.muboxli{
		text-align: center;
		padding: 8% 0;
	}
	.icon-shouye{
		font-size: 1.3rem;
	}
</style>