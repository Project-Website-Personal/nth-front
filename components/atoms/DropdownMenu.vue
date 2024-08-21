<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const props = defineProps<{ items: DropdownItem[] }>();
const handleClickItem = (item: DropdownItem) => {
    if (item.action) {
        item.action();
    }
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
        <slot />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" v-if="props.items && props.items.length > 0">
      <DropdownMenuItem v-for="item in props.items" @click="handleClickItem(item)">
        <Icon v-if="item.icon" :name="item.icon" class="mx-4" color="black"/>
        {{ item.label }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
