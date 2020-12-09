<template>
  <v-container>
    <h1>Dashboard</h1>

    <v-row>
      <v-col
        v-for="sale in sales"
        :key="`${sale.title}`"
        cols="12"
        md="4"
      >
        <SalesGraph
          :sale="sale"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="statistic in statistics"
        :key="`${statistic.title}`"
        cols="6"
        md="3"
      >
        <StatisticCard
          :statistic="statistic"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="8"
      >
        <DataTable
          :data="employees"
          @rowSelected="selectRow"
        />
        <Snackbar
          :text="text"
          :show="show"
          @closeSnackbar="unselectRow"
        />
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <EventTimeline
          :timeline="timeline"
        />
      </v-col>
    </v-row>

    <v-row
      id="below-the-fold"
      v-intersect="showMoreContent"
    >
      <v-col
        cols="12"
        md="8"
      >
        <DataTable
          :data="employees"
          @rowSelected="selectRow"
        />
        <Snackbar
          :text="text"
          :show="show"
          @closeSnackbar="unselectRow"
        />
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <EventTimeline
          :timeline="timeline"
        />
      </v-col>
    </v-row>

    <v-row
      v-if="loadNewContent"
      id="more-content"
    >
      <v-col>
        <v-skeleton-loader
          ref="skeleton"
          type="table"
          class="mx-auto"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataTable from '@/components/DataTable'
import Snackbar from '@/components/Snackbar'
import SalesGraph from '@/components/SalesGraph'
import EventTimeline from '../components/EventTimeline'
import StatisticCard from '../components/StatisticCard'

import employeesData from '../data/employees.json'
import timelineData from '../data/timeline.json'
import salesData from '../data/sales.json'
import statisticsData from '../data/statistics.json'

const initialState = {
  text: '',
  show: false
}

export default {
  name: 'DashboardPage',
  components: { DataTable, Snackbar, SalesGraph, EventTimeline, StatisticCard },
  data: () => ({
    ...initialState,
    employees: employeesData,
    statistics: statisticsData,
    timeline: timelineData,
    sales: salesData,
    loadNewContent: false
  }),
  methods: {
    selectRow (value) {
      this.text = value
      this.show = true
    },
    unselectRow () {
      const { text, show } = initialState
      this.text = text
      this.show = show
    },
    showMoreContent (entries) {
      this.loadNewContent = entries[0].isIntersecting
    }
  }
}
</script>

<style>

</style>
