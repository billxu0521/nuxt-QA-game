
<template>
    <client-only>
      <div class="flex flex-col  justify-between items-center h-screen">
        <div class="flex flex-col items-center">
          Result header
        </div>
        <div class="flex flex-col items-center">
            Finished
        </div>
        <div class="flex py-2 px-4 justify-between mb-10">
          
        </div>
        
      </div>
    </client-only>
  </template>

<script setup lang="ts">
useHead({
    title: `Result`,
});

definePageMeta({
  layout: 'front'
})

</script>