<template>
    <div class="">
        Course {{ $route.params.item }}
        <div class="coursedetail">
        <div class="row">
            <div class="col-4">
                <q-btn outline color="deep-purple-9" class="full-width" label="COURSE" @click='selectedComponent = "appCourse"' />
            </div>
            <div class="col-4">
                <q-btn outline color="deep-purple-9" class="full-width" label="outcomes" @click='selectedComponent = "appOutcomes"' />
            </div>
            <div class="col-4">
                <q-btn outline color="deep-purple-9" class="full-width" label="Content Detail" @click='selectedComponent = "appContent"' />
            </div>
        </div>
            <div>
                <component :is="selectedComponent"></component>
            </div>
        </div>
        {{$route.params.item.name}}
    </div>
</template>

<script>
import Course from './Course.vue'
import Content from './Content.vue'
import Outcomes from './Outcomes.vue'

export default {
  components: {
    appCourse: Course,
    appContent: Content,
    appOutcomes: Outcomes
  },
  data: () => {
    return {
      selectedComponent: 'appCourse'
    }
  }
}
</script>

<style scoped>
.q-btn {
 border-radius: 0
}
.coursedetail {
    margin: 100px 200px
}
</style>
