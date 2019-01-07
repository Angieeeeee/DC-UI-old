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
                <app-couser-editor
                ></app-couser-editor>
                <div>
                <q-btn
                    color="primary"
                    @click="addLine"
                    icon="playlist-plus"
                    round />
                </div>
                <div>
                    <q-btn
                    v-for="(line, index) in lines" :key="index"
                    color="primary"
                    @click="addCourse">
                    Lesson: {{ index }}
                    </q-btn>
                </div>
            </div>
            <div class="col-3">
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
      lines: [],
      isShow: true
    }
  },
  methods: {
    addLine () {
      let checkEmptyLines = this.lines.filter(line => line.number === null)
      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return
      this.lines.push({
        index: this.lines.length
      })
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
</style>
