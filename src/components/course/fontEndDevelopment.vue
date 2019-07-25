<template>
	<section id="fontEndDevelopment">
		<div class="alltu" v-for="(item,index) in fontenddevelopment">
			<p class="coursetu l">
				<img :src="item.src" />
			</p>
			<p class="rcoustit l">{{item.tit}}</p>
			<span class="cstart">{{item.start}}</span>
			<span class="iconfont icon-gerenzhongxin"></span>
			<span class="cnum">{{item.cnum}}</span>	
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				fontenddevelopment:[]
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/fontenddevelopment.json')
			.then(function(res){
				_this.fontenddevelopment=res.data.fontenddevelopment
				
			})
			.catch(()=>{
		    	
		  	})
		  	.then((f)=>{
		    
		  	});  
		}
	}
</script>

<style scoped="scoped">
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
</style>