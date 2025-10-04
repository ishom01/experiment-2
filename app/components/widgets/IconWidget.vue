<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string
  size?: string | number
  padding?: string
  rounded?: string
  bg?: string
  color?: string
  class?: string
  hoverGroup?: boolean
}>(), {
  size: 24,
  padding: 'p-0',
  rounded: 'rounded-md',
  color: 'text-font-black',
})

const pxSize = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size
)
</script>

<template>
  <span
    :class="[
      'inline-flex items-center justify-center align-middle',
      padding,
      rounded,
      bg,
      props.class,
    ]"
  >
    <Icon :name="name" :size="pxSize" :class="[color, props.class]" />
  </span>
</template>