<script setup lang="ts">
import Horizontal from '../groups/Horizontal.vue';
import Sidebar from '../widgets/sidebars/Sidebar.vue';
import Toolbar from '../widgets/toolbars/Toolbar.vue';

</script>
<template>
    <Horizontal class="h-screen items-start">
        <Sidebar/>
        <div class="flex flex-col flex-1 overflow-hidden">
            <Toolbar title="Dashboard" />
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
    </Horizontal>
</template>