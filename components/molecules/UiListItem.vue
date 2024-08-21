<script setup lang="ts">
import Card from './Card.vue';
import Box from '../atoms/Box.vue';
import Dialog from '~/components/atoms/Dialog.vue';
import 'highlight.js/lib/common';
import { ref } from 'vue';
import {
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

const codeHtmlSnippet = ref(`<div class="music-waves-2">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
`);

const codeCssSnippet = ref(`.music-waves-2 {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.music-waves-2 > span {
  display: block;
  position: relative;
  background: #000;
  height: 100%;
  width: 1rem;
  border-radius: 1rem;
  margin: 0 0.2rem;
  animation: waves-2 1.2s linear infinite;
}

.music-waves-2 > span:nth-child(1) {
  animation-delay: 0s;
  background: #ff8c00;
}

.music-waves-2 > span:nth-child(2) {
  animation-delay: 0.3s;
  background: #ffff00;
}

.music-waves-2 > span:nth-child(3) {
  animation-delay: 0.6s;
  background: #26d53a;
}

.music-waves-2 > span:nth-child(4) {
  animation-delay: 0.9s;
  background: #26e6a3;
}

.music-waves-2 > span:nth-child(5) {
  animation-delay: 0.6s;
  background: #1da8e2;
}

.music-waves-2 > span:nth-child(6) {
  animation-delay: 0.3s;
  background: #5916ba;
}

.music-waves-2 > span:nth-child(7) {
  animation-delay: 0s;
  background: #d418d9;
}

@keyframes waves-2 {
  50% {
    height: 20%;
  }

  100% {
    height: 100%;
  }
}
`);
</script>

<template>
    <Card :class="'w-[400px] shadow-light mx-auto'" v-for="index in 12">
        <template #title>
        <Box :class="'w-full flex items-center justify-between gap-2'">
          <h4 class="relative z-10 flex items-center text-sm font-bold text-slate-500 gap-x-2">
              <span>Credit: </span>
              <span class="text-slate-400 max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap font-medium">bdq</span>
          </h4>
          <Dialog>
            <template #trigger>
              <Icon name="ic:baseline-remove-red-eye" class="w-7 h-7 cursor-pointer" />
            </template>
            <template #content>
              <!-- HTML Block -->
              <DialogHeader>
                <DialogTitle>HTML</DialogTitle>
              </DialogHeader>
              <highlightjs :code="codeHtmlSnippet"/>

              <!-- CSS Block -->
              <DialogHeader>
                <DialogTitle>CSS</DialogTitle>
              </DialogHeader>
              <Box :class="'overflow-y-auto min-h-[300px] h-[250px]'">
                <highlightjs :code="codeCssSnippet"/>
              </Box>
            </template>
          </Dialog>
        </Box>
        </template>
        <template #content>
          <Box :class="'w-full h-[120px] flex items-center justify-center relative'">
            <div class="music-waves-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Box>
        </template>
        <template #footer>
          <Box :class="'w-full flex items-center justify-between gap-2'">
            <h3 class="text-sm font-semibold card-title max-w-[100px] lg:max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">metronome</h3>
            <h4 class="relative z-10 flex items-center text-sm font-bold text-slate-500 gap-x-2">
              <span>Public at: </span>
              <span class="text-slate-400 max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap font-medium">15/07/2024</span>
            </h4>
          </Box>
        </template>
    </Card>
</template>

<style scoped>
.music-waves-2 {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.music-waves-2 > span {
  display: block;
  position: relative;
  background: #000;
  height: 100%;
  width: 1rem;
  border-radius: 1rem;
  margin: 0 0.2rem;
  animation: waves-2 1.2s linear infinite;
}

.music-waves-2 > span:nth-child(1) {
  animation-delay: 0s;
  background: #ff8c00;
}

.music-waves-2 > span:nth-child(2) {
  animation-delay: 0.3s;
  background: #ffff00;
}

.music-waves-2 > span:nth-child(3) {
  animation-delay: 0.6s;
  background: #26d53a;
}

.music-waves-2 > span:nth-child(4) {
  animation-delay: 0.9s;
  background: #26e6a3;
}

.music-waves-2 > span:nth-child(5) {
  animation-delay: 0.6s;
  background: #1da8e2;
}

.music-waves-2 > span:nth-child(6) {
  animation-delay: 0.3s;
  background: #5916ba;
}

.music-waves-2 > span:nth-child(7) {
  animation-delay: 0s;
  background: #d418d9;
}

@keyframes waves-2 {
  50% {
    height: 20%;
  }

  100% {
    height: 100%;
  }
}
</style>
