<script setup lang="ts">
import Card from '~/components/molecules/Card.vue';
import Label from '~/components/ui/label/Label.vue';
import Input from '~/components/ui/input/Input.vue';
import Box from '~/components/atoms/Box.vue';
import Checkbox from '~/components/ui/checkbox/Checkbox.vue';
import { routes } from '~/app/routes';
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate';
import * as z from 'zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { COMMON_MESSAGES, MESSAGES } from '~/constants/messages';
import { INPUT } from '~/constants/input'; 

const props = defineProps<{ route: Route  }>();
const isLogin = ref(true);
const title = ref(routes.LOGIN.title)

const formSchema = toTypedSchema(z.object({
  username: z.string().min(1, { message: COMMON_MESSAGES.required }),
  email: z.string().trim()
          .min(1, { message: COMMON_MESSAGES.required })
          .email({ message: COMMON_MESSAGES.invalid }),
  password: z.string().trim().min(1, { message: COMMON_MESSAGES.required }),
  rememberLogin: z.boolean().default(false).optional(),
}))

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    username: '',
    email: '',
    password: '',
    rememberLogin: false
  },
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

watch(
  () => props.route.path,
  (newPath) => {
    if (newPath === routes.REGISTER.path) {
      isLogin.value = false;
      title.value = routes.REGISTER.title;
    }
  },
  { immediate: true }
);
</script>

<template>
  <Box :class="'w-[1440px] h-screen mx-auto flex items-center justify-center'">
    <Card :class="'w-[460px] shadow'">
        <template #title>
          <Box :class="'w-full flex flex-col items-center gap-2'">
            <Icon name="tabler:brightness-auto-filled" class="text-[#62a0ea] w-20 h-20"/>
            <Label class="text-2xl">{{ title }}</Label>
          </Box>
        </template>
        <template #description>
          <Box :class="'w-full flex flex-col items-center gap-2'">
            <Label v-if="isLogin" class="text-md">
              {{ MESSAGES.LOGIN.dontHaveAccount }} 
              <NuxtLink 
                :to="routes.REGISTER.path" 
                class="text-[#62a0ea]">
                {{ MESSAGES.LOGIN.register }}
              </NuxtLink>
            </Label>
            <Label v-else class="text-md">
              {{ MESSAGES.REGISTER.haveAccount }} 
              <NuxtLink 
                :to="routes.LOGIN.path" 
                class="text-[#62a0ea]">
                {{ MESSAGES.REGISTER.login }}
              </NuxtLink>
            </Label>
          </Box>
        </template>
        <template #content>
          <form @submit="onSubmit" class="flex flex-col gap-6">
            <FormField v-if="!isLogin" v-slot="{ componentField, errors }" name="username">
              <FormItem>                  
                <FormLabel>
                  <Label>{{ INPUT.AUTH.username.title }}:</Label>
                </FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    :placeholder="INPUT.AUTH.username.placeholder" 
                    v-bind="componentField" 
                    :class="{ 'input-error': errors.length }" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField, errors }" name="email">
              <FormItem>                  
                <FormLabel>
                  <Label>{{ INPUT.AUTH.email.title }}:</Label>
                </FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    :placeholder="INPUT.AUTH.email.placeholder" 
                    v-bind="componentField" 
                    :class="{ 'input-error': errors.length }" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField, errors }" name="password">
              <FormItem>                  
                <FormLabel>
                  <Label>{{ INPUT.AUTH.password.title }}:</Label>
                </FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    :placeholder="INPUT.AUTH.password.placeholder" 
                    v-bind="componentField" 
                    :class="{ 'input-error': errors.length }" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ value, handleChange }" type="checkbox" name="rememberLogin">
              <FormItem class="flex flex-row items-start gap-x-3 space-y-0">
                <FormControl>
                  <Checkbox :checked="value" @update:checked="handleChange" />
                </FormControl>
                <Box class="space-y-1 leading-none">
                  <FormLabel>Remember me?</FormLabel>
                  <FormMessage />
                </Box>
              </FormItem>
            </FormField>
            <Button type="submit">
              {{ title }}
            </Button>
          </form>
        </template>
    </Card>
  </Box>
</template>

<style scoped>
.input-error {
  border-color: red;
}
</style>
