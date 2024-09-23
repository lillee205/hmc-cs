<template>
  <v-data-table
    :headers="headers"
    :items="items"
    v-model="selected"
    show-select
    items-per-page="5"
  >
    <!-- I use a slot here to add a title to the database as by default, 
     the vue database does not come with one. The title is determined by what you pass
     in the parent (SecondComponent in this case). Try changing the value!-->
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
    </template>

    <!-- This is also a slot so that I can display the issues as little chips.
     This is a little more complex because you have to deconstruct the items a little
     to get the data you want. -->
    <template v-slot:item.issues="{ item }">
      <v-chip v-for="issue in item.issues"> {{ issue }} </v-chip>
    </template>
  </v-data-table>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  title: String,
});
const headers = [
  { title: "name", key: "name", sortable: true },
  { title: "location", key: "location", sortable: true },
  { title: "issues", key: "issues", sortable: false },
];
const selected = ref([]);
const items = [
  {
    name: "one",
    location: "greg",
    issues: ["screen flickers"],
  },
  {
    name: "two",
    location: "greg",
    issues: ["screen flickers", "missing mouse"],
  },
  {
    name: "three",
    location: "greg",
    issues: ["works"],
  },
];
</script>
