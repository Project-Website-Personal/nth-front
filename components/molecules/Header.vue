<script setup lang="ts">
import Logo from '../atoms/Logo.vue';
import Box from '../atoms/Box.vue';
import MenuList from './MenuList.vue';
import MenuHeader from './MenuHeader.vue';
import Label from '../ui/label/Label.vue';

// Get the current date and format it
const currentDate = ref(new Date());
const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

const formattedDate = ref(`${daysOfWeek[currentDate.value.getDay()]}, ${currentDate.value.getDate()}/${currentDate.value.getMonth() + 1}/${currentDate.value.getFullYear()}`);
</script>

<template>
  <Box :class="'h-auto w-full flex justify-center header-border'">
      <Box :class="'h-20 max-w-screen-xl py-4 w-full flex justify-between items-center gap-2'">
        <Box :class="'flex items-center gap-2 w-1/3'">
          <Box class="flex justify-around h-full gap-2 items-center border-r-2 pr-2">
            <Box class="flex cursor-pointer ml-2">
              <Icon name="logos:facebook" class="w-5 h-5" />
            </Box>
            <Box class="flex cursor-pointer ml-2">
              <Icon name="logos:youtube-icon" class="w-5 h-5" />
            </Box>
            <Box class="flex cursor-pointer ml-2">
              <Icon name="logos:github-icon" class="w-5 h-5" />
            </Box>
            <Box class="flex cursor-pointer ml-2">
              <Icon name="logos:linkedin-icon" class="w-5 h-5" />
            </Box>
          </Box>
          <Box>
              <Label class="text-secondary">{{ formattedDate }}</Label>
          </Box>
        </Box>
        <Box :class="'flex w-28 w-1/3 justify-center'">
          <Logo />
        </Box>
        <MenuHeader :class="'w-1/3'" />
      </Box>
  </Box>
  <Box :class="'h-auto w-full header-border'">
    <Box :class="'gap-8 mx-auto max-w-screen-xl flex justify-between items-center'">
      <Box :class="'max-w-screen-xl py-4 w-full flex justify-center items-center gap-2'">
        <MenuList />
      </Box>
    </Box>
  </Box>
</template>

<style scoped>
.header-border{
  border-bottom: 1px solid #eae8ea;
}
</style>
