import { useState } from 'react'

function App () {

  return (
    <div className="App">
      <f-button type="default">默认按钮</f-button>
      <f-button type="primary" disabled="123">主要按钮</f-button>
      {/* <f-button type="success">成功按钮</f-button>
      <f-button type="danger">危险按钮</f-button>
      <f-button type="warning">警告按钮</f-button> */}
    </div>
  )
}

export default App
