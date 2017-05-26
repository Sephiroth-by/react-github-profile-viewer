var React = require("react");

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        var username = e.target.value;
        this.setState({
            username: username
        });
    }

    onSubmit(e) {
        e.preventDefault();
        var username = this.state.username;
        if (username) {
            this.props.onFormSubmit(username);
        }
        this.setState({
            username: ""
        });
    }

    render() {
        return (
                 <div>
                    <form onSubmit={this.onSubmit}>
                         <input onChange={this.onChange} placeholder="Search" className="form-control" value={this.state.username} />
                    </form>
                 </div>
            )
    };
}

module.exports = Search;