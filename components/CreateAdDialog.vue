<template>
    <div>
        <v-dialog v-model="dialog" max-width="800px" persistent>
            <v-card class="pa-5">
                <v-card-title>
                    <h2>Criar um Anuncio para {{ game.title }}</h2>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Digite o Seu Nickname" placeholder="Nickname"></v-text-field>
                        <v-text-field label="Anos Jogando" placeholder="Tudo bem ser zero"></v-text-field>
                        <v-text-field label="Digite o Seu Discord" placeholder="Exemplo#0703"></v-text-field>
                        <v-btn-toggle v-model="toggle" multiple color="deep-purple-accent-3" class="my-5">
                            <v-btn value="0" title="Domingo">D</v-btn>
                            <v-btn value="1" title="Segunda">S</v-btn>
                            <v-btn value="2" title="Terça">T</v-btn>
                            <v-btn value="3" title="Quarta">Q</v-btn>
                            <v-btn value="4" title="Quinta">Q</v-btn>
                            <v-btn value="5" title="Sexta">S</v-btn>
                            <v-btn value="6" title="Sabado">S</v-btn>
                        </v-btn-toggle>
                        <v-text-field type="datetime-local" label="Quando você costuma jogar?"  v-model="time" />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="deep-purple lighten-2" variant="outlined" @click="" outlined>
                        Criar um Anuncio
                    </v-btn>
                    <v-btn color="white" @click="$emit('fechaModal')">
                        Cancelar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        game: {
            type: Object,
            required: true,
            default: () => ({
                id: '',
                title: '',
                bannerUrl: '',
                _count: {
                    ads: 0,
                },
            }),
        },
    },
    data: () => ({
        dialog: true as boolean,
        toggle: [] as Array<string>,
        time: "",
        menu2: false,
    }),

}
</script>

