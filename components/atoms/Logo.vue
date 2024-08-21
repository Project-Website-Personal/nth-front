<script setup lang="ts">
import { routes } from '~/app/routes';
import Box from './Box.vue';

const onClickLogo = () => {
  window.location.href = routes.ROOT.path;
}
</script>

<template>
  <Box :class="'cursor-pointer flex items-center justify-center'" @click="onClickLogo">
    <Icon name="tabler:brightness-auto-filled" class="text-[#62a0ea] w-12 h-12"  />
  </Box>
</template>

<style scoped></style>
