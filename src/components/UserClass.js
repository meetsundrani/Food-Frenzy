import React from "react";

export class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                name:"dummy name",
                location: "default"
            },
        }
    }

    async componentDidMount() {
        const userData = await fetch('https://api.github.com/users/meetsundrani');
        const json = await userData.json();
        this.setState({
            userData: json
        })
    }
    render() {
        const { name, location, avatar_url } = this.state.userData;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Loation: {location}</h3>
                <h4>Profession: Programmer</h4>
            </div>
        );
    }
}

export default UserClass;