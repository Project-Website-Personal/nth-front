<script setup lang="ts">
import Box from '../atoms/Box.vue';
import Button from '../ui/button/Button.vue';
import { routes } from '~/app/routes';
import MenuColorMode from './MenuColorMode.vue';
</script>

<template>
  <Box :class="'flex gap-2 items-center justify-end'">
    <MenuColorMode />
    <NuxtLink :to="routes.LOGIN.path">
      <Button class="">{{ routes.LOGIN.title }}</Button>
    </NuxtLink>
  </Box>
</template>

<style scoped></style>
