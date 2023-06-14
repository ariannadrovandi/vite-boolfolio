import { createRouter, createWebHistory } from 'vue-router';
		
		import HomePage from './pages/HomePage.vue';
		import ProjectList from './pages/ProjectList.vue';
		import AboutUs from './pages/AboutUs.vue';
		import ContactUs from './pages/ContactUs.vue';
		import SingleProject from './pages/SingleProject.vue';
		// facoltativo pag 404 !!in fondo!!
		import NotFound from './pages/NotFound.vue';
		
		
		const router = createRouter({            
			history: createWebHistory(),        
			routes: [                             
				{
					path: '/',
					name: 'home', //facoltativo
					component: HomePage
				},
				{
					path: '/projects',
					name: 'projects', //facoltativo
					component: ProjectList
				},
				{
					path: '/about',
					name: 'about', //facoltativo
					component: AboutUs
				},
				{
					path: '/contact',
					name: 'contact', //facoltativo
					component: ContactUs
				},
				{
					path: '/projects/:slug',
					name: 'single-project', //facoltativo
					component: SingleProject
				},
				
				// facoltativo: pagina 404
				{
					path: '/:pathMatch(.*)*',
					name: 'not-found', //facoltativo
					component: NotFound
				},
			]
		});
		
		export { router }; 
