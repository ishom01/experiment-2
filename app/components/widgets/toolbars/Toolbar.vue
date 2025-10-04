<script setup lang="ts">
import Horizontal from '~/components/groups/Horizontal.vue';
import SpanWidget from '../SpanWidget.vue';
import IconWidget from '../IconWidget.vue';

const props = withDefaults(defineProps<{
    title: string
}>(), {
    title: 'Toolbar'
})

</script>
<template>
    <Horizontal :gap="'gap-4'" class="py-4 px-4 bg-white">
        <IconWidget 
            name="ci:hamburger-lg" size="24" 
            :padding="'p-2'" 
            :bg="'hover:bg-secondary '" 
            :rounded="'rounded-full'" 
            class="group hover:text-hover-active"
            iconClass="group-hover:text-font-active" />
        <SpanWidget :value="props.title" :size="18" class="font-semibold" />
        <slot />
    </Horizontal>
</template>