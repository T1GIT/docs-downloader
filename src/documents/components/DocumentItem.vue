<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import type { Document } from '@/documents/dto/document'
import { useDocumentsStore } from '@/documents/stores/documents'
import DocumentImage from '@/documents/components/DocumentImage.vue'

const props = defineProps<{
  document: Document
}>()

const { document } = toRefs(props)

const documentsStore = useDocumentsStore()
const { selectedId } = storeToRefs(documentsStore)
const selected = computed(() => document.value.id === selectedId.value)

function handleClick() {
  if (selectedId.value === document.value.id)
    selectedId.value = undefined
  else
    documentsStore.selectedId = document.value.id

}
</script>

<template>
  <div class="document-item" :class="{ selected }" @click="handleClick">
    <DocumentImage class="image" :src="document.image" crop />

    <div class="info">
      <span class="name">{{ document.name }}</span>
      <span class="size">12 MB</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/constants";

.document-item {
  display: flex;
  overflow: hidden;
  border-radius: constants.$effect-border-radius;
  box-shadow: constants.$effect-box-shadow;
  cursor: pointer;

  .image {
    width: 70px;
    height: 70px;
  }

  .info {
    flex: 1;
    padding: 15px;
    border-left: constants.$effect-border;
    display: flex;
    flex-direction: column;
    gap: 6px;
    transition: 0.2s ease;

    .name {
      font-weight: 600;
      transition: 0.2s ease;
    }

    .size {
      color: constants.$color-inactive;
      transition: 0.2s ease;
    }
  }

  &.selected {
    .info {
      background: constants.$color-primary;
      border-left-color: transparent;

      .name, .size {
        color: constants.$color-surface-2;
      }
    }
  }
}
</style>
