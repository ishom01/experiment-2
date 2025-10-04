<script setup lang="ts">
import Horizontal from '~/components/groups/Horizontal.vue';
import IconWidget from '../IconWidget.vue';
import SpanWidget from '../SpanWidget.vue';

withDefaults(defineProps<{
  item: SidebarItem,
  isActive?: boolean,
}>(), {
  isActive: false,
})
</script>

<template>
  <Horizontal
    :bg="isActive ? 'bg-secondary' : ''"
    padding="px-3 py-2"
    gap="gap-2"
    rounded="rounded-lg"
    class="group hover:text-hover-active"
  >
    <IconWidget 
      :name="item?.icon ? item?.icon : 'ci:dot-04-l'" 
      :size="20" 
      :color="isActive ? 'text-font-active' : 'text-font-black'" 
      iconClass="group-hover:text-hover-active" 
    />
    <SpanWidget       
      :value="item?.label"
      :color="isActive ? 'text-font-active' : 'text-font-black'" 
      class="group-hover:text-hover-active" 
    />
  </Horizontal>
</template>

