// declare module "*.svg";

declare module "*.svg" {
    import React = require('react');
    const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default ReactComponent;
}