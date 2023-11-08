<template>
  <div class="text-center text-gray-700 dark:text-gray-200 frameworkWrap">
    <!-- <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200"> -->
    <Header />
    <div class="contentWrap">
      <Sidebar />
      <div class="content">
        <RouterView />
      </div>
    </div>
  <!-- </main> -->
  </div>
</template>
