var React = require('react');
var Repo = require("./Repo");

class RepoList extends React.Component {
    render() {
        var repos = this.props.repos;
        return (
            <div className="panel panel-default">
                    <ul className="list-group">
                        {
                            repos.map(function (repo) {
                                return <Repo repo={repo} key={repo.id} />
                    })
                        }
                    </ul>
            </div>);
    }
}

module.exports = RepoList;
