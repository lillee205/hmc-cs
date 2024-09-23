<template>
<v-btn @click="triggerClick">Click me!</v-btn>
<v-card title = "Surprise!" v-show="showCard"></v-card>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const showCard = ref(false);
function triggerClick(event) {
  // This gives you misc details about the click event when it's triggered
  console.log(event)
  // When you click the button, the variable showCard is set to true
  // which makes the card appear on the screen
  showCard.value = true; 
}
</script>
