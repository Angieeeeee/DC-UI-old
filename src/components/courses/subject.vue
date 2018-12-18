<template>
    <div class="">
        <div class="coursedetail">
        <div class="row">
            <div class="col-xs-12 col-zdlg-2-5">
                <q-btn
                    outline
                    color="deep-purple-9"
                    class="full-width"
                    label="COURSE"
                    icon="fas fa-chalkboard"
                    @click='selectedComponent = "appCourse"' />
            </div>
            <div class="col-xs-12 col-zdlg-2-5">
                <q-btn
                    outline
                    color="deep-purple-9"
                    class="full-width"
                    label="outcomes"
                    icon="fas fa-award"
                    @click='selectedComponent = "appOutcomes"' />
            </div>
            <div class="col-xs-12 col-zdlg-2-5">
                <q-btn
                    outline
                    color="deep-purple-9"
                    class="full-width"
                    label="Concept"
                    icon="far fa-file-alt"
                    @click='selectedComponent = "appConcept"' />
            </div>
                        <div class="col-xs-12 col-zdlg-2-5">
                <q-btn
                    outline
                    color="deep-purple-9"
                    class="full-width"
                    label="Skills"
                    icon="fas fa-atom"
                    @click='selectedComponent = "appSkills"' />
            </div>
                        <div class="col-xs-12 col-zdlg-2-5">
                <q-btn
                    outline
                    color="deep-purple-9"
                    class="full-width"
                    label="Tools"
                    icon="fas fa-hammer"
                    @click='selectedComponent = "appTools"' />
            </div>
        </div>
            <div style="margin-top:80px">
            <h5><b>Course Name: {{ $route.params.item }}</b></h5>
            <hr>
            </div>
            <div>
            <transition name="component-fade" mode="out-in">
                <component :is="selectedComponent"></component>
            </transition>
            </div>
        </div>
    </div>
</template>

<script>
import Course from './Course.vue'
import Concept from './Concept.vue'
import Outcomes from './Outcomes.vue'
import Skills from './Skills.vue'
import Tools from './Tools.vue'

export default {
  components: {
    appCourse: Course,
    appConcept: Concept,
    appOutcomes: Outcomes,
    appSkills: Skills,
    appTools: Tools
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
h5 {
    color: #4527a0
}
@media (min-width: 1200px) {
    .col-zdlg-2-5 {
        float: left;
        width:20%;
    }
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 1s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
