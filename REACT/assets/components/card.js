// @ts-nocheck
class Card extends React.Component {
    render () {
        return (
            <li className="g-col-5-sm g-col-4-md g-col-3-lg g-col-2-xl t-center p-3 flex f-column scale-sm-H transition-all duration-2 rounded-2-H ease-in mb-7 mb-0-sm">

                <div className="h-50 mb-3 f-col-6">
                    <img className="fluid-img d-block obj-cover" src={ this.props.disco.poster } alt={ this.props.disco.title } />
                </div>

                <h2 className="white px-5 py-5 lato">
                    { this.props.disco.title }
                </h2>

                <h4 className="gray-5 pb-1 lato">
                    { this.props.disco.author }
                </h4>

                <p className="gray-5 lato">
                    { this.props.disco.year }
                </p>
            </li>
        );
    }
}