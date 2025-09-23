<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import useFetch from '../composable/useFetch'

const props = defineProps({
    postid: Number,
    // title: String,
    // body: String,
    // thumbnail: String
})

// const title = defineModel('title')

// const emit = defineEmits(['update:body'])
// const updateBody = (e) => {
//     emit('update:body', e.target.value)
// }
// const open = ref(false)
// function toggleModal() {
//     open.value === false ? open.value = true : open.value = false
// }
// const thumbnail = computed(() => {
//     props.thumbnail ?? `https://picsum.photos/id/${props.postid}/280/180`
// })

const { loading, data: posts } = useFetch(computed(() => `https://jsonplaceholder.typicode.com/posts/${props.postid}`))
</script>


<template>
    <h1>article {{ id }}</h1>
    <article @click="toggleModal">
        <header>
            <img :src="thumbnail" alt="" />
        </header>
        <h3>{{ title }}</h3>
        {{ body }}
    </article>

    <Teleport to="body">
        <div v-if="open" class="modal">
            <fieldset>
                <label>
                Title
                <input
                    name="title"
                    v-model="title"
                />
                </label>
                <label>
                Content
                <textarea name="body" id="" :value="body" @input="updateBody"></textarea>
                </label>
            </fieldset>
            <button @click="toggleModal">Close</button>
        </div>
    </Teleport>
</template>