export const constantRoute = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('@/views/home.vue'),
		name: 'home'
	}
]
