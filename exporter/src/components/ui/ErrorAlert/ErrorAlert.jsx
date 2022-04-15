import React from "react";
import ReactDOM from "react-dom";
import CustomModal from "../CustomModal/CustomModal";
import {Button, Collapse} from "antd";

const ErrorAlert = (
    {msg, title, techError}
) => {
    const confirmRoot = document.createElement("div");
    const body = document.querySelector("body");
    body.appendChild(confirmRoot);
    const { Panel } = Collapse;

    return new Promise(res => {
        const giveAnswer = (answer) => {
            ReactDOM.unmountComponentAtNode(confirmRoot);
            confirmRoot.remove()
            res(answer);
        };

        const jsx = <CustomModal title={title} show={true} handleCancel={giveAnswer}>
            <p className="m-4" style={{whiteSpace:'pre-line'}}>{msg}</p>
            <Collapse>
                <Panel header="Подробнее" key="1">
                    <div style={{whiteSpace:'pre-line'}}>
                      {techError}
                    </div>
                </Panel>
            </Collapse>
            <div className="text-center mt-3">
                <Button onClick={giveAnswer}>Ок</Button>
            </div>
        </CustomModal>

        ReactDOM.render(jsx, confirmRoot);
    })
}

export default ErrorAlert
