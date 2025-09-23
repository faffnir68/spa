import { reactive, ref, onMounted, computed, watch } from 'vue'

export default function useFetch(url) {
    const data = ref(null)
    const loading = ref(false)
    const error = ref(null) 

    watch(url, async (urlValue) => {
        try {
            loading.value = true
            const response = await fetch(urlValue)
            if(!response.ok) throw new Error('Failed to fetch data')
            data.value = await response.json()
        }
        catch(error) {
            console.log('Error : ' + error)
        }
        finally {
            loading.value = false
        }
    }, { immediate: true })

    return { data, loading, error }
}