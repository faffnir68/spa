import { ref } from 'vue'

export default function usePage() {
    const page = ref('')
    const id = ref('')

    window.addEventListener('hashchange', () => {
        page.value = window.location.hash.replace('#', '')
        if(page.value.startsWith('post')) {
            page.value = 'post'
            if(Number.isInteger(parseInt(page.value.slice(-1)))) {
                id.value = page.value.slice(-1)
            }
        }
    })


    return { page, id }
}