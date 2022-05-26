<script setup>
  import {
    MinusCircleIcon,
    PlusCircleIcon,
  } from '@heroicons/vue/outline/esm/index.js'
  import { useCounterStore } from '~/store/counter'
  const counterStore = useCounterStore()
  const { increment, decrement } = counterStore
  const counter = computed(() => counterStore.counter)
</script>
<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen space-y-4 text-white bg-gray-800"
  >
    <h1 class="text-4xl font-black">IT'S A TEXT</h1>
    <span class="text-2xl">{{ counter }}</span>
    <div class="flex space-x-2">
      <button
        class="p-2 font-semibold text-white transition-transform duration-200 bg-gray-600 rounded-md shadow-md hover:-translate-y-1 active:translate-y-0"
        @click="increment"
      >
        <PlusCircleIcon class="w-8 h-8" />
      </button>
      <button
        class="p-2 font-semibold text-white transition-transform duration-200 bg-gray-600 rounded-md shadow-md hover:-translate-y-1 active:translate-y-0"
        @click="decrement"
      >
        <MinusCircleIcon class="w-8 h-8" />
      </button>
    </div>
  </div>
</template>
