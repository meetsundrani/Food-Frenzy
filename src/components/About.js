import User from '../components/User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';
const About = () => {
    return (
        <div>
            <h3>About</h3>
            <div>
            LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is Namaste React Web Series</h2>
            <UserClass name="Meet Sundrani (class)" count={0} count2={1} />
        </div>
    );
};

export default About;