<template>
	<section id="details">
		<ul class="header">
			<li class="headerli l" @click="dback()">
				<i class="iconfont icon-xiangzuo"></i>
				商品详情
			</li>
			<li class="headerli r" @click="nav()">
				<i class="iconfont icon-xiangqing1"></i>
			</li>
		</ul>
		<div id="detailsnav">
			<p class="dclassname">实战课程</p>
			<ul class="detnav">
				<li class="detli l">详情</li>
				<li class="detli l">章节</li>
				<li class="detli l">评价</li>
				<li class="detli l">咨询</li>
			</ul>
		</div>
		<p class="titname">微信小程序入门与实战 常用组件API开发技巧项目实战</p>
		<ul class="detailsmon">
			<li class="money l">￥149.00</li>
				<li @click="seebtn()"  class="money r">
					试看
					<i class="iconfont icon-icon_video"></i>
				</li>
		</ul>
		<ul class="detbox">
			<li class="detboxli" @click="culi1()">
				<span class="tit">促销</span>
				<span class="con">已支持支付宝花呗付款</span>
				<span class="r">···</span>
			</li>
			<li class="detboxli" @click="culi2()">
				<span class="tit">参数</span>
				<span class="con">初级·21小时·18140人学·99.8%好评度</span>
				<span class="r">···</span>
			</li>
			<li class="detboxli" @click="culi2()">
				<span class="tit">套餐</span>
				<span class="con">套餐最高立省￥49，更多套餐有惊喜</span>
				<span class="r">···</span>
			</li>
			<li class="detboxli" @click="culi2()">
				<span class="tit">服务</span>
				<span class="con">问答专区</span>
				<span class="r">···</span>
			</li>
			<li class="detboxli" @click="culi2()">
				<span class="tit">日志</span>
				<span class="con">共17条日志，最近更新17条</span>
				<span class="r">···</span>
			</li>
		</ul>
		<div class="dettu">
			<img src="../../assets/images/detailsimg/details1.jpg" />
			<img src="../../assets/images/detailsimg/details2.jpg" />
			<img src="../../assets/images/detailsimg/details3.jpg" />
			<img src="../../assets/images/detailsimg/details4.jpg" />
			<img src="../../assets/images/detailsimg/details5.jpg" />
			<img src="../../assets/images/detailsimg/details6.jpg" />
			<img src="../../assets/images/detailsimg/details7.jpg" />
			<img src="../../assets/images/detailsimg/details8.jpg" />
			<img src="../../assets/images/detailsimg/details9.jpg" />
			<img src="../../assets/images/detailsimg/details10.jpg" />
		</div>
		<div class="dfoot">
			<ul class="footul">
				<router-link to="/shopcar">
					<li class="footli footli1 l">加入购物车</li>
				</router-link>
				<li class="footli footli3 r">立即购买</li>
			</ul>
		</div>
		<div class="videobox" id="v" @click="delv()">
			<video class="vde" muted="true" src="../../../data/vedio/H.mp4" controls="controls"></video>
		</div>
		<div class="moneybtn" id="zu" >
			<ul class="cuxiao animated slideInUp">
				<li class="culi" >
					<span class="l cuti">促销</span>
					<i class="iconfont icon-quxiao r" @click="dzu()"></i>
				</li>
				<li class="culi">
					<span class="hua">花呗付款</span>
					<span class="ok">已支持支付宝花呗付款</span>
				</li>
				<li class="culi">
					<p class="wancheng" @click="dzu()">完成</p>
				</li>
			</ul>
		</div>
		<div class="moneybtn2" id="zu2" >
			<ul class="cuxiao animated slideInUp">
				<li class="culi" >
					<span class="l cuti">课程信息</span>
					<i class="iconfont icon-quxiao r" @click="dzu2()"></i>
				</li>
				<li class="culi">
					<span class="nn">难度</span>
					<span class="nntxt">初级</span>
				</li>
				<li class="culi">
					<span class="nn">时长</span>
					<span class="nntxt">21小时</span>
				</li>
				<li class="culi">
					<span class="nn">学习人数</span>
					<span class="nntxt">18145人学</span>
				</li>
				<li class="culi">
					<span class="nn">好评度</span>
					<span class="nntxt">98.8%好评度</span>
				</li>
				<li class="culi">
					<span class="l cuti">环境参数</span>
				</li>
				<li class="culi">
					<span class="nn">Nodejs</span>
					<span class="nntxt">8.11.3</span>
				</li>
				<li class="culi">
					<span class="nn">Taro cli</span>
					<span class="nntxt">>=1.1.4</span>
				</li>
				<li class="culi">
					<span class="nn">NPM</span>
					<span class="nntxt">5.6.0</span>
				</li>
				<li class="culi">
					<span class="nn">微信开发者工具</span>
					<span class="nntxt">v1.02.1811290</span>
				</li>
				<li class="culi">
					<p class="wancheng" @click="dzu2()">完成</p>
				</li>
			</ul>
		</div>
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
			dback(){
				this.$router.go(-1)
			},
			seebtn(){
				var ov=document.getElementById('v')
				ov.style.display="block"
			},
			delv(){
				var ov=document.getElementById('v')
				ov.style.display="none"
			},
			culi1(){
				var ozu=document.getElementById("zu")
				ozu.style.display="block"
			},
			dzu(){
				var ozu=document.getElementById("zu")
				ozu.style.display="none"
			},
			culi2(){
				var ozu2=document.getElementById("zu2")
				ozu2.style.display="block"
			},
			dzu2(){
				var ozu2=document.getElementById("zu2")
				ozu2.style.display="none"
			},
			nav(){
				this.mubox=!this.mubox
			}
			
		}
	}
</script>

<style scoped="scoped">
	
	#details{
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
		border-bottom: 1px solid gainsboro;

	}
	.headerli{
		font-size: 1.1rem;
		font-weight: bold;
		color: gray;
	}
	#detailsnav{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 2% 3%;
		margin-top: 62.5px;
		box-sizing: border-box;

	}
	.dclassname{
		width: 22%;
		height: auto;
		background: red;
		padding: 2% 3%;
		color: white;
		font-size: 1rem;
		font-weight: bold;
		border-radius: 2rem;
		text-align: center;
		
	}
	.detnav{
		overflow: hidden;
		width: 100%;
		height: auto;
		background: white;
		padding: 2% 0;
		box-sizing: border-box;
		display: none;
		
	}
	.detli{
		width: 20%;
		height: auto;
		padding-left:4% ;
		text-align: center;
	}
	.titname{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 1% 3%;
		box-sizing: border-box;
		color: #2B333B;
		font-size: 1.8rem;
		font-weight: bold;
		word-break: break-word;
	}
	.detailsmon{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 2% 5%;
		box-sizing: border-box;
	}
	.money{
		font-size: 1.2rem;
		color: red;
		font-weight: bolder;
	}
	.detbox{
		overflow: hidden;
		width: 92%;
		height: auto;
		margin: 2% 4%;
		background: #F3F5F7;
		box-sizing: border-box;
		border-radius: 0.5rem;
	}
	.detboxli{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 4% 2%;
		border-bottom: 1px solid gainsboro;
		box-sizing: border-box;
	}
	.tit{
		font-size: 0.8rem;
		font-weight: bold;
	}
	.con{
		font-size: 0.8rem;
		padding-left: 5%;
	}
	.icon-icon_video{
		font-size: 1.4rem;
	}
	.dettu{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding-top: 3%;
		font-size: 0;
	}
	.dettu img{
		width: 100%;
	}
	
	.videobox{
		position: fixed;
		width: 100%;
		height: 700px;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background-color: rgba(0,0,0,.8);
		display: none;
	}
	.vde{
		position: absolute;
		width: 96%;
		top: 0;
		bottom: 0;
		margin: auto;
		margin-left: 2%;
		margin-right: 2%;
	}
	
	.moneybtn{
		position: fixed;
		width: 100%;
		height: 700px;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background-color: rgba(0,0,0,.8);
		display: none;
	}
	.cuxiao{
		position: absolute;
		width: 100%;
		height: auto;
		bottom: 0;
		margin: auto;
		background: white;
		border-radius: 1rem 1rem 0 0;
		padding: 3%;
		box-sizing: border-box;
	}
	.culi{
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 3%;
		border-bottom: 1px solid gainsboro;
		box-sizing: border-box;
	}
	.cuti{
		font-size: 1rem;
		font-weight: bold;
		color: #D48E05;
	}
	.hua{
		font-size: 0.5rem;
		font-weight: bold;
		padding: 1% 2%;
		color: #008CC8;
		border-radius: 1rem;
		background-color:rgba(0,140,200,.1) ;
	}
	.ok{
		font-size: 0.6rem;
		padding-left: 3%;
	}
	.wancheng{
		width: 94%;
		height: auto;
		text-align: center;
		background: #D48E05;
		margin: 3% 3%;
		padding: 3% 0;
		color: white;
		border-radius: 2rem;
	}
	.moneybtn2{
		position: fixed;
		width: 100%;
		height: 700px;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background-color: rgba(0,0,0,.8);
		display: none;
	}
	.nn{
		display: inline-block;
		font-size: 0.8rem;
		width: 30%;
		font-weight: 700;
	}
	.nntxt{
		width: 50%;
		font-size: 0.8rem;
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
	
	
	.dfoot{
		overflow: hidden;
		width: 100%;
		height: auto;
		position: fixed;
		bottom: 0;
		background: white;
		max-width: 750px;
	}
	.footul{
		overflow: hidden;
		width: 90%;
		height: auto;
		margin: 3% auto;
		border-radius: 2rem;
		box-sizing: border-box;
		box-shadow: 0 -2px 4px 0 rgba(0,0,0,.05);
		color: white;
		font-weight: bold;
	}
	.footul a{
		color: white;
	}
	.footli{
		text-align: center;
		padding: 4% 0;
		box-sizing: border-box;
	}
	.footli1{
		text-align: center;
		width: 50%;
		padding-left: 5%;
		background: rgba(212,142,5,.6);
	}
	.footli3{
		text-align: center;
		width: 50%;
		background: #D48E05;
	}
</style>