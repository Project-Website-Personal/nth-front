<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '~/lib/utils';
import { type HTMLAttributes } from 'vue'

const props = defineProps<{ 
  class?: HTMLAttributes['class'] 
}>();
</script>

<template>
  <Card :class="cn(props.class, $attrs.class ?? '')">
    <CardHeader>
      <CardTitle>
        <slot name="title" />
      </CardTitle>
      <CardDescription>
        <slot name="description" />
      </CardDescription>
    </CardHeader>
    <CardContent>
      <slot name="content" />
    </CardContent>
    <CardFooter>
      <slot name="footer" />
    </CardFooter>
  </Card>
</template>