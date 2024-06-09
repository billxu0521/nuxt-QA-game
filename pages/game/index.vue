
<template>
    <client-only>
      <div class="flex flex-col  justify-between items-center h-screen">
        <div class="flex flex-col items-center">
          Game header
        </div>
        <div class="flex flex-col items-center">
            {{ questions[currentIndex].title }}
        </div>
        <div class="flex py-2 px-4 justify-between mb-10">
          <button @click="$router.push('/')" class="border border-gray-500 rounded-md bg-gray-200 hover:bg-gray-300 ">
          Go to Game
        </button>
        <button @click="goToNextIndex()" class="border border-gray-500 rounded-md bg-gray-200 hover:bg-gray-300 ">
         Next
        </button>
        </div>
        
      </div>
    </client-only>
  </template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
    title: `Game Index`,
});

definePageMeta({
  layout: 'front'
})

const questions = [
    { index: 1, title: 'Q1', question: 'Q1 xxx' },
    { index: 2, title: 'Q2', question: 'Q2 xxx' },
    { index: 3, title: 'Q3', question: 'Q3 xxx' },
    { index: 4, title: 'Q4', question: 'Q4 xxx' },
    { index: 5, title: 'Q5', question: 'Q5 xxx' }
];

const currentIndex = ref(0);
const goToNextIndex =()=>{
    if(currentIndex.value + 1 !== questions.length){
        currentIndex.value ++;
        console.log('Index:',currentIndex);
    }else{    
        router.push('/result');
    }
    
    
}
</script>