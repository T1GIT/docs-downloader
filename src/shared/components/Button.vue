<script setup lang="ts">
const props = defineProps<{
  label: string
  severity: 'primary' | 'danger'
  disabled?: boolean
}>()
</script>

<template>
  <button class="button" :class="[`severity-${props.severity}`, { disabled: props.disabled }]">
    {{ props.label }}
  </button>
</template>

<style scoped lang="scss">
@use "@/shared/styles/constants";

  .button {
    padding: 8px 32px;
    background: none;
    border: 1px solid transparent;
    border-radius: constants.$effect-border-radius;
    outline: 2px solid transparent;
    cursor: pointer;
    transition: 0.2s ease;

    &.severity-primary {
      color: constants.$color-primary;
      border-color: constants.$color-primary;
    }

    &.severity-danger {
      color: constants.$color-danger;
      border-color: constants.$color-danger;
    }

    &:focus {
      transition-duration: 0.15s;

      &.severity-primary {
        outline-color: rgba(constants.$color-primary, 0.5);
      }

      &.severity-danger {
        outline-color: rgba(constants.$color-danger, 0.5);
      }
    }

    &:hover:not(.disabled) {
      color: constants.$color-surface-2;
      transition: 0.15s ease-out;

      &.severity-primary {
        background: constants.$color-primary;
      }

      &.severity-danger {
        background: constants.$color-danger;
      }
    }

    &.disabled {
      cursor: not-allowed;
      color: constants.$color-inactive;
      border-color: constants.$color-inactive;
    }
  }
</style>
