<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon: string,
  label: string,
  isActive?: boolean,
  isMinimized?: boolean,
}>(), {
  isActive: false,
  isMinimized: false,
})

const isFocused = ref(false)

function onFocus() {
  isFocused.value = true
}

function onBlur() {
  isFocused.value = false
}
</script>

<template>
  <LayoutsHorizontal
    bg="bg-secondary"
    padding="px-3 py-2"
    gap="gap-2"
    rounded="rounded-lg"
    class="[&>>*]:hover:scale-110 [&>]*]:transition-transform [&>]*]:duration-200 [&>]*]:ease-in-out"
    @focus="onFocus"
    @blur="onBlur"
  >
    <WidgetsIcon :name="icon" size="w-12" :class="{ 'text-font-active': isFocused }" />
    <WidgetsSpan v-if="!props.isMinimized" :value="label" :class="{ 'bg-active text-active': props.isActive || isFocused }" class="hover:text-hover-active" />
  </LayoutsHorizontal>
</template>

