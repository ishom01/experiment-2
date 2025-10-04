<script setup lang="ts">
import Vertical from '~/components/groups/Vertical.vue';
import SidebarGroup from './SidebarGroup.vue';
import SidebarItem from './SidebarItem.vue';

const menu: SidebarMenu = [
  { id: '1', icon: 'uil:home', label: 'Home', href: '/' },
  { id: '2', icon: 'uil:settings', label: 'Settings', href: '/settings' },
  { id: '3', icon: 'uil:profile', label: 'Profile', href: '/profile' },
  { id: '4', icon: 'uil:folder', label: 'Projects', children: [
    { id: '4-1', label: 'Project A', href: '/asds'},
    { id: '4-2', label: 'Project B', href: '/projects/b'},
  ] },
  { id: '5', icon: 'uil:info-circle', label: 'About', children: [
    { id: '5-1', label: 'Company', href: '/about/company'},
    { id: '5-2', label: 'Team', href: '/about/team'},
  ] },
];
</script>

<template>
  <Vertical padding="p-4" gap="gap-2" class="w-64">
    <template v-for="item in menu" :key="item.id">
      <SidebarItem
        v-if="'href' in item"
        :item="item"
        :isActive="$route.path === item.href"
      />
      <SidebarGroup
        v-if ="'children' in item"
        :item="item"
        :isActive="false"
      />
    </template>
  </Vertical>
</template>

