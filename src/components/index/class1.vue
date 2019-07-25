<template>
	<div id="class1box">
		<div class="classbox1" v-for="(item,index) in classlist">
			<div class="classleft l">
				<p class="jobname">{{item.jobname}}</p>
				<p class="text">{{item.text}}</p>
				<p class="text">
					<span>{{item.times}}</span>
					<span class="ml cdot">·</span>
					<span class="ml">{{item.hours}}</span>
					<span class="ml cdot">·</span>
					<span class="ml">{{item.peopelnum}}</span>
				</p>
			</div>
			<div class="classright r">
					<img :src="item.src" />
			</div>
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
	</div>
</template>

<script>
	export default {
		data() {
	      return {
	      	classlist:[],
	      	i:0
	      }
	   },
		mounted(){
			var _this=this;
			this.$http.get('./data/index.json')
			.then(function(res){
				_this.classlist=res.data.classlist
				
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



<style >
	#class1box{
		width: 100%;
		height: auto;
		padding-bottom: 2rem;
		padding-top: 7rem;
		background: #f3f5f7;
		max-width: 750px;
	}
	.classbox1{
		overflow: hidden;
		width: 92%;
		height: auto;
		background: white;
		margin: 4%;
		border-radius: 0.5rem;
		padding-bottom: 0.5rem;
	}
	
	.classleft{
		width: 65%;
		height: auto;
	}
	.classright{
		width: 35%;
		height: auto;
		padding-top: 6%;
	}
	.classright img{
		width: 80%;
	}
	.jobname{
		font-size: 1rem;
		margin: 5% 5% 0;
		font-weight: bold;
	}
	.text{
		font-size: 0.8rem;
		color: gray;
		margin-left: 5%;
		margin-top: 3%;
	}
	.ml{
		padding-left: 1%;
	}
	.cdot{
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