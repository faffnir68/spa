import { onMounted, onUnmounted, ref } from 'vue'

export default function usePage() {
    const hash = parseHash()
    const page = ref(hash[0])
    let param = ref(hash[1])

    let removeListener

    onMounted(() => {
        const listener = () => {
            [page.value, param] = parseHash()
        }
        window.addEventListener("hashchange", listener)
        removeListener = () => {
            window.removeEventListener("hashchange", listener)
        }
    })

    onUnmounted(() => {
        removeListener()
    })

    return { page, param }
}

function parseHash() {
    return window.location.hash.replace('#', '').split(':')
}