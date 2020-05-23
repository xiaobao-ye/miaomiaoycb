<template>
  <div id="main">  
    <top title="我的喵喵"></top>
    <div id="content">
      <login></login>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import top from "@/components/Top"
import tabbar from "@/components/Tabbar"
import login from "@/components/Login"
export default {
    name:'mine',
  components: {
    top,
    tabbar,
    login
  }

}

</script>
<style scoped>
</style>