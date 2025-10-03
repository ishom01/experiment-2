<script setup lang="ts">
withDefaults(defineProps<{
  item: SidebarItem,
  isActive?: boolean,
}>(), {
  isActive: false,
})
</script>

<template>
  <GroupHorizontal
    :bg="isActive ? 'bg-secondary' : ''"
    padding="px-3 py-2"
    gap="gap-2"
    rounded="rounded-lg"
    class="group hover:text-hover-active"
  >
    <Icon :name="item?.icon ? item?.icon : 'ci:dot-04-l'" :size="20" :color="isActive ? 'text-font-active' : 'text-font-black'" class="group-hover:text-hover-active" />
    <WidgetsSpan class="text-font-black group-hover:text-hover-active" :value="item?.label"></WidgetsSpan>
  </GroupHorizontal>
</template>

