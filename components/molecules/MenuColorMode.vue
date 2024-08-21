<script setup lang="ts">
import Box from '../atoms/Box.vue';
import DropdownMenu from '../atoms/DropdownMenu.vue';
import Button from '../ui/button/Button.vue';

const colorMode = useColorMode()
const menuColorMode: DropdownItem[] = [
  {
    label: 'Light',
    action: () => { colorMode.preference = 'light'; }
  },
  {
    label: 'Dark',
    action: () => { colorMode.preference = 'dark'; }
  }
];

</script>

<template>
  <Box>
    <DropdownMenu :items="menuColorMode">
      <Button variant="ghost">
        <Icon name="radix-icons:moon" class="h-[1.7rem] w-[1.7rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon name="radix-icons:sun" class="absolute h-[1.7rem] w-[1.7rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </DropdownMenu>
  </Box>
</template>