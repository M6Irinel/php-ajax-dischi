new Vue( {
    el: '#app',
    data () {
        return {
            rispostaAPI: []
        }
    },
    methods: {
        requestAPI () {
            axios.get( 'http://localhost/php-ajax-dischi/database/api.php' )
                .then( res => {
                    this.rispostaAPI = res.data.response;
                } )
        }
    },
    created () {
        this.requestAPI();
    },
} );