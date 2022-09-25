// @ts-nocheck
class Main extends React.Component {
    state = {
        dischi: []
    }

    responseAPI () {
        axios.get( '../database/response-api.php' )
            .then( res => {
                this.setState( this.state.dischi = res.data.response );
            } )
    }

    componentWillMount () {
        this.responseAPI();
    }

    render () {
        return (
            <main>
                <section>
                    <div className="container py-20">
                        <div>
                            <ul className="p-3 p-0-sm row-10-sm row-md row-10-xl gap-30">
                                { this.state.dischi.map( ( e, i ) => (
                                    <Card
                                        key={ i }
                                        disco={ e }
                                    />
                                ) ) }
                            </ul>
                        </div>
                    </div>
                </section>
            </main >
        );
    }
}