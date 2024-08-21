<script setup lang="ts">
import {  
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { defineProps } from 'vue'; 
import Box from './Box.vue';

const props = defineProps<{ items: MenuItem[] }>();
</script>

<template>
  <Box v-if="items && items.length > 0">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem v-for="item in props.items">
          <NuxtLink :to="item.link">
            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
              <Icon v-if="item.icon" :name="item.icon" class="mx-4" color="black"/>
              <p class="font-bold">{{ item.label }}</p>
            </NavigationMenuLink>
          </NuxtLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </Box>
</template>

<style scoped></style>
