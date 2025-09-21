<script setup>
import Post from './Post.vue'

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
    console.log(posts)
})

const filteredPosts = computed(() => {
    return posts.value.filter(post => post.id <= 5)
})

</script>

<template>
    <div class="container">
        <h2>Blog</h2>
        <div v-if="loading">Loading....</div>
        <ul v-if="posts">
            <li v-for="(post, index) in filteredPosts" :key="post.id">
                <Post :title="post.title" :body="post.body" v-model:title="post.title" @update:content="value => post.body = value" />
            </li>
        </ul>
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