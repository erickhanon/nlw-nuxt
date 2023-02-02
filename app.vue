<template>
    <div>
      <v-app>
        <v-navigation-drawer v-model="drawer" expand-on-hover rail>
            <v-list>
                <v-list-item prepend-avatar="https://avatars.githubusercontent.com/u/50847394?v=4" title="Erick Marques"
                    subtitle="Front-End Developer"></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <NuxtLink to="/" style="text-decoration: none; color: inherit;">
                <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
                </NuxtLink>
                <NuxtLink to="/about" style="text-decoration: none; color: inherit;">
                <v-list-item prepend-icon="mdi-star" title="About Me" value="about"></v-list-item>
                </NuxtLink>
            </v-list>
        </v-navigation-drawer>
        <NuxtPage />
      </v-app>
    </div>
</template>

<script lang="ts">
export default {
    data: () => ({
        drawer: true,
        links: [
            ['mdi-inbox-arrow-down', 'Inbox'],
            ['mdi-send', 'Send'],
            ['mdi-delete', 'Trash'],
            ['mdi-alert-octagon', 'Spam'],
        ],
    }),
}
</script>