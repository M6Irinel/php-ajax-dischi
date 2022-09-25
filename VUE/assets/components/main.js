// @ts-nocheck

import './card.js';

export default Vue.component( 'vue-main', {
    template: `
        <main>
            <section>
                <div class="container py-20">
                    <div>
                        <ul class="p-3 p-0-sm row-10-sm row-md row-10-xl gap-30">
                            <vue-card v-for="(el, i) in rispostaAPI" :key="i" :rispostaAPI="el" />
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    `,
    props: {
        rispostaAPI: Array
    }
} );