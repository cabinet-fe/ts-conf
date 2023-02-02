<template>{{ greeter }}: Hello {{ msg }}~</template>

<script lang="ts" setup>
defineProps({
  msg: String
})

const greeter = $shallowRef('Hodge')
</script>
