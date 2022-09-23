// @ts-ignore
new Vue( {
    el: '#app',
    data () {
        return {
            rispostaAPI: []
        }
    },
    methods: {
        requestAPI () {
            // @ts-ignore
            axios.get( 'http://localhost/php-ajax-dischi/database/response-api.php' )
                .then( res => {
                    this.rispostaAPI = res.data.response;
                } )
        }
    },
    created () {
        this.requestAPI();
    },
} );