<template>
  <div>
    <!-- <input type="text" ref="mytext" />
    <button @click="handleAdd()">add</button>
    <ul>
      <li v-for="data in datalist" :key="data">{{data}}</li>
    </ul>
    <navbar>
      <button @click="isshow=!isshow">点击按钮</button>
    </navbar>
     <sidebar v-show="isshow"></sidebar> -->
     <router-view>  </router-view>
     <tabbar v-show="isshow"></tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar'
import { mapState } from 'vuex'
// import bus from '@/bus/index'
// import sidebar from './components/Sidebar.vue'
// import Vue from 'vue'
// import axios from 'axios'
// import { component } from 'vue/types/umd'
// Vue.component('navbar', navbar)
// Vue.component('sidebar', sidebar)
export default {
  data () {
    return {
      datalist: []
      // isshow: true
    }
  },
  beforeMount () {
    console.log('订阅消息')
    // bus.$on('Tabberisshow', data => {
    //   console.log('收到消息')
    //   this.isshow = data
    // })
  },
  // methods: {
  //   hu () {
  //     console.log(this)
  //   }
  // },
  // methods: {
  //   handleAdd () {
  //     console.log('aaaa', this.datalist.push(this.$refs.mytext.value))
  //   }

  // },
  // mounted () {
  //   console.log(1)
  //   axios.get('/ajax/movieOnInfoList?token=').then(res => { console.log(res.data) })
  // },
  components: {
    tabbar
  },
  computed: {
    ...mapState(['isshow'])
  }
}
</script>
<style lang="scss" >
*{
  margin:0px;
  padding:0px;
}
ul, ol { list-style: none; }

</style>
