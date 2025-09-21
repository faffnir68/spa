<script setup>
import { reactive, ref, onMounted, computed } from 'vue'


const props = defineProps({
    postid: Number,
    title: String,
    body: String,
    post: Object
})


const thumbnail = computed(() => {
    return `https://picsum.photos/id/${props.postid}/280/180`
})

const title = defineModel('title')

const emit = defineEmits(['update:content'])
const updateBody = (e) => {
    emit('update:content', e.target.value)
}

const open = ref(false)

function toggleModal() {
    open.value === false ? open.value = true : open.value = false
}

</script>

<template>
    <article @click="toggleModal">
        <header>
            <img :src="thumbnail" alt="" />
        </header>
        <h3>{{ props.title }}</h3>
        {{ props.body }}
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
                <textarea name="body" id="" :value="props.body" @input="updateBody"></textarea>
                </label>
            </fieldset>
            <button @click="toggleModal">Close</button>
        </div>
    </Teleport>

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