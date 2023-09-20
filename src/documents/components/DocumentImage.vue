<script setup lang="ts">
import { computed, ref } from 'vue'
import ImageAlt from '@/documents/assets/document-image-alt.svg?url'

const props = defineProps<{
  src?: string
  crop?: boolean
}>()

const error = ref(false)
const image = computed(() =>
  (error.value || !props.src)
    ? ImageAlt
    : props.src,
)
</script>

<template>
  <div class="document-image" :class="{ crop: props.crop }">
    <img
      class="image"
      :src="image"
      alt="document image"
      @error="error = true"
    >
  </div>
</template>

<style scoped lang="scss">
.document-image {
  position: relative;

  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }


  &.crop {
    .image {
      object-fit: cover;
    }
  }
}
</style>
