<template>
    <div>
        <v-container class="py-12 px-10 mx-5" fluid>
            <CreateAdDialog v-if="dialog" @fechaModal="dialog = false" :game="game" />
            <v-row>
                <v-col v-for="game in games" :key="game.id" lg="3" md="4" sm="6" xs="12">
                        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                            <v-img cover :src="game.bannerUrl"></v-img>
                            <v-card-title>{{ game.title }}</v-card-title>

                            <v-divider class="mx-4"></v-divider>

                            <v-card-text>Anuncios Disponíveis</v-card-text>

                            <v-card-text>
                                <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text"
                                    column>
                                    <v-chip>{{ game._count.ads }}</v-chip>
                                </v-chip-group>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="deep-purple lighten-2" @click="createAd(game)">
                                    Criar um Anuncio
                                </v-btn>
                            </v-card-actions>
                        </v-card>
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
        dialog: false as boolean,
        selection: [] as Array<Ad>,
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