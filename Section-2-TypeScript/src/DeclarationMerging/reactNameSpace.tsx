import React from "react";

declare module "react" {
    // v reacte mozeme pouzit len exisujuce interface a rozsirovat ich
    interface Component {
        helloWorld(): string;
    }
    // Toto nebudeme vediet implementovat nikde
    export function foo(): void;
}

// Definicia implementacie noveho pototypu
React.Component.prototype.helloWorld = function () {
    return "hello world";
};

export class MyComponent extends React.Component<any, any>{
    render() {
        return (
            <div>
                {this.helloWorld()}
            </div>
        )
    }
}