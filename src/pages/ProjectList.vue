<template>
    <div class="body">
  
      <div class="container">
        <h1 class="text-light">{{ title }}</h1>
        <div class="row">
          <div class="col-4" v-for="(project, index) in projects" :key="project.id">
  
            <div class="card text-bg-dark mb-3 shadow">
              <div class="card-header m-auto">
                <img :src="project.image" :alt="project.title" class="img-fluid">
              </div>
  
              <div class="card-body">
                <h4 class="fs-4 card-title fw-bold text-center text-capitalize py-2">{{ project.title }}</h4>
                <p class="card-text">{{ project.title }}</p>
              </div>
            </div>
            
          </div>
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
  
  export default {
      'name': 'App',
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