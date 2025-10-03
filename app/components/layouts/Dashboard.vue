<script setup lang="ts">
</script>
<template>
    <GroupHorizontal class="h-screen items-start">
        <SidebarLayout/>
        <div class="flex flex-col flex-1 overflow-hidden">
            <!-- Topbar -->
            <Topbar />
            
            <!-- Main content -->
            <main 
                :class="[
                'flex-1 overflow-x-hidden overflow-y-auto transition-all duration-300 ease-in-out',
                'lg:ml-0'
                ]"
            >
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <slot />
                </div>
            </main>
        </div>
    </GroupHorizontal>
</template>