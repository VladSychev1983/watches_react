import React, { useState, useEffect } from 'react';
type WatchProps = {
    city: string;
    offset:number | string;
    index: React.Key | null | undefined,
    handleDelete: (_event: React.FormEvent, idx: number) => void;
}
const Watch:React.FC<WatchProps>=({city, offset, index, handleDelete}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
        setTime(new Date());
    }, 1000); // Обновлять каждую секунду

    // Функция очистки, вызываемая при размонтировании компонента
    return () => {
      clearInterval(timerId);
    };
  }, []); // Пустой массив зависимостей означает, что эффект запускается один раз при монтировании
  const convertTime = (offset: number) => {
    const localOffset = 3;
    const currentUTCMilliseconds = time;
    const offsetMinutes = localOffset * 60 - (offset * 60);
    const offsetMilliseconds = offsetMinutes * 60 * 1000;
    const hour = new Date(new Date(currentUTCMilliseconds).getTime() - offsetMilliseconds).getHours().toString().padStart(2, '0');
    const minutes = new Date(new Date(currentUTCMilliseconds).getTime() - offsetMilliseconds).getMinutes().toString().padStart(2, '0');
    const seconds = new Date(new Date(currentUTCMilliseconds).getTime() - offsetMilliseconds).getSeconds().toString().padStart(2, '0');
    return `${hour}:${minutes}:${seconds}`;
  }
  // Форматирование времени в удобный формат
   const convertedTime = convertTime(Number(offset));
  return (
    <React.Fragment>
        <div className='flex-container'>
        <div className="flex-item">
            <div className="btn-delete" key={index} onClick={(event) => {handleDelete(event, Number(index))}}>X</div>
        <h4>{city}</h4>
        <div className="watch">
        <span className="time-div">{(city) ? convertedTime : ''}</span>
        </div>
        </div>
        </div>
    </React.Fragment>
  );
}

export default Watch;