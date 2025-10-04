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

// Smooth auto-height + fade transitions
const beforeEnter = (el: Element) => {
  const e = el as HTMLElement
  e.style.height = '0px'
  e.style.opacity = '0'
}
const enter = (el: Element, done: () => void) => {
  const e = el as HTMLElement
  e.style.transition = 'height 100ms cubic-bezier(0.25,1,0.5,1), opacity 100ms ease'
  // compute first to ensure correct height
  const target = e.scrollHeight
  // next frame apply target
  requestAnimationFrame(() => {
    e.style.height = `${target}px`
    e.style.opacity = '1'
  })
  const onEnd = (evt: TransitionEvent) => {
    if (evt.propertyName === 'height') {
      e.removeEventListener('transitionend', onEnd)
      done()
    }
  }
  e.addEventListener('transitionend', onEnd)
}
const afterEnter = (el: Element) => {
  const e = el as HTMLElement
  e.style.height = 'auto'
  e.style.transition = ''
}
const beforeLeave = (el: Element) => {
  const e = el as HTMLElement
  e.style.height = `${e.scrollHeight}px`
  e.style.opacity = '1'
  e.style.transition = ''
}
const leave = (el: Element, done: () => void) => {
  const e = el as HTMLElement
  e.style.transition = 'height 100ms cubic-bezier(0.55,0,0.1,1), opacity 100ms ease'
  requestAnimationFrame(() => {
    e.style.height = '0px'
    e.style.opacity = '0'
  })
  const onEnd = (evt: TransitionEvent) => {
    if (evt.propertyName === 'height') {
      e.removeEventListener('transitionend', onEnd)
      done()
    }
  }
  e.addEventListener('transitionend', onEnd)
}
const afterLeave = (el: Element) => {
  const e = el as HTMLElement
  e.style.transition = ''
}
</script>

<template>
  <Vertical gap="gap-2" class="w-full">
    <Horizontal
      :bg="isActive || isExpand ? 'bg-secondary' : ''"
      padding="px-3 py-2"
      gap="gap-3"
      rounded="rounded-lg"
      class="group hover:text-hover-active"
      @click="expandRef = !expandRef"
      @keydown.enter="expandRef = !expandRef"
    >
      <IconWidget 
        :name="item?.icon ? item?.icon : 'ci:dot-04-l'" 
        :size="20" 
        :color="isActive || isExpand ? 'text-font-active' : 'text-font-black'" 
        iconClass="group-hover:text-hover-active" 
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
        class="ml-auto" 
        iconClass="group-hover:text-hover-active" 
      />
    </Horizontal>

    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div
        v-show="expandRef"
        class="overflow-hidden"
      >
        <SidebarItem
          v-for="child in props.item.children"
          :key="child.id"
          :item="child"
          :isActive="$route.path === child.href"
        />
      </div>
    </Transition>
  </Vertical>
</template>
