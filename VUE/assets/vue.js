// @ts-nocheck

import './components/header.js';
import './components/main.js';

new Vue( {
    el: '#vue',

    template: `
        <div>
            <vue-header />
            <vue-main :rispostaAPI="rispostaAPI" />
        </div>
    `,

    data () {
        return {
            rispostaAPI: []
        }
    },

    methods: {
        requestAPI () {
            axios.get( '../database/response-api.php' )
                .then( res => {
                    this.rispostaAPI = res.data.response;
                } )
        }
    },

    created () {
        this.requestAPI();
    },
} );