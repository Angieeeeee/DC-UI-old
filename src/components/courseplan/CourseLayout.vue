<template>
    <div>
        <div class="left-btn">
            <q-btn push icon="adb" align="between" label="Reminder" color="deep-purple-9" @click="isShow=!isShow"></q-btn>
        </div>
        <div class="row courseplan">
            <div v-if="!isShow" class="col-3">
                <app-couser-reminder :item="item" />
            </div>
            <div :class="isShow?'col-9':'col-6'">
                <div>
                <app-couser-editor v-for="(editor, i) in editors" :key="i"></app-couser-editor>
                </div>
            </div>
            <div class="col-3">
            </div>
            <div class="col-9">
                <q-card class="addLesson">
                <q-card-main class="row singlerow" v-for="(line, index) in lines" :key="index">
                <div class="col-4">
                <q-btn
                    class="q-ma-sm full-width"
                    outline
                    style="color: #4527a0;"
                    @click="addCourse">
                    Lesson: {{ index + 1 }}
                </q-btn>
                </div>
                <div class="col-6">
                <q-field
                    class="q-ma-sm"
                    :label-width="3"
                    icon=""
                    label="Lesson Titile"
                >
                    <q-input
                        v-model="text"
                        color="deep-purple-5"/>
                </q-field>
                </div>
                <div class="col-2">
                <q-btn
                    class="q-ma-sm"
                    color="blue-grey-3"
                    @click="removeLine(index)"
                    icon="fas fa-minus"
                    outline
                    round>
                    <q-tooltip
                        anchor="bottom middle"
                        self="top middle"
                        :offset="[10, 10]"
                        :delay="800"
                    >Delete Lesson</q-tooltip>
                </q-btn>
                <q-btn
                    class="q-ma-sm"
                    color="blue-grey-3"
                    @click="addLine"
                    icon="fas fa-plus"
                    outline
                    round>
                    <q-tooltip
                        anchor="bottom middle"
                        self="top middle"
                        :offset="[10, 10]"
                        :delay="800"
                    >Add Lesson</q-tooltip>
                </q-btn>
                </div>
                </q-card-main>
            </q-card>
            </div>
        </div>
    </div>
</template>

<script>
import CouserRemainder from './CourseRemainder.vue'
import CouserEditor from './CourseEditor.vue'
export default {
  props: ['item'],
  components: {
    appCouserReminder: CouserRemainder,
    appCouserEditor: CouserEditor
  },
  data () {
    return {
      i: this.i,
      editors: [],
      lines: [],
      isShow: true,
      blockRemoval: true
    }
  },
  watch: {
    lines () {
      this.blockRemoval = this.lines.length <= 1
    }
  },
  methods: {
    addLine () {
      let checkEmptyLines = this.lines.filter(line => line.number === null)
      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return
      this.lines.push({
        index: this.lines.length
      })
      this.editors.push({
        i: this.editors.length
      })
    //   if (checkEmptyLines.length >= 1 && this.lines.length > 0) {
    //     let i = this.editors.length
    //     console.log(i)
    //     document.querySelector('current-' + i - 1).style.display = 'none'
    //   }
    },
    removeLine (lineId) {
      if (!this.blockRemoval) {
        this.lines.splice(lineId, 1)
        this.editors.splice(lineId, 1)
      }
    }
  },
  mounted () {
    this.addLine()
  }
}
</script>

<style scoped>
.left-btn {
    position:fixed;
    bottom: -4px;
    left: 10px
}
.courseplan {
    margin: 50px 100px
}
.addLesson{
    margin-top:50px;
    max-height: 250px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 16px;
}
.singlerow{
    margin-left:6%;
}
.q-card-container{
    padding: 5px
}
</style>
