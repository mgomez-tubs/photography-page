<template>
  <v-container fill-height>
    <template v-if=       "currentPage == 'home'"     >
      <Home/>
    </template>
    <template v-else-if=  "currentPage == 'knowme'"   >
      <KnowMe/>
    </template>
    <template v-else-if=  "currentPage == 'gallery'"  >
      <Gallery/>    
    </template>
    <template v-else-if=  "currentPage == 'contact'"  >
      <Contact/>
    </template>
  </v-container>
</template>
<script>

import Home     from './Home'
import Gallery  from './Galeria'
import KnowMe   from './KnowMe'
import Contact  from './Contact'


  export default {
    name: 'HelloWorld',
    data: () => ({
      currentPage : "home"
    }),
    components : {
      Gallery,
      KnowMe,
      Contact,
      Home
    },
    mounted(){
      // Set Menu bar listener
      this.$UIEvents.on("pageSelected", id=>{
          this.currentPage = id
        })
    }
  }
</script>