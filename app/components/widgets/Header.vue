
<script setup lang="ts">
const props = withDefaults(defineProps<{
  value: string,
  size?: string,
  color?: string
  class?: string
}>(), {
  size: 'text-base',
  padding: 'p-0',
  color: 'text-font-black',
})

const pxSize = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)
</script>

<template>
  <h1 :class="[pxSize, props.color, props.class]">
    {{ value }}
  </h1>
</template>
