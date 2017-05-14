
import * as React from "react";

class Header extends React.Component<{}, {}> {
    render() {
        return (
        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li className="float-right"><a href="#">Contact</a></li>
            </ul>
        </div>
        );
    }
}

export default Header;