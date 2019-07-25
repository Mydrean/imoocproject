<template>
	<div>
	<header id="myhead">
   		<div class="head-top">
   			<p><img src="../../assets/logo.png" /></p>
   			<p>下载APP</p>
   			<p>
   				<router-link to="/search">
   					<p><img src="../../assets/images/iconpng/sousuo .png" /></p>
   				</router-link>
   			</p>
   			<p>
   				<router-link to="/personalCenter">
   					<p><img src="../../assets/images/indeximg/personal.jpg" /></p>
   				</router-link>
   			</p>
   		</div>
   		
   		<nav class="head-nav">
   			<ul>
	          <li v-for="(v,i) in navs">
	            <router-link :to="v.router">{{v.con}}</router-link>
	          </li>
	        </ul>
   		</nav>
   	</header>
   	<router-view></router-view>
</div>
</template>

<script>
	export default {
	  name: 'app',
	  data () {
	    return {
	    	navs:[
	    	{
	    		con:'首页',
	    		router:'/index'
	    	},
	    	{
	    		con:'课程',
	    		router:'/course'
	    	},
	    	{
	    		con:'实战',
	    		router:'/practice'
	    	},
	    	{
	    		con:'就业班',
	    		router:'/class1'
	    	},
	    	{
	    		con:'专栏',
	    		router:'/read1'
	    	},
	    	{
	    		con:'手记',
	    		router:'/article'
	    	},
	    	{
	    		con:'猿问',
	    		router:'/wenda'
	    	}
	    	]
	    }
	  }
}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	body,html{
		margin: 0 auto;
		max-width: 750px;
		font-size: 16px;
		background: white;
	}
	
	/*头部的样式*/
	#myhead{
		position: fixed;
		z-index: 5;
		background: white;
	}
		
	.head-top{
		width: 100%;
		height: auto;
		overflow: hidden;
		top: 0;
		z-index: 5;
		max-width: 750px;
		background: white;
		
	}
	/*logo图*/
	.head-top>p:nth-of-type(1){
		width: 23%;
    float: left;
    margin: 4% 4%;
	}
	.head-top img{
		display: block;
		width: 100%;
	}
	/*下载App*/
	.head-top>p:nth-of-type(2){
		width: 20%;
	    line-height: 2rem;
	    float: left;
	    margin-top: 4%;
	    margin-left: 20%;
	    background: rgba(240,20,20,.05);
	    border-radius: 2rem;
	    font-weight: 700;
	    font-size: 0.9rem;
	    color: #F01414;
	    text-align: center;
	    cursor: pointer;
	    /*padding: 0.5% 0;*/
	}
	/*search*/
	.head-top>p:nth-of-type(3){
		width: 8%;
    height: 3%;
		float: left;
   	margin-left: 43%;
    margin-top: -8%;
	}
	.head-top>p:nth-of-type(4){
		width: 8%;
    height: 2%;
    float: right;
    margin-right:6%;
    margin-top: -8%;

	}
	.head-top>p:nth-of-type(4) img{
    border-radius: 50%;
	}
	
	/*nav的样式*/
	.head-nav{
	   height: auto;
	    width: 100%;
	    top: 3.4rem;
	    z-index: 5;
	    max-width: 750px;
	    background: white;
	}
	.head-nav>ul{
  	display: flex;
    width: 100%;
    overflow: hidden;
    height: 2.8rem;
  }
  .head-nav>ul>li{
  	list-style: none;
  	/*左右距离*/
  	flex: 1;
  	font-weight: bolder;
  	text-align: center;
  	line-height: 3rem;
  }
  .head-nav>ul>li a{
  	color: #71777D;
  	font-size: 1.05rem;
  	text-decoration: none;
  	padding-bottom: .5rem;
  	
  }
  .router-link-active{
  	border-bottom: 2px solid red;
  	color: red!important;
  }
</style>