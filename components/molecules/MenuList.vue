<script setup lang="ts">
import Box from '../atoms/Box.vue';
import { routes } from '~/app/routes';
import MenuListItem from '../atoms/MenuListItem.vue';

const menuList: MenuItem[] = [
  {
    label: 'Trang chủ',
    link: routes.ROOT.path
  },
  {
    label: 'Công cụ',
    link: routes.ABOUT.path
  },
  {
    label: 'Dự án',
    link: routes.ABOUT.path
  },
  {
    label: 'Tài liệu',
    link: routes.ABOUT.path
  },
  {
    label: 'Liên hệ',
    link: routes.ABOUT.path
  },
];
</script>

<template>
    <Box>
      <MenuListItem :items="menuList"/>
    </Box>
</template>