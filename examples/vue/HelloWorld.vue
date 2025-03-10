<template>{{ greeter }}: Hello {{ msg }}~</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

defineProps({
  msg: String
})

const greeter = shallowRef('Hodge')
</script>
