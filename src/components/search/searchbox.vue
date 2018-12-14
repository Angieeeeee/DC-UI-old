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
</q-page>
</template>
<script>
import {areas, courses, stages, years} from '../../data'

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
      years
    }
  }
}
</script>
<style scoped>
.searchbox {
    margin: 100px 300px 0 300px
}
</style>
