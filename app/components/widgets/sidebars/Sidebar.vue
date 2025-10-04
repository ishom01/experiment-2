<script setup lang="ts">
import Vertical from '~/components/groups/Vertical.vue';
import SidebarGroup from './SidebarGroup.vue';
import SidebarItem from './SidebarItem.vue';
import Horizontal from '~/components/groups/Horizontal.vue';
import SpanWidget from '../SpanWidget.vue';

const menu: SidebarMenu = [
  { id: '1', icon: 'uil:apps', label: 'Home', href: '/' },
  { id: '2', icon: 'uil:shopping-cart', label: 'Orders', href: '/orders' },
  {
    id: '4',
    icon: 'uil:shopping-bag',
    label: 'Products',
    children: [
      { id: '4-1', label: 'Products', href: '/products' },
      { id: '4-2', label: 'Variants', href: '/variants' }
    ]
  },
  {
    id: '5',
    icon: 'majesticons:users-line',
    label: 'Employees',
    children: [
      { id: '5-1', label: 'Employees', href: '/employees' },
      { id: '5-2', label: 'Groups', href: '/groups' }
    ]
  },
  {
    id: '7',
    icon: 'uil:bell',
    label: 'Notification',
    href: '/notifications'
  },
];

const menuBottom: SidebarMenu = [
  {
    id: '6',
    icon: 'uil:cog',
    label: 'Settings',
    href: '/settings'
  },
  { id: '8', icon: 'uil:question-circle', label: 'Help', href: '/help' },
  { id: '9', icon: 'uil:sign-out-alt', label: 'Logout', href: '/logout' },
]
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
    <div class="fixed bottom-4 gap-2 flex flex-col w-56">
      <hr class="w-full border-t border-gray-200 mb-2" />
      <template v-for="item in menuBottom" :key="item.id">
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
      <Horizontal gap="gap-3" class="items-center" :class="'px-3 py-2 mt-2 bg-gray-100 rounded-lg'">
        <NuxtImg
          src="https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg"
          alt="Avatar"
          width="32"
          height="32"
          class="rounded-full"
        />
        <Vertical>
          <SpanWidget value="John Doe" class="font-medium" />
          <SpanWidget value="Admin" class="text-xs font-light" />
        </Vertical>
      </Horizontal>
    </div>
  </Vertical>
  
</template>

