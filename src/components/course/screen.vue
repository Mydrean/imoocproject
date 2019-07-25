<template>
	<div >
		<section id="secreebox1">
			<div class="alltu" v-for="(item,index) in shaixuan">
				<p class="coursetu l">
					<img :src="item.src" />
				</p>
				<p class="rcoustit l">{{item.tit}}</p>
				<span class="cstart">{{item.start}}</span>
				<span class="iconfont icon-gerenzhongxin"></span>
				<span class="cnum">{{item.cnum}}</span>	
			</div>
		</section>
		
			<section id="secreebox" class="animated slideInRight">
				<div class="lf l" @click="sdel()"></div>
				<div class="rt r">
				<el-collapse v-model="activeNames" @change="handleChange">
					<el-collapse-item title="方向" name="1">
				    <div>
				    	<ul class="screentype">
							<li class="scrli l">前端开发</li>
							<li class="scrli l">后台开发</li>
							<li class="scrli l">移动</li>
						</ul>
				    </div>
				    <div class="yincang">
				    	<ul class="screentype">
							<li class="scrli l">数据结构</li>
							<li class="scrli l">前沿技术</li>
							<li class="scrli l">算法</li>
						</ul>
				    </div>
				    <div class="yincang">
				    	<ul class="screentype">
							<li class="scrli l">运维测试</li>
							<li class="scrli l">数据库</li>
							<li class="scrli l">UI设计</li>
						</ul>
				    </div>
				  	</el-collapse-item>
				  	<el-collapse-item title="分类" name="2">
				    	<div>
				    		<ul class="screentype">
								<li class="scrli l">html/css</li>
								<li class="scrli l">javascript</li>
								<li class="scrli l">jquery</li>
							</ul>
				    	</div>
				    	<div class="yincang">
					    	<ul class="screentype">
								<li class="scrli l">Vue.js</li>
								<li class="scrli l">React.js</li>
								<li class="scrli l">Angular</li>
							</ul>
				    	</div>
				  	</el-collapse-item>
				  	<el-collapse-item title="难度" name="3">
				    	<div>
				    		<ul class="screentype">
								<li class="scrli l">入门</li>
								<li class="scrli l">初级</li>
								<li class="scrli l">中级</li>
								<li class="scrli l">高级</li>
							</ul>
				    	</div>
				  	</el-collapse-item>
				  	<el-collapse-item title="排序" name="4">
				    	<div>
				    		<ul class="screentype">
								<li class="scrli l">最新</li>
								<li class="scrli l">最熟</li>
							</ul>
				    	</div>
				  	</el-collapse-item>
				  	<el-collapse-item title="类型" name="5">
				    	<div>
				    		<ul class="screentype">
								<li class="scrli l">基础</li>
								<li class="scrli l">案例</li>
								<li class="scrli l">框架</li>
								<li class="scrli l">工具</li>
							</ul>
				    	</div>
				  	</el-collapse-item>
				</el-collapse>
				
				<ul class="fscrul">
					<li class="fscrli l">重置</li>
					<li class="fscrli l" @click="finish()">完成</li>
				</ul>
			</div>	
			</section>
	</div>
</template>

<script >
	export default{
		data(){
			return{
				shaixuan:[],
				activeNames: ['1']
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/shaixuan.json')
			.then(function(res){
				_this.shaixuan=res.data.shaixuan
				
			})
			.catch(()=>{
		    	
		  	})
		  	.then((f)=>{
		    
		  	});  
		},
		methods:{
			finish(){
				secreebox.style.display='none'
			},
			handleChange(val) {
		        
		   	},
		   	sdel(){
		   		secreebox.style.display='none'
		   }
			
		}
	}
</script>

<style scoped="scoped">
	
	#secreebox{
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 800px;
		background: white;
		z-index: 30;
	}
	.lf{
		overflow: hidden;
		width: 10%;
		height: 800px;
		background:rgba(0,0,0,0.9);
	}
	.rt{
		overflow: hidden;
		width: 90%;
		height: 800px;
	}
	.fscrul{
		width: 90%;
		position: fixed;
		bottom: 0;
		right: 0;
		height: 50px;
	}
	.fscrli{
		float: left;
		border: 1px solid gainsboro;
		width: 50%;
		box-sizing: border-box;
		text-align: center;
		line-height: 50px;
		font-size: 1.3rem;
	}
	.fscrli:nth-of-type(1){
		color: gray;
		background: white;
	}	
	.fscrli:nth-of-type(2){
		color: white;
		background: red;
	}
	
	.alltu{
		width: 100%;
		height: auto;
		padding: 2% 3%;
		height: auto;
		box-sizing: border-box;
		overflow: hidden;
	}
	.coursetu{
		width: 30%;
		height: 75px;
		border-radius: 0.5rem;
	}
	.coursetu img{
		width: 100%;
		height: 100%;
		border-radius: 0.5rem;
	}
	
	.rcoustit{
		width: 70%;
		height: auto;
		padding: 2% 4%;
		box-sizing: border-box;
		color: #2B333B;
	    font-weight: 600;
	}
	.cstart{
		font-size: 0.5rem;
		color: gray;
		padding: 0 4%;
	}
	.icon-gerenzhongxin{
		font-size: 0.2rem;
	}
	.cnum{
		font-size: 0.5rem;
		color: gray;
	}
	.screentit{
		padding-top: 5%;
		padding-left: 5%;
		font-size: 0.8rem;
	}
	.screentype{
		position: relative;
		width: 100%;
		height: auto;
		padding: 6% 6%;
		text-align: center;
		box-sizing: border-box;
		
	}
	.scrli{
		text-align: center;
		margin-left: 2%;
		padding: 2% 5%;
		border: 1px solid gainsboro;
		border-radius: 0.5rem;
		font-size: 1rem;
		color: gray;
	}
	.el-collapse{
		width: 100%;
		padding: 0 4%;
		overflow: hidden;
		box-sizing: border-box;
	}
	
	.yincang{
		padding-top: 3%;
	}
</style>