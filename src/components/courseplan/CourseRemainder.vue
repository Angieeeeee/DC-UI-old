<template>
    <div>
        <div class="reminder">
            <p>The content must be included</p>
            <i v-for="content in item.content_areas" :key="content">{{content.name}}</i>
            <p>The tools</p>
            <p>The skills</p>
            <p>The concepts</p>
        </div>
    </div>
</template>
<script>
export default {
  props: ['item']
}
</script>
<style scoped>
.reminder p{
    color: gray
}
</style>
