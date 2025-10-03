<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const props = withDefaults(defineProps<{
  item: SidebarGroup,
  isActive?: boolean,
}>(), {
  isActive: false,
  isOpen: false,
})

const expandRef = ref(props.item.children?.some(child => route.path === child.href))

const isExpand = computed(() => {
  return expandRef.value || props.item.children?.some(child => route.path === child.href)
})
</script>

<template>
  <GroupVertical gap="gap-2" class="w-full">
    <GroupHorizontal
      :bg="isActive || isExpand ? 'bg-secondary' : ''"
      padding="px-3 py-2"
      gap="gap-2"
      rounded="rounded-lg"
      class="group hover:text-hover-active"
      @click="expandRef = !expandRef"
    >
      <Icon :name="item?.icon ? item?.icon : 'ci:dot-04-l'" :size="20" :color="isActive || isExpand ? 'text-font-active' : 'text-font-black'" class="group-hover:text-hover-active" />
      <WidgetsSpan class="text-font-black group-hover:text-hover-active" :value="item?.label"></WidgetsSpan>
      <Icon :name="expandRef ? 'uil:angle-up' : 'uil:angle-down'" :size="24" :color="isActive || isExpand ? 'text-font-active' : 'text-font-black'" class="ml-auto group-hover:text-hover-active" />
    </GroupHorizontal>
    <SidebarItem
        v-if="expandRef"
        v-for="child in props.item.children"
        :key="child.id"
        :item="child"
        :isActive="$route.path === child.href"
      />
  </GroupVertical>
</template>
