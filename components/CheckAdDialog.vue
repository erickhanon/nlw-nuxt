<template>
    <div>
        <v-dialog v-model="dialog2" max-width="800px" persistent>
            <v-card class="pa-5">
                <v-card-title>
                    <h2>Quer jogar com o {{ adInfo.name }} ?</h2>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field readonly v-model="adInfo.name" label="O meu Nickname é:" placeholder="Nickname"></v-text-field>
                        <v-text-field readonly v-model.number="adInfo.yearsPlaying" label="Meus Anos Jogando:" placeholder="Tudo bem ser zero" type="number"></v-text-field>
                        <v-text-field readonly v-model="adInfo.discord" label="O meu Discord é:" placeholder="Exemplo#0703"></v-text-field>
                        <v-btn-toggle color="deep-purple" v-model="adInfo.weekDays" class="mb-5 mt-1" multiple variant="outlined">
                            <v-btn readonly value="0" title="Domingo">D</v-btn>
                            <v-btn value="1" title="Segunda">S</v-btn>
                            <v-btn value="2" title="Terça">T</v-btn>
                            <v-btn value="3" title="Quarta">Q</v-btn>
                            <v-btn value="4" title="Quinta">Q</v-btn>
                            <v-btn value="5" title="Sexta">S</v-btn>
                            <v-btn value="6" title="Sabado">S</v-btn>
                        </v-btn-toggle>
                        <v-text-field readonly v-model="adInfo.hourStart" type="time" label="Eu começo a jogar as:"   />
                        <v-text-field readonly v-model="adInfo.hourEnd" type="time" label="E termino as:"   />
                        <v-checkbox label="Usa o Canal de Voz?" readonly v-model="adInfo.useVoiceChannel" />
                    </v-form>
                </v-card-text>
                <v-card-actions class="ml-5">
                    <v-btn color="white" @click="$emit('fechaModal')">
                        Fechar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { NewAd } from '~~/types/types'
export default {
    props: {
        ad: {
            type: Object,
            required: true,
            default: () => ({
                name: '',
                yearsPlaying: 0,
                discord: '',
                weekDays: [],
                hourStart: '',
                hourEnd: '',
                useVoiceChannel: false,
            }),
        },
    },
    data: () => ({
        dialog2: true as boolean,
        toggle: [] as Array<string>,
        timeStart: "" as string,
        timeEnd: "" as string,
        useVoice: false as boolean,
        adInfo: {} as NewAd,
    }),

    created() {
        this.adInfo = this.ad as NewAd;
    },

    methods: {
        },

}
</script>

