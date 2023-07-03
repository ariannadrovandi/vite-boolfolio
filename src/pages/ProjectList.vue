<template>
    <Loader v-if="projects.length === 0"/>
    <div class="body overflow-auto">
  
        <div class="container">
            <h1 class="text-light">{{ title }}</h1>
            <div class="row">
                <ProjectCard v-for="(project, index) in projects" :key="project.id" :project="project"/>
            </div>
    
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }" @click="getData(currentPage - 1)">Previous</button></li>
                    <li class="page-item" v-for="n in lastPage"><button :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n }}</button></li>
                    <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 4 }" @click="getData(currentPage + 1)">Next</button></li>
                </ul>
            </nav>
    
        </div>
    </div>
  </template>
  
<script>
    import axios from 'axios';
    import Loader from '../components/Loader.vue';
    import ProjectCard from '../components/ProjectCard.vue';
    export default {
        name: 'App',
        components: {
            Loader,
            ProjectCard,
        },
        data() {
            return {
                title: 'Project list',
                projects: [],
                apiUrl: 'http://127.0.0.1:8000/api',
                currentPage: 1,
                lastPage: null,
            }
        },
        methods: {
            getData(numPage) {
                axios.get(`${this.apiUrl}/projects`, {
                    params: {
                        'page': numPage
                    }
                }).then((res) => {
                    //console.log(res);
                    this.projects = res.data.results.data;
                    this.currentPage = res.data.results.current_page;
                    this.lastPage = res.data.results.last_page;
                })
            }
        },
        mounted() {
            this.getData(1);
        }
    
    }
</script>
  
<style scoped>

</style>