<template>
    <div class="col-4">
        <div class="card text-bg-dark mb-3 shadow">
            <div class="card-header m-auto">
                <img :src="project.image" :alt="project.title" class="img-fluid">
            </div>

            <div class="card-body">
                <h4 class="fs-4 card-title fw-bold text-center text-capitalize py-2">{{ project.title }}</h4>
                <div class="card-text">
                    <p>{{ project.title }}</p>
                    <router-link :to="{name: 'single-project', params:{slug: project.slug}}" class="btn btn-primary">Vedi progetto</router-link>
                </div>
            </div>
        </div>        
    </div>
    
    
</template>

<script>
    export default {
        name: 'ProjectCard',
			props: ['project'],
			data(){
				return{
					
				}
			},
			computed: {
				
			}
    }
</script>

<style lang="scss" scoped>

</style>