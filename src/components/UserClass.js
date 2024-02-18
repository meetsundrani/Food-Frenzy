import React from "react";

export class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    render() {
        const {name} = this.props
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Loation: Mumbai</h3>
                <h4>Profession: Programmer</h4>
                <h4>Count: {count}</h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count += 1
                    });
                }}>increase count</button>
            </div>
        );
    }
}

export default UserClass;