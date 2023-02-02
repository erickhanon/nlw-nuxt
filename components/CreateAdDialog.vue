<template>
    <v-form v-model="valid" ref="form">
        <div>
            <v-dialog v-model="dialog" max-width="800px" persistent>
                <v-card class="pa-5">
                    <v-card-title>
                        <h2>Criar um Anuncio para {{ game.title }}</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field v-model="adInfo.name" label="Digite o Seu Nickname" placeholder="Nickname"
                            :rules="[rules.required]"></v-text-field>
                        <v-text-field v-model.number="adInfo.yearsPlaying" label="Anos Jogando"
                            placeholder="Tudo bem ser zero" type="number" :rules="[rules.required]"></v-text-field>
                        <v-text-field v-model="adInfo.discord" label="Digite o Seu Discord" placeholder="Exemplo#0703"
                            :rules="[rules.required]"></v-text-field>
                        <v-btn-toggle color="deep-purple" v-model="adInfo.weekDays" class="mb-5 mt-1" multiple
                            variant="outlined" :rules="[rules.select]">
                            <v-btn value="0" title="Domingo">D</v-btn>
                            <v-btn value="1" title="Segunda">S</v-btn>
                            <v-btn value="2" title="Terça">T</v-btn>
                            <v-btn value="3" title="Quarta">Q</v-btn>
                            <v-btn value="4" title="Quinta">Q</v-btn>
                            <v-btn value="5" title="Sexta">S</v-btn>
                            <v-btn value="6" title="Sabado">S</v-btn>
                        </v-btn-toggle>
                        <v-text-field v-model="adInfo.hourStart" type="time"
                            label="Quando você costuma coemçar a jogar?" :rules="[rules.required]" />
                        <v-text-field v-model="adInfo.hourEnd" type="time"
                            label="Quando você costuma terminar de jogar?" />
                        <v-checkbox label="Usa o Canal de Voz?" v-model="adInfo.useVoiceChannel"
                            :rules="[rules.required]" />
                    </v-card-text>
                    <v-card-actions class="ml-5">
                        <v-btn color="deep-purple lighten-2" variant="outlined" @click="createAd" outlined>
                            Criar um Anuncio
                        </v-btn>
                        <v-btn color="white" @click="$emit('fechaModal')">
                            Cancelar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </v-form>
</template>

<script lang="ts">
import { NewAd } from '~~/types/types'
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
        timeStart: "" as string,
        timeEnd: "" as string,
        useVoice: false as boolean,
        adInfo: {} as NewAd,
        valid: false as boolean,
        rules: {
            select: (v: string) => Boolean(Object.keys(v || {})[0]) || "Campo Obrigatório",
            required: (v: string) => !!v || "Campo Obrigatório",
        },
    }),

    methods: {
        async createAd() {
            let form: any = this.$refs.form;
            if (form.validate()) {
                    await $fetch<NewAd>(`http://localhost:3333/games/${this.game.id}/ads`, {
                        method: 'POST',
                        body: this.adInfo,
                    }).then((data) => {
                        console.log("Anuncio Criado")
                        this.$emit('fechaModal')
                        this.$emit('updateAds')
                        console.log(data)
                    }).catch((err) => {
                        console.log(err)
                    })
            }
        },

    },

}
</script>

