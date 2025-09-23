<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import Article from './Article.vue'


const props = defineProps({
    postid: Number,
    title: String,
    body: String,
    post: Object,
})

const title = defineModel('title')

const thumbnail = computed(() => {
    return `https://picsum.photos/id/${props.postid}/280/180`
})

const emit = defineEmits(['update:body'])

const link = computed(() => {
    return `#post:${props.postid}`
})

</script>

<template>
    <a :href="link">
    <!-- <Article
      :postid="props.postid"
      v-model:title="title"
      :body="props.body"
      :thumbnail="thumbnail"
      @update:body="val => emit('update:body', val)"
    /> -->
    <article @click="toggleModal">
        <header>
            <img :src="thumbnail" alt="" />
        </header>
        <h3>{{ title }}</h3>
        {{ body }}
    </article>
    </a>
</template>

<style scoped>
    button {
        display: block;
        font-size: 2rem;
    }
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border: 2px solid black;
        z-index: 10;;
        color: #333;
    }
    input, textarea {
        color: #fff;
    }
    article {
        width: 100%;
    }
    article header img {
        width: calc(100% + 2 + var(--pico-block-spacing-horizontal));
        max-width: none;
        height: auto;
        margin: calc(var(--pico-block-spacing-vertical) * -1);
        margin-bottom: 1rem;
    }
</style>