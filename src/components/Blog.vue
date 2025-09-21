<script setup>
import Post from './Post.vue'
import Grid from './Grid.vue'

import { reactive, ref, onMounted, computed } from 'vue'

const posts = ref([])
const loading = ref(false)

onMounted(async () => {
    try {
        loading.value = true
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
        if(!response.ok) throw new Error('Failed to fetch data')
        const data = await response.json()
        posts.value = data
    }
    catch(error) {
        console.log('Error : ' + error)
    }
    finally {
        loading.value = false
    }
})

const filteredPosts = computed(() => {
    return posts.value.filter(post => post.id <= 5)
})




</script>

<template>
    <div class="container">
        <h2>Blog</h2>
        <div v-if="loading">Loading....</div>
        <Grid v-if="posts" :width="100">
            <div v-for="(post, index) in filteredPosts" :key="post.id">
                <Post :post="post" :postid="post.id" :title="post.title" :body="post.body" v-model:title="post.title" @update:content="value => post.body = value" />
            </div>
        </Grid>
        <button>Page suivante</button>
    </div>
</template>

<style scoped>
    li {
        list-style: none;
    }
    article {
        height: 100%;
    }
    ul {
        display: flex;
        gap: 1.5rem;
    }
</style>