<script setup lang="ts">
import Box from '../atoms/Box.vue';
import Logo from '../atoms/Logo.vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <Box>
    <Box class="w-full h-[310px] flex flex-col justify-center items-center shadow-lighter border-t-2 border-gray-200">
      <Box class="w-full max-w-screen-xl h-[204px] flex justify-between items-center">
        <Box class="flex flex-col justify-around h-full items-start">
          <Box class="flex items-center justify-between mb-2.5">
            <Logo />
          </Box>
          <Box class="flex cursor-pointer ml-2">
            <Icon name="logos:facebook" class="w-5 h-5" />
            <p class="ml-3.5 text-sm font-medium text-gray-500">Facebook</p>
          </Box>
          <Box class="flex cursor-pointer ml-2">
            <Icon name="logos:youtube-icon" class="w-5 h-5" />
            <p class="ml-3.5 text-sm font-medium text-gray-500">Youtube</p>
          </Box>
          <Box class="flex cursor-pointer ml-2">
            <Icon name="logos:github-icon" class="w-5 h-5" />
            <p class="ml-3.5 text-sm font-medium text-gray-500">Github</p>
          </Box>
          <Box class="flex cursor-pointer ml-2">
            <Icon name="logos:linkedin-icon" class="w-5 h-5" />
            <p class="ml-3.5 text-sm font-medium text-gray-500">Linkedin</p>
          </Box>
        </Box>
        <Box class="flex flex-col justify-around h-full items-start">
          <ul class="list-none mt-4">
            <li class="text-gray-800 font-extrabold mb-2">Dịch vụ</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Tour trong nước</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Vé máy bay</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Thuê xe</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Tuyển dụng</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Bảo hiểm du lịch</li>
          </ul>
        </Box>
        <Box class="flex flex-col justify-around h-full items-start">
          <ul class="list-none mt-4">
            <li class="text-gray-800 font-extrabold mb-2">Chăm sóc khách hàng</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Thẻ khách hàng</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Travel Voucher</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Bảo hiểm Covid 19</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Ý kiến khách hàng</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Phiếu góp ý</li>
          </ul>
        </Box>
        <Box class="flex flex-col justify-around h-full items-start">
          <ul class="list-none mt-4">
            <li class="text-gray-800 font-extrabold mb-2">Liên hệ</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Giới thiệu</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Chi nhánh</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Quy định bảo vệ</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Điều khoản chung</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Quy định thanh toán</li>
          </ul>
        </Box>
        <Box class="flex flex-col justify-around h-full items-start">
          <ul class="list-none mt-4">
            <li class="text-gray-800 font-extrabold mb-2">Thông tin</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Tuyến điểm</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Tin du lịch</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Tin lữ hành</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Tin địa điểm hot</li>
            <li class="cursor-pointer mb-2.5 text-sm font-normal text-gray-500">Tin mới</li>
          </ul>
        </Box>
      </Box>
    </Box>
    <Box class="w-full h-[80px]">
      <Box class="flex justify-between mx-auto items-center w-full max-w-screen-xl h-full text-gray-500">
        <p>Copyright © {{ currentYear }} - Cinenth Project</p>
        <Box class="flex justify-around h-full gap-2 items-center">
          <Box class="flex cursor-pointer ml-2">
            <Icon name="logos:facebook" class="w-5 h-5" />
            <p class="ml-2 text-sm font-medium text-gray-500">Facebook</p>
          </Box>
          <Box class="flex cursor-pointer ml-2">
            <Icon name="logos:youtube-icon" class="w-5 h-5" />
            <p class="ml-2 text-sm font-medium text-gray-500">Youtube</p>
          </Box>
          <Box class="flex cursor-pointer ml-2">
            <Icon name="logos:github-icon" class="w-5 h-5" />
            <p class="ml-2 text-sm font-medium text-gray-500">Github</p>
          </Box>
          <Box class="flex cursor-pointer ml-2">
            <Icon name="logos:linkedin-icon" class="w-5 h-5" />
            <p class="ml-2 text-sm font-medium text-gray-500">Linkedin</p>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
</template>

<style scoped></style>
