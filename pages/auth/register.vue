<script setup lang="ts">
import LoginRegisterForm from '~/components/organisms/auth/LoginRegisterForm.vue';
import { useRoute } from '#vue-router';

const route: Route = useRoute();
</script>

<template>
    <LoginRegisterForm :route="route"/>
</template>