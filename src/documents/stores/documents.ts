import { defineStore } from 'pinia'
import { computed, readonly, ref, shallowRef, watch } from 'vue'
import { documentsService } from '@/documents/services/documents'
import type { Document } from '@/documents/dto/document'

export const useDocumentsStore = defineStore('documents', () => {
  const documents = shallowRef<Document[]>([])
  const search = shallowRef<string>('')
  const loading = ref(false)
  const selectedId = ref<number>()

  const selectedDocument = computed(() => documents.value.find(({ id }) => id === selectedId.value))

  async function fetch() {
    loading.value = true
    try {
      documents.value = await documentsService.getAll(search.value)
      const selectedExists = documents.value.some(({ id }) => id === selectedId.value)
      if (!selectedExists)
        selectedId.value = undefined
    }
    catch (e) {
      console.error(e)
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так')
    }
    finally {
      loading.value = false
    }
  }
  watch(search, fetch, { immediate: true })


  return {
    search,
    selectedId,

    documents: readonly(documents),
    loading: readonly(loading),
    selectedDocument,
  }
})
