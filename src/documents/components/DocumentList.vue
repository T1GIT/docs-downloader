<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useDocumentsStore } from '@/documents/stores/documents'
import DocumentItem from '@/documents/components/DocumentItem.vue'
import Input from '@/shared/components/Input.vue'

const documentsStore = useDocumentsStore()

const { documents, search, loading } = storeToRefs(documentsStore)

const listKey = computed(() => documents.value.slice(0, 10).map(({ id }) => id).join())
</script>

<template>
  <div class="document-list">
    <div class="search">
      <label class="label">Поиск документа</label>
      <Input v-model="search" placeholder="Введите ID документа" :loading="loading" />
    </div>

    <div class="results">
      <label class="label">Результаты</label>

      <Transition mode="out-in">
        <div v-if="documents.length" :key="listKey" class="list">
          <DocumentItem
            v-for="document in documents"
            :key="document.id"
            :document="document"
            class="document-item"
          />
        </div>

        <span v-else class="empty">
          Ничего не найдено
        </span>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/constants";

.document-list {
  display: flex;
  flex-direction: column;
  gap: 29px;

  .search {
    padding: 0 22px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    .label {
      font-size: constants.$font-size-h4;
      font-weight: 600;
    }

  }

  .results {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .list, .empty {
      &.v-enter-active,
      &.v-leave-active {
        transition: 0.2s ease;
      }

      &.v-enter-from,
      &.v-leave-to {
        opacity: 0;
      }
    }

    .label {
      margin-bottom: 4px;
      padding: 0 22px 0 20px;
      font-size: constants.$font-size-h4;
      font-weight: 600;
    }

    .list {
      padding: 10px 22px 20px 20px;
      flex: 1;
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 18px;

      .document-item {
        flex: none;
      }
    }

    .empty {
      padding: 10px 22px 0 20px;
      color: constants.$color-inactive;
    }
  }
}
</style>
