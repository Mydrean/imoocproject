<template>
	<section id="shopcar">
		<ul class="header">
			<li class="headerli l" @click="sback()">
				<i class="iconfont icon-xiangzuo"></i>
				我的购物车
			</li>
			<li class="headerli r" @click="nav()">
				<i class="iconfont icon-xiangqing1 l"></i>
			</li>
		</ul>
		<div id="cont">
			<div class="cont" v-for="(item,index) in getProductList" :key="index">
				<div class="sbtnbox l">
					<p class="sbtn" @click="checkSingle(item)" :class="{checked:item.makeChoose}"></p>
				</div>
				<p class="stu l">
					<img :src="item.src" />
				</p>
				<div class="stitbox l">
					<p class="stit">{{item.tit}}</p>
					<p class="moneybox">
						<span class="money">￥{{item.productPrice}}</span>
						<span @click="changeNumber(item,-1)">-</span>
						<input type="text" readonly="readonly" v-model="item.prductQty">
						<span @click="changeNumber(item,1)">+</span>
						<span class="zmoney">￥{{item.productPrice*item.prductQty}}</span>
					</p>
					<p class="del" @click="deleteProduct(index)">
						<i class="iconfont icon-lajitongshanchu"></i>
					</p>
				</div>
			</div>
		</div>
		<footer class="footbox">
			<div class="footlf l">
				<span class="fquan" @click="checkAll()" :class="{checked:checkAllItem}"></span>
				<span>全选</span>
				<span class="zs">合计:￥{{totalPrice}}</span>
			</div>
			<div class="footrt r">
				<p class="account">去结算</p>
			</div>
		</footer>
		
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
	import Vue from 'vue'
	export default{
		data(){
			return{
				mubox:false,
				getProductList:[
				{
					src:'data/images/shopcar1.jpg',
					tit:'真实数据对接 从0开发前后端分离的企业级上线项目',
					productPrice:'299',
					prductQty:'1'
				},
				{
					src:'data/images/shopcar2.jpg',
					tit:'真实数据对接 从0开发前后端分离的企业级上线项目',
					productPrice:'149',
					prductQty:'1'
				},
				{
					src:'data/images/shopcar3.jpg',
					tit:'真实数据对接 从0开发前后端分离的企业级上线项目',
					productPrice:'266',
					prductQty:'1'
				}
				],
				totalPrice:0, //总金额
				checkAllItem:false, //全部选中
				checkedList:[] //选中的数
			}
		},
		methods:{
			nav(){
				this.mubox=!this.mubox
			},
			sback(){
				this.$router.go(-1)
			},
			//删除某一项
			deleteProduct:function (index){
				this.getProductList.splice(index,1)
				this.calcTotalPrice()  //这里要注意,当某一项删除时,如果你选中了,这里也是要做计算总价格的
			},
			//修改数量
			changeNumber:function (number,add){
				if(add<0){
					number.prductQty--;
					if(number.prductQty<'1'){  //因为数量最低是1
						number.prductQty=1
					}
				}else{
						number.prductQty++;
				}
					this.calcTotalPrice()
				},
				//选中单个的
				checkSingle:function (item){
					if(typeof item.makeChoose=='undefined'){  //这里要注意,因为checked字段根本不在this.getProductList里面,所以你要自己赋值进去
						Vue.set(item, 'makeChoose',true)  //这里应该设为true
					}else{
						item.makeChoose=!item.makeChoose
				}
					this.calcTotalPrice()
			},
			//选中所有的
			checkAll:function (){
				this.checkAllItem=!this.checkAllItem
				var _this=this
				if(this.checkAllItem){
					this.getProductList.forEach(element =>{
						if(typeof element.makeChoose=='undefined'){
							Vue.set(element, 'makeChoose',_this.checkAllItem) //让每一小项跟随checkall来变化
						}else{
							element.makeChoose=_this.checkAllItem
						}
					});
				}else{
					this.getProductList.forEach(element =>{
						if(typeof element.makeChoose=='undefined'){
							Vue.set(element, 'makeChoose',_this.checkAllItem)
						}else{
							element.makeChoose=_this.checkAllItem
						}
					});
				}
				this.calcTotalPrice()
			},
			//计算总金额
			calcTotalPrice:function (){
				var _this=this
				this.totalPrice=0
				this.getProductList.forEach((element,index) =>{
					if(element.makeChoose){
						_this.totalPrice+=element.productPrice*element.prductQty
					}
				});
			},
			//让页面一进来就处于选中的状态
			makeAllChecked:function (){
				this.getProductList.forEach((item)=>{
					if(typeof item.makeChoose=='undefined'){
						Vue.set(item, 'makeChoose',true)
					}
				})
			},
//			watch:{
//				//如果全部选中,那么全部选中的按钮应该变红,如果一项不是,应该变空
//				getProductList:{
//					handler:function (item){
//						this.checkedList=this.getProductList.filter((element)=>{
//							return element.makeChoose==true;
//						})
//						//选中数<总数据
//						if(this.checkedList.length<this.getProductList.length){
//							this.checkAllItem=false
//						}else{
//							this.checkAllItem=true
//						}
//					},
//					deep:true  //这个deep:true一定要写,不然肯定不会时时变化的
//				}
//			},
			created:function (){
				this.makeAllChecked()
			}
		}
	}
</script>

<style scoped="scoped">
	#shopcar{
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
		background: white;
		position: fixed;
		top: 0;
		border-bottom: 1px solid gainsboro;
		z-index: 15;
	}
	.headerli{
		font-size: 1rem;
		color: black;
	}
	#cont{
		margin-top: 60px;
	}
	.cont{
		overflow: hidden;
		width: 100%;
		height: auto;

		padding: 5% 3% 3% 3%;
		border-bottom: 1px solid gainsboro;
	}
	.sbtnbox{
		overflow: hidden;
		width: 10%;
		height: auto;
		padding-top: 7%;
	}
	.sbtn{
		width:15px;
		height:15px;
		border-radius:50%;
		border:2px solid red;
	}
	.stu{
		overflow: hidden;
		width: 20%;
		height: auto;
	}
	.stu img{
		width: 100%;
		height: 82px;
	}
	.stitbox{
		overflow: hidden;
		width: 70%;
		height: auto;
		padding: 0 3% 3% 3%;
		box-sizing: border-box;
	}
	.stit{
		font-size: 0.8rem;
	}
	.moneybox{
		padding-top: 2%;
		box-sizing: border-box;
	}
	.money{
		color: red;
		font-size: 0.8rem;
		padding-right: 5%;
	}
	.moneybox input{
		width: 25%;
		margin-left: 1%;
		text-align: center;
		border: 1px solid gainsboro;
		font-size: 0.8rem;
		padding: 1% 0;
	}
	.moneybox input:focus{
		outline: none;
	}
	.zmoney{
		color: black;
		font-size: 0.8rem;
	}
	.del{
		float: right;
		clear: both;
		margin-right: 6%;
		padding-top: 2%;
		font-size: 0.8rem;
		color: red;
		box-sizing: border-box;
	}
	.footbox{
		overflow: hidden;
		width: 100%;
		height: auto;
		position: fixed;
		bottom: 0;
		padding: 3%;
		box-sizing: border-box;
		box-shadow: 0 -4px 8px 0 rgba(0,0,0,.1);
	}
	.footlf{
		width: 65%;
		height: auto;
		box-sizing: border-box;
		padding-top: 1%;
	}
	.fquan{
		display: inline-block;
		width:15px;
		height:15px;
		border-radius:50%;
		border:2px solid red;
	}
	.zs{
		padding-left: 3%;
		font-size: 1.2rem;
	}
	.footrt{
		width: 35%;
		box-sizing: border-box;
	}
	.account{
		background: red;
		text-align: center;
		padding: 8% 0;
		border-radius: 2rem;
		box-shadow: 0 -4px 8px 0 rgba(0,0,0,.1);
		color: white;
		font-weight: bold;
	}
	.checked{
		background-color:red;
	}
	.icon-lajitongshanchu{
		font-size: 1.5rem;
		color: gray;
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