<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <Header />
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/socketbear/vue-dev-guide" target="_blank">
        <span class="font-bold text-green-600">Vue Dev Guide</span> With Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <RouterLink class="icon-btn mx-2" to="/guide" :title="t('button.guide')">
      <div class="flex items-center mt-2">
        <p class="mr-1">
          가이드로 가기
        </p> <div i-carbon-link />
      </div>
    </RouterLink>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
