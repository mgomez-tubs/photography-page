<template>
    <div>
        <v-card color="grey lighten-3" align="center">
            <v-speed-dial v-model="dialShare" fixed right bottom direction="left" open-on-hover>
                <template v-slot:activator>
                <v-btn fab bottom small color="primary">
                    <v-icon v-if="dialShare">mdi-close</v-icon>
                    <v-icon v-else>mdi-share-variant</v-icon>
                </v-btn>
                </template>
                <v-btn dark fab bottom color="blue darken-7"    small :href="`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`" target="_blank">
                <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn dark fab bottom color="blue"             small :href="`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`" target="_blank">
                <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn dark fab bottom color="green"            small :href="`https://wa.me/?text=Checkout%20this%20page.%20${pageUrl}`" target="_blank">
                <v-icon>mdi-whatsapp</v-icon>
                </v-btn>
                <v-btn dark fab bottom color="tertiary"         small :href="`mailto:?subject=Awesomeness!&amp;body=Checkout this page!<a href='${pageUrl}'>${pageUrl}</a>`" target="_blank">
                <v-icon>mdi-email</v-icon>
                </v-btn>
            </v-speed-dial>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return{
            dialShare: false,
            pageUrl: "www.google.com"
        }
    }
}
</script>