﻿<template>
  <div id="main">
      <top title="喵喵影院"></top>
      <div id="content">
        <div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
      <clist></clist>
      </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import top from "@/components/Top"
import tabbar from "@/components/Tabbar"
import clist from "@/components/Clist"
export default {
    name:'cinema',
    components: {
    top,
    tabbar,
    clist
  }

}

</script>
<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>