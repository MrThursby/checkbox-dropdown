<script setup lang="ts">
import { ref } from "vue";
import FormCheckboxList from "@/components/FormCheckboxList.vue";
import type { FormCheckboxListItem } from "@/types/form-checkbox-list-item";
import AppContainer from "@/components/AppContainer.vue";
import AppButton from "@/components/AppButton.vue";
import IconDots from "@/components/icons/IconDots.vue";

const checkboxes: FormCheckboxListItem[] = [
  {
    id: 1,
    title: "apple",
    visible: true,
    disabled: true,
  },
  {
    id: 2,
    title: "melon",
    visible: false,
  },
  {
    id: 3,
    title: "pineapple",
    visible: true,
  },
  {
    id: 4,
    title: "disabled checked",
    visible: true,
    disabled: true,
  },
  {
    id: 5,
    title: "toggle",
    visible: true,
    variant: "toggle",
  },
];

const checkboxesValue = ref([4]);
</script>

<template>
  <div id="app" class="app">
    <AppContainer>
      <FormCheckboxList
        :list="checkboxes"
        v-model="checkboxesValue"
        style="margin-bottom: 50px"
      />

      <AppButton><IconDots /></AppButton>
    </AppContainer>
  </div>
</template>

<style>
.app {
  padding-top: 2rem;
}
</style>
