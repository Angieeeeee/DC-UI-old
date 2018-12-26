<template>
    <div>
        <div class="left-btn">
            <q-btn push icon="adb" align="between" label="Reminder" color="deep-purple-9" @click="isShow=!isShow"></q-btn>
        </div>
        <div class="row courseplan">
            <div v-show="!isShow" class="col-3">
                <app-couser-reminder :item="item" />
            </div>
        </div>
    </div>
</template>

<script>
import CouserRemainder from './CourseRemainder.vue'
export default {
  props: ['item'],
  components: {
    appCouserReminder: CouserRemainder
  },
  data () {
    return {
      isShow: true
    }
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
