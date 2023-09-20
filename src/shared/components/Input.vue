<script setup lang="ts">
import { useModel } from 'vue'
import Spinner from '@/shared/assets/spinner.svg'

const props = defineProps<{
  modelValue: string
  placeholder?: string
  loading?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const value = useModel(props, 'modelValue')
</script>

<template>
  <div class="input" :class="{ loading: props.loading }">
    <input v-model="value" :placeholder="props.placeholder" type="text" class="input-internal">

    <Transition>
      <Spinner v-show="props.loading" class="spinner" />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/constants";

.input {
  position: relative;
  display: flex;

  .input-internal {
    flex: 1;
    padding: 16px 24px ;
    border: constants.$effect-border;
    border-radius: constants.$effect-border-radius;
    outline: 2px solid transparent;
    transition: 0.2s ease-out;

    &:focus {
      outline-color: rgba(constants.$color-primary, 0.5);
      transition-duration: 0.15s;
    }
  }

  .spinner {
    position: absolute;
    right: 10px;
    top: calc(50% - 15px);
    width: 30px;
    height: 30px;
    fill: constants.$color-inactive;

    &.v-enter-active,
    &.v-leave-active {
      transition: 0.2s ease;
    }

    &.v-enter-from,
    &.v-leave-to {
      opacity: 0;
    }
  }

  &.loading {
    .input-internal {
      padding-right: 44px;
    }
  }
}
</style>
