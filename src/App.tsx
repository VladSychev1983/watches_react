import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'

type StateType = {
  find?(arg0: (item: never) => boolean): unknown
  offset?: number;
  city?: string;
}

function App() {
  // добавляем новые часы в состояние.
  const [watchList, watchListAdd] = useState<StateType[]>([]);
  
  const handleWatchAdd = (data: StateType) => {
    console.log(`App`,data);
    //проверяем наличие уже добавленного объекта.
      if (!watchList.find((item) => item.city === data.city && item.offset === data.offset)) {
        watchListAdd([...watchList, data]);
      }
  }
  return (
    <React.Fragment>
      <div>
      <Form onSubmit={(_event, data) => handleWatchAdd(data)}/>
      </div>
    </React.Fragment>
  )
}

export default App
