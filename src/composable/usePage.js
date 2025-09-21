import { ref } from 'vue'

export default function usePage() {
    const page = ref('')

    window.addEventListener('hashchange', () => {
        page.value = window.location.hash.replace('#', '')
    })

    return { page }
}