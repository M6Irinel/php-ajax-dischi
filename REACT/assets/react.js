// @ts-nocheck
class MyReact extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}
ReactDOM.render( <MyReact />, document.getElementById( 'react' ) );