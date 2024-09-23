<template>
<v-card title="This is the second page" text="Add something newwwwwwwwwwwwwww!"></v-card>
<ExampleDatabase :title="databaseTitle"/>
</template>

<script setup lang="ts">
import ExampleDatabase from './ExampleDatabase.vue';

const databaseTitle = "Change the database title"
</script>
