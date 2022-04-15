import {Modal} from 'antd';
import React, {useRef, useState} from "react";
import Draggable from 'react-draggable';

export default function CustomModal({
                                      show,
                                      handleOk,
                                      handleCancel,
                                      children,
                                      title = "Надо что то написать",
                                      footer = null,
                                      bodyStyle = {padding: 0, paddingBottom: 10},
                                      destroyOnClose = true,
                                      ...props
                                    }) {
  const [bounds, setBounds] = useState({left: 0, top: 0, bottom: 0, right: 0})
  const [disabled, setDisabled] = useState(true)
  const draggableRef = useRef()

  const onStart = (event, uiData) => {
    const {clientWidth, clientHeight} = window.document.documentElement;
    const targetRect = draggableRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    })
  }

  return (
    <Modal
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move'
          }}
          className="bg-main-blue"
          onMouseOver={() => setDisabled(false)}
          onMouseOut={() => setDisabled(true)}
          onFocus={() => {
          }}
          onBlur={() => {
          }}
        >
          {title}
        </div>
      }
      bodyStyle={bodyStyle}
      footer={footer}
      visible={show}
      destroyOnClose={destroyOnClose}
      onOk={handleOk}
      onCancel={handleCancel}
      modalRender={modal => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggableRef}>{modal}</div>
        </Draggable>
      )}
      {...props}
    >
      {children}
    </Modal>
  )
}