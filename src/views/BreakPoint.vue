<template>
  <!-- eslint-disable  -->
  <v-container>
    <v-card>
      <v-card-title>
        $vuetify.breakpoint.name: {{ $vuetify.breakpoint.name }}
      </v-card-title>
      <v-container class="grey lighten-3">
        <v-card class="pa-3 outlined" :height="height">
          hello~
        </v-card>
      </v-container>
    </v-card>

    <v-card class="mt-5">
      <v-card-title>
        Vuetify breakpoint Object
      </v-card-title>
      <v-container class="grey lighten-3">
        <v-card class="pa-3" outlined>
          $vuetify.breakpoint.xs:{{ $vuetify.breakpoint.xs }}<br>
          $vuetify.breakpoint.smAndDown:{{ $vuetify.breakpoint.smAndDown }}<br>
          $vuetify.breakpoint.smAndDown:{{ $vuetify.breakpoint.height }}<br>
          $vuetify.breakpoint.smAndDown:{{ $vuetify.breakpoint.width }}
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
/* eslint-disable */
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 100
        case 'sm': return 200
        case 'md': return 300
        case 'lg': return 400
        default: return 500
      }
    }
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>