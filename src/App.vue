<template>
  <HeaderApp />
  <main>
    <router-view></router-view>
  </main>
  <footer>FOOTEEEEEEEEERRRRRRR</footer>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue';
export default  {
    name: 'App',
    components: {
		  HeaderApp
	  }
}
</script>


<style lang="scss" scoped>
    
</style>