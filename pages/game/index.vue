
<template>
    <client-only>
      <div class="flex flex-col  justify-between items-center h-screen">
        <div class="flex flex-col items-center">
          Game header
        </div>
        <div class="flex flex-col items-center">
            {{ questions[currentIndex].title }}
        </div>
        <div class="flex flex-col w-full">
            <button v-for="option in 3" :key="option" class="m-5 border border-gray-500 rounded-md bg-gray-200 hover:bg-gray-300"
              @click="selectAnswer(option)" :class="{ 'active': isSelected === option }" :style="{ border: isSelected === option ? '2px solid black' : 'none' }">
            {{ option }}
          </button>
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
import axios from 'axios';

const router = useRouter();
useHead({
    title: `Game Index`,
});

definePageMeta({
  layout: 'front'
})

const isSelected = ref();

const questions = [
    { index: 1, title: 'Q1', question: 'Q1 xxx' },
    { index: 2, title: 'Q2', question: 'Q2 xxx' },
    { index: 3, title: 'Q3', question: 'Q3 xxx' },
    { index: 4, title: 'Q4', question: 'Q4 xxx' },
    { index: 5, title: 'Q5', question: 'Q5 xxx' }
];
const answerObject = ref([]);

const goToNextIndex = () => {
  
  if (!isSelected.value) {
    return;
  }
  if (currentIndex.value + 1 < questions.length) {
    answerObject.value.push(isSelected.value);
    currentIndex.value++;
    console.log('Index:', currentIndex);
  } else {
    answerObject.value.push(isSelected.value);
    currentIndex.value++;
    console.log('Index:', currentIndex);
    sendAnswer();
    router.push('/result');
  }
  console.log(answerObject.value);
  isSelected.value = null;
};

const currentIndex = ref(0);

const selectAnswer = (option) => {
  if (isSelected.value === option) {
    isSelected.value = false;
  } else {
    isSelected.value = option;
  }
  console.log(isSelected.value);
}

const sendAnswer = async() => {
  try {
    // Send a POST request to the API
    const postData = {
      answer: answerObject.value
    };

    const response = await axios.post('/api/selected-answer', postData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token'
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

</script>