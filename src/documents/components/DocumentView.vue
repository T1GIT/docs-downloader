<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDocumentsStore } from '@/documents/stores/documents'
import DocumentImage from '@/documents/components/DocumentImage.vue'
import Button from '@/shared/components/Button.vue'

const documentsStore = useDocumentsStore()

const { selectedDocument } = storeToRefs(documentsStore)

function download() {
  if (selectedDocument.value) {
    const file = new Blob([selectedDocument.value.description], { type: 'text/plain' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(file)
    link.download = `${selectedDocument.value.name}.txt`
    link.click()
    URL.revokeObjectURL(link.href)
  }
}
</script>

<template>
  <Transition mode="out-in">
    <div :key="selectedDocument?.id" class="document-view">
      <template v-if="selectedDocument">
        <DocumentImage class="image" :src="selectedDocument.image" />


        <div class="info">
          <span class="name">{{ selectedDocument.name }}</span>

          <div class="controls">
            <Button label="Скачать" severity="primary" @click="download" />
            <Button label="Удалить" severity="danger" :disabled="!selectedDocument.image" />
          </div>

          <div class="description">
            <span class="title">Описание:</span>
            <span class="text">{{ selectedDocument.description }}</span>
          </div>
        </div>
      </template>

      <span v-else class="empty">Выберите документ, чтобы посмотреть его содержимое</span>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@use "@/shared/styles/constants";

.document-view {
  padding: 30px;
  display: flex;
  gap: 61px;
  align-items: flex-start;
  overflow: auto;

  &.v-enter-active,
  &.v-leave-active {
    transition: 0.2s ease;
  }

  &.v-enter-from,
  &.v-leave-to {
    opacity: 0;
  }

  .image, .info {
    flex: 1 1 0;
  }

  .image {
    max-width: 600px;
  }

  .info {
    display: flex;
    flex-direction: column;

    .name {
      margin-bottom: 14px;
      font-size: constants.$font-size-h4;
      font-weight: 600;
    }

    .controls {
      margin-bottom: 47px;
      display: flex;
      gap: 17px;
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 14px;

      .title {
        font-size: constants.$font-size-h4;
        font-weight: 600;
      }

      .text {
        color: constants.$color-inactive;
      }
    }
  }

  .empty {
    margin: auto;
    text-align: center;
    color: constants.$color-inactive;
  }
}

@media (max-width: constants.$breakpoint-lg) {
  .document-view {
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .image {
      max-width: 100%;
    }

    .info {
      align-items: center;

      .controls {
        margin-bottom: 30px;
      }

      .description {
        align-self: flex-start;
      }
    }
  }
}
</style>
