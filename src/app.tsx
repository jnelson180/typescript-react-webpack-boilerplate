import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";

ReactDOM.render(
    <div>
        <Header />
        <Hello name="" />
    </div>,
    document.getElementById("root")
    );