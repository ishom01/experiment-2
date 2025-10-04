
<script setup lang="ts">
const props = withDefaults(defineProps<{
  padding?: string
  rounded?: string,
  gap?: string
  bg?: string
  class?: string
}>(), {
  padding: 'p-0',
  rounded: 'rounded-lg',
  gap: 'gap-0',
})
</script>

<template>
  <div  
    :class="[
      'flex flex-col',
      props.padding,
      props.rounded,
      props.gap,
      props.bg,
      props.class
    ]"
  >
    <slot />
  </div>
</template>
