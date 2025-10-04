<script setup lang="ts">
import { useRoute } from 'vue-router'
import Horizontal from '~/components/groups/Horizontal.vue';
import Vertical from '~/components/groups/Vertical.vue';
import IconWidget from '../IconWidget.vue';
import SidebarItem from './SidebarItem.vue';
import SpanWidget from '../SpanWidget.vue';
const route = useRoute()
const props = withDefaults(defineProps<{
  item: SidebarGroup,
  isActive?: boolean,
}>(), {
  isActive: false,
})

const expandRef = ref(props.item.children?.some(child => route.path === child.href))

const isExpand = computed(() => {
  return expandRef.value || props.item.children?.some(child => route.path === child.href)
})
</script>

<template>
  <Vertical gap="gap-2" class="w-full">
    <Horizontal
      :bg="isActive || isExpand ? 'bg-secondary' : ''"
      padding="px-3 py-2"
      gap="gap-2"
      rounded="rounded-lg"
      class="group hover:text-hover-active"
      @click="expandRef = !expandRef"
      @keydown.enter="expandRef = !expandRef"
    >
      <IconWidget 
        :name="item?.icon ? item?.icon : 'ci:dot-04-l'" 
        :size="20" 
        :color="isActive || isExpand ? 'text-font-active' : 'text-font-black'" 
        class="group-hover:text-hover-active" 
      />
      <SpanWidget       
        :value="item?.label"
        :color="isActive || isExpand ? 'text-font-active' : 'text-font-black'" 
        class="group-hover:text-hover-active" 
      />
      <IconWidget 
        :name="expandRef ? 'uil:angle-up' : 'uil:angle-down'" 
        :size="24" 
        :color="isActive || isExpand ? 'text-font-active' : 'text-font-black'" 
        class="ml-auto group-hover:text-hover-active" 
      />
    </Horizontal>
    <SidebarItem
        v-if="expandRef"
        v-for="child in props.item.children"
        :key="child.id"
        :item="child"
        :isActive="$route.path === child.href"
      />
  </Vertical>
</template>
