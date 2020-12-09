<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="employees"
      :items-per-page="5"
      class="elevation-1"
      :multi-sort="true"
      @click:row="selectRow"
    />
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      headers: [
        { text: 'Employee ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Position Title', value: 'title' },
        { text: 'Salary', value: 'salary' }
      ],
      employees: this.data
    }
  },
  methods: {
    selectRow (element) {
      this.$emit('rowSelected', element.name)
    }
  }
}
</script>
