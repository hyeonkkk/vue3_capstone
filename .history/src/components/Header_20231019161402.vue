<script lang="ts" setup>
import { isOpen } from '~/composables/utils'
const aside = ref(true)
const clickMenu = () => {
  aside.value = !aside.value
  isOpen(aside.value)
}
onMounted(clickMenu)
</script>

<template>
  <header class="header">
    <div class="forDoctor-head">
      <div class="menu" i-carbon:menu color="white" @click="clickMenu" />
      <img src="/src/styles/img/dashmain_logo.png" alt="abacus_logo">
      <span>의료 업무지원 플랫폼</span>
    </div>
  </header>
</template>
