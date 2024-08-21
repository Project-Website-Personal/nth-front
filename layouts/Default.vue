<script setup lang="ts">
import Header from '@/components/molecules/Header.vue';
import Footer from '@/components/molecules/Footer.vue';
import Box from '~/components/atoms/Box.vue';
</script>

<template>
  <div>
    <Header />
    <Box :class="'w-full max-w-screen-xl mx-auto min-h-screen py-6'">
      <slot />
    </Box>
    <Footer />
  </div>
</template>

<style scoped></style>
