<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div>
    Main
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
