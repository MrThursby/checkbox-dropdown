<script lang="ts">
import { defineComponent, type PropType } from "vue";
import FormCheckbox from "@/components/FormCheckbox.vue";
import type { FormCheckboxListItem } from "@/types/form-checkbox-list-item";
import type { FormCheckboxListValue } from "@/types/form-checkbox-list-value";

export default defineComponent({
  name: "FormCheckboxList",
  components: { FormCheckbox },
  model: {
    prop: "value",
    event: "input",
  },
  methods: {
    onChange(event: boolean, id: number) {
      if (event) {
        // save the order of the checkboxes
        const value = this.list
          .filter((checkbox) => this.value.includes(checkbox.id) || checkbox.id === id)
          .map((checkbox) => checkbox.id);

        this.$emit("input", value);
        return;
      }

      const value = this.value.filter((i) => i !== id);
      this.$emit("input", value);
    },
  },
  props: {
    list: {
      type: Array as PropType<FormCheckboxListItem[]>,
      required: true,
    },
    value: {
      type: Array as PropType<FormCheckboxListValue>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="form-checkbox-list">
    <FormCheckbox
      v-for="item of list"
      :key="item.id"
      :id="'checkbox-' + item.id"
      :label="item.title"
      :disabled="item.disabled"
      :variant="item.variant"
      v-show="item.visible"
      :checked="value.includes(item.id)"
      @change="onChange($event, item.id)"
    />
  </div>
</template>

<style>
.form-checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>
