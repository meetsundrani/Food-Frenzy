import { useState } from "react";

const User = (props) => {
    const { name } = props
    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Loation: Mumbai</h3>
            <h4>Profession: Programmer</h4>
            <h4>count: {count} </h4>
            <h4>count2: {count2} </h4>
        </div>
    );
}

export default User;