import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import WatchList from './components/WatchList'

type StateType = {
  find?(arg0: (item: never) => boolean): unknown
  offset: number;
  city: string;
}

function App() {
  // добавляем новые часы в состояние.
  const [watchList, watchListAdd] = useState<StateType[]>([]);
  

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleWatchAdd = (data: any) => {
    console.log(`App`,data);
    //проверяем наличие уже добавленного объекта.
      if (!watchList.find((item) => item.city === data.city && item.offset === data.offset)) {
        watchListAdd([...watchList, data]);
      }
  }

    //функция удаления состояния.
  const handleDelete = (_event: React.FormEvent, idxToRemove: number) => {
    const newWatchesList: StateType[] = watchList
      .filter((_data, idx) => idx !== idxToRemove)
      .map(({city, offset}) => ( {city: city, offset: offset} ));
    watchListAdd([...newWatchesList]);
  }

  return (
    <React.Fragment>
      <div>
      <Form onSubmit={(_event, data) => handleWatchAdd(data)} />
        <WatchList watchList={watchList} handleDelete={handleDelete} />
      </div>
    </React.Fragment>
  )
}

export default App
