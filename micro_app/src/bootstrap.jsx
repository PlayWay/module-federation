import React from 'react';
import ReactDom from 'react-dom';
import ErrorBoundary from "./ErrorBoundary";
import "antd/dist/antd.css"
import Main from "./pages/Main";

ReactDom.render(<ErrorBoundary><Main /></ErrorBoundary>, document.getElementById("root"));