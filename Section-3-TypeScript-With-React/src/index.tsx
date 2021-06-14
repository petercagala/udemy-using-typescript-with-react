import React from "react";
import ReactDom from "react-dom";

const App = () => {
    (window as any).hello(); // simulation of error. We would like to see this error in
    // browser as this error is on line 5 of .tsx file => configure webpack.config.js
    return (
        <div>
            Hello World!
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById("root"))