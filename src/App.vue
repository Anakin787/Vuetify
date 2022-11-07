<!-- eslint-disable -->
<template  #img="props">
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :src="require('./assets/sidebar.jpg')" dark app>

      <template #img="props">
        <v-img :gradient="gradient" v-bind="props" />
      </template>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 info--text">
            Application
          </v-list-item-title>
          <v-list-item-subtitle class="deep-orange--text darken-2">
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to" active-class="primary" class="pa-1">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container class="pa-3">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  // eslint-disable
  name: 'App',

  data: () => ({
    drawer: false,
    gradient: 'rgba(0,0,0,.5),rgba(0,0,0,.5)',
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: "/" },
      { title: 'GridSystem', icon: 'mdi-view-dashboard', to: "/GridSystem" },
      { title: 'Breakpoint', icon: 'mdi-view-dashboard', to: "/Breakpoint" },
      { title: 'Grid List Page', icon: 'mdi-view-dashboard', to: "/GridListPage" },
      { title: 'TypoGraphy', icon: 'mdi-view-dashboard', to: "/TypoGraphy" },
      { title: 'Tables', icon: 'mdi-table-settings', to: "/Tables" },
      { title: 'Forms', icon: 'mdi-form-select', to: "/Forms" },
      { title: 'Buttons', icon: 'mdi-emoticon-excited-outline', to: "/Buttons" },
      { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: "/Icons" },
    ],

  }),
};
</script>