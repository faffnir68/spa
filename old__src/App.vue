<script setup>
import usePage from './composable/usePage'
import useFetch from './composable/useFetch'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'
import Article from './components/Article.vue'

const { page } = usePage()
</script>

<template>
  <Header />
  <Blog v-if="page === 'blog'" />
  <Contact v-else-if="page === 'contact'" />
  <Article v-else-if="page === 'post'" :id="param" />
  <Home v-else-if="page === 'home' || page === ''" />
  <NotFound v-else />
</template>

<style scoped>

</style>
