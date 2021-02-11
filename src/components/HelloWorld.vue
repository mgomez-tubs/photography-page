<template>
  <v-container fill-height>
    <template v-if=       "currentPage == 'knowme'">
      <KnowMe/>
    </template>
    <template v-else-if=  "currentPage == 'gallery'">
      <Gallery/>    
    </template>
    <template v-else-if=  "currentPage == 'contact'">
      <Contact/>
    </template>
  </v-container>
</template>

<script>

import Gallery  from './Galeria'
import KnowMe   from './KnowMe'
import Contact  from './Contact'
  export default {
    name: 'HelloWorld',
    data: () => ({
      currentPage : "knowme"
    }),
    components : {
      Gallery,
      KnowMe,
      Contact
    },
    mounted(){
      // Set Menu bar listener
      this.$UIEvents.on("pageSelected", id=>{
        this.currentPage = id;
      })
    }
  }
</script>