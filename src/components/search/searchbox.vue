<template>
<q-page>
    <div class=searchbox>
        <q-field
            icon="fas fa-book-open"
            label="Select a learning area"
        >
            <q-select
            chips
            color="deep-purple"
            v-model="selectedarea"
            :options="areas"
            />
        </q-field>
        <q-field
            icon="fas fa-balance-scale"
            label="Pick a subject"
        >
            <q-select
            chips
            color="deep-purple"
            v-model="selectedcourse"
            :options="courses"
            />
        </q-field>
        <q-field
            icon="fas fa-school"
            label="Choses a stage"
        >
            <q-select
            chips
            color="deep-purple"
            v-model="selectedstage"
            :options="stages"
            />
        </q-field>
        <q-field
            icon="fas fa-chalkboard"
            label="Choses a year"
        >
            <q-select
            chips
            color="deep-purple"
            v-model="selectedyear"
            :options="years"
            />
        </q-field>
    </div>
    <div>
      <!-- <q-input v-model="selectedstage" /> -->
      {{searchResult}}
    </div>
</q-page>
</template>
<script>
import {areas, courses, stages, years} from '../../data'
import axios from 'axios'

export default {
  data: () => {
    return {
      selectedarea: '',
      selectedcourse: '',
      selectedstage: '',
      selectedyear: '',
      areas,
      courses,
      stages,
      years,

      demoData: null
    }
  },
  watch: {
    selectedstage (newValue, oldValue) {
      axios
        .get(`./../../demoData/stage${newValue}/content.json`)
        .then(response => {
          this.$store.commit('stage/setStageData', response)
        })
    }
  },
  computed: {
    searchResult () {
      if (this.selectedstage) {
        let stageData = this.$store.getters['stage/getStageData']
        if (stageData.data.yrLvls.includes(this.selectedyear)) return stageData.data.courses
      }
    }
  }
  // methods: {
  //   searchResult () {
  //     if (this.selectedstage) {
  //       let data = this.$store.getters['stage/getStageData']
  //       return data
  //     }
  //   }
  // }
  // created () {
  //   axios
  //     .get('./../../demoData/stage5.json')
  //     .then(response => {
  //       this.$store.commit('stage/setStageData', response)
  //     })
  // }
}
</script>
<style scoped>
.searchbox {
    margin: 100px 300px 0 300px
}
</style>
