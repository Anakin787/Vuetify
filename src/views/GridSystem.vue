<template>
  <v-container>
    <v-card class=" pa-3">
      <v-row
        dense
        :style="{ height: '120px' }"
        class="yellow"
        align="center"
      >
        <v-col>
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
      </v-row>

      <v-row
        :style="{ height: '120px' }"
        class="red"
        align="center"
      >
        <v-col>
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
      </v-row>

      <v-row
        :style="{ height: '120px' }"
        class="yellow"
        align="center"
      >
        <v-col align-self="center">
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col align-self="end">
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col align-self="start">
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mt-5 pa-3">
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class=" pa-3 outlined">
            col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
