<script setup>
import Post from './Post.vue'
import Grid from './Grid.vue'

import { reactive, ref, onMounted, computed, watch } from 'vue'

const posts = ref([])
const loading = ref(false)
const page = ref(1)


watch(page, async (p) => {
    try {
        loading.value = true
        posts.value = []
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5&_page=' + p)
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
}, { immediate: true })

const filteredPosts = computed(() => {
    return posts.value
})



</script>

<template>
    <div class="container">
        <h2>Blog</h2>
        <div v-if="loading">Loading....</div>
        <Grid v-if="posts" :width="100">
            <div v-for="(post, index) in posts" :key="post.id">
                <Post :post="post" :postid="post.id" :title="post.title" :body="post.body" v-model:title="post.title" @update:body="value => post.body = value" />
            </div>
        </Grid>
        <div class="pagination">
            <button :disabled="page === 1" @click=" page >= 2 ? page-- : ''">Previous page</button>
            <button @click="page++">Next page</button>
        </div>
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
    .pagination {
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;
    }
    .pagination button {
        font-size: 1.6rem;
        padding: 0.5rem 1rem;
    }
</style>