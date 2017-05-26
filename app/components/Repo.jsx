var React = require("react");

class Repo extends React.Component {

    render() {
        return (
            <li className="list-group-item">
            <a href={this.props.repo.html_url }>{this.props.repo.name}</a>
            <span> : </span>
            <span>{this.props.repo.description}</span>
            </li>);
    }
}

module.exports = Repo;