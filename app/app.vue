<script setup lang="ts">

</script>

<template>
  <div>
    <LayoutsVertical class="p-4 gap-3">
      <WidgetsIcon name="uil:github" size="12px" />
      <LayoutsHorizontal gap="gap-2" class="items-center"> 
        <WidgetsIcon name="uil:twitter" bg="bg-secondary" padding="px-0"/>
        <WidgetsSpan value="Nuxt Minimal Starter" />
      </LayoutsHorizontal>
      <WidgetsIcon name="uil:twitter" bg="bg-secondary" padding="px-0"/>
      <WidgetsIcon name="uil:bell" padding="p-3" rounded="rounded-full"   />
    </LayoutsVertical>
    <SidebarItem icon="uil:home" label="Home" :isActive="true" />
    <NuxtLayout :key="$route.fullPath">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

