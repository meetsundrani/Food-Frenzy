import User from '../components/User';
import UserClass from './UserClass';
const About = () => {
    return (
        <div>
            <h3>About</h3>
            <h2>This is Namaste React Web Series</h2>
            <UserClass name="Meet Sundrani (class)" count={0} count2={1} />
        </div>
    );
};

export default About;