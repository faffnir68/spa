<script setup>
import { reactive, ref, onMounted, computed } from 'vue'


const props = defineProps({
    id: Number,
    title: String,
    body: String
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
        <header>{{ props.title }}</header>
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
</style>