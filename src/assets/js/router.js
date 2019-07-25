import VueRouter from 'vue-router'

//index
import first from '../../components/index/first.vue'
import index from '../../components/index/index.vue'
import course from '../../components/index/course.vue'
import practice from '../../components/index/practice.vue'
import class1 from '../../components/index/class1.vue'
import read1 from '../../components/index/read1.vue'
import article from '../../components/index/article.vue'
import wenda from '../../components/index/wenda.vue'
import details from '../../components/index/details.vue'

import search from '../../components/index/search.vue'
import personalCenter from '../../components/index/personalCenter.vue'
import login from '../../components/index/login.vue'
import loginhao from '../../components/index/loginhao.vue'
import shopcar from '../../components/index/shopcar.vue'

import ireply from '../../components/wenda/ireply.vue'
import quesiondet from '../../components/wenda/quesiondet.vue'


export default new VueRouter({
	routes:[
	{
		path:'/',
		component:first,
		redirect:'/index',
		children:[
		{
			path:'/index',
			component:index
		},
		{
			path:'/course',
			component:course,
		},
		{
			path:'/practice',
			component:practice
		},
		{
			path:'/class1',
			component:class1
		},
		{
			path:'/read1',
			component:read1
		},
		{
			path:'/article',
			component:article
		},
		{
			path:'/wenda',
			component:wenda
		}
		]
	},
	{
		path:'/search',
		component:search
	},
	{
		path:'/personalCenter',
		component:personalCenter
	},
	{
		path:'/ireply',
		component:ireply
	},
	{
		path:'/quesiondet',
		component:quesiondet
	},
	{
		path:'/login',
		component:login
	},
	{
		path:'/loginhao',
		component:loginhao
	},
	{
		path:'/shopcar',
		component:shopcar
	},
	{
		path:'/details',
		component:details
	},
	{
		path:'/*',
		redirect:'/index'
	}
	]
})

