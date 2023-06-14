<template>
    <Loader v-if="!project"/>
    <div v-if="project">
		<h1> {{project.title}} </h1>
        <img class="img-fluid" :src="project.image" :alt="project.title">
		<!-- <img :src="imgBasePath + project.cover_image" :alt="project.title">
		<ul>
			<li v-for="color in project.colors" :style="{backgroundColor: color.hex_value}"> {{color.name}}</li>
		</ul> -->
	</div>
</template>

<script>
import axios from 'axios';
import Loader from '../components/Loader.vue';
export default  {
    name: 'SingleProject',
    components: {
        Loader,
    },
    data(){
        return{
            project: null,
            apiUrl: 'http://localhost:8000/api',
        }
    },
    methods:{
        getProjects(){
            axios.get(`${this.apiUrl}/projects/${this.$route.params.slug}`).then((res)=>{
                //console.log(res.data.results);
                if(res.data.success){
                    this.project = res.data.results;
                    console.log(this.project);
                } else{
                    this.$router.push({name : 'not found'})
                }
            })
        }
    },
    mounted(){
        //console.log(this.$router);
        //console.log(this.$route);
        this.getProjects();
    }
}
</script>


<style lang="scss" scoped>
    
</style>