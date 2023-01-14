<template>
    <div>
        <v-container class="py-12 px-10 mx-5" fluid>
            <v-row>
                <v-col v-for="game in games" :key="game.id" lg="3" md="4" sm="6" xs="12">
                    <GameCard :game="game" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Game, Ad } from '~~/types/types'

export default {
    data: () => ({
        loading: false as boolean,
        games: [] as Array<Game>,
        game: {} as Game,
        ads: [] as Array<Ad>,
        ad: {} as Ad,
        dialog: false as boolean,
        drawer: true as boolean,
        links: [
            ['mdi-inbox-arrow-down', 'Inbox'],
            ['mdi-send', 'Send'],
            ['mdi-delete', 'Trash'],
            ['mdi-alert-octagon', 'Spam'] as Array<string>,
        ],
    }),

    created() {
        this.getAds()
    },

    methods: {
        async getAds() {
            this.loading = true
            const data = await $fetch<Game[]>('http://localhost:3333/games')
            this.games = data
            this.loading = false
        },

        createAd(game: Game) {
            this.game = game
            this.dialog = true
        },

        fechaModal() {
            this.dialog = false
        },

    },
}
</script>