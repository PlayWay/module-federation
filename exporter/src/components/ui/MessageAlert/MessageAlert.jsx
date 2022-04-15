import {message} from 'antd';
import React from "react";
import * as ReactDOM from "react-dom";

/**
 * Выводит alert в всплывающем окне
 * @param {String} open Статус открытия
 * @param {String} type error|warning|success|info
 * @param {String} text текст алерта
 */
export default function MessageAlert({
                                       type = 'error',
                                       text = '',
                                       duration = 5
                                   }) {
    return new Promise(res => {
        const confirmRoot = document.createElement("div");
        const body = document.querySelector("body");
        body.appendChild(confirmRoot);

        const key = `message${Date.now()}`
        const giveAnswer = (answer) => {
            ReactDOM.unmountComponentAtNode(confirmRoot);
            message.destroy(key)
            confirmRoot.remove()
            res(answer);
        };
        const alert = message[type]({
            content: text,
            key,
            duration,
            onClose:(() => giveAnswer(true)),
            onClick:(() => giveAnswer(true))
        })

        ReactDOM.render(
            alert,
            confirmRoot,
        );
    })

}
