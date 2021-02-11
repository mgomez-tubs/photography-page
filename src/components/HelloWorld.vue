<template>
  <v-container fill-height>
    <!-- Close gallery button-->
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
          switch(id){
            case "gallery":
              this.currentPage = id
              
              break;
            case "knowme":
              this.currentPage = id
              break;
            case "contact":
              this.currentPage = id
              break;
          }
        })
    }
  }
</script>