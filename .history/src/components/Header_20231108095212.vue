<script lang="ts" setup>
import { isOpen } from '~/composables/utils'
const aside = ref(false)
const clickMenu = () => {
  aside.value = !aside.value
  isOpen(aside.value)
}
onMounted(() => { clickMenu() })
</script>

<template>
  <header class="header">
    <div class="forDoctor-head">
      <span>간호간병통합서비스</span>
    </div>
  </header>
</template>
