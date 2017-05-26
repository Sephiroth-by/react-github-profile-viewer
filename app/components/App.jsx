var React = require("react");
var Search = require("./Search");
var Profile = require("./Profile");

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "Sephiroth-by",
            userData: [],
            userRepos: [],
            perPage: 10
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    getUserData() {
        $.ajax({
            url: ("https://api.github.com/users/" + this.state.userName + "?client_id=" + this.props.clientId + "&client_secret=" + this.props.clientSecret),
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({
                    userData: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
            this.setState({
                username: null
            });
            alert(err);
            }.bind(this)
        })
    }

    getUserRepos() {
        $.ajax({
            url: ("https://api.github.com/users/" + this.state.userName + "/repos?per_page=" + this.state.perPage + "&client_id=" + this.props.clientId + "&client_secret=" + this.props.clientSecret + "&sort=created"),
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({
                    userRepos: data
                });
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({
                    username: null
                });
                alert(err);
            }.bind(this)
        })
    }

    handleFormSubmit(username) {
        this.setState({
            userName: username
        }, function () {
            this.componentDidMount();
        });
    }

    componentDidMount() {
        this.getUserData();
        this.getUserRepos();
    }

    render() {
        return (
            <div>
                <Search onFormSubmit={this.handleFormSubmit} />
                <br />
                <Profile {...this.state} />
            </div>
      );
    }
}

App.defaultProps = { clientId: "9fc1b3d9b6121e102e75", clientSecret: "8bdc1caac7a74dbbc68c51a7b83e9c533dd6d97e" };

module.exports = App;