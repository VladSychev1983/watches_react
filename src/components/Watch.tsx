import React, { useState, useEffect } from 'react';
type WatchProps = {
    city: string;
    offset:number | string;
}
const Watch:React.FC<WatchProps>=({city, offset}) => {
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
    const currentUTCMilliseconds = Date.now();
    const offsetMinutes = localOffset * 60 - (offset * 60);
    const offsetMilliseconds = offsetMinutes * 60 * 1000;
    return new Date(new Date(currentUTCMilliseconds).getTime() - offsetMilliseconds);
  }
  // Форматирование времени в удобный формат
//   const formattedTime = time.toLocaleTimeString();
//тест мск время. 
  offset = +3;
  const offsetTime = convertTime(offset);
  console.log(offsetTime);
  const currentHour = time.getHours().toString().padStart(2, '0');
  const currentMinute = time.getMinutes().toString().padStart(2, '0');
  const currentSeconds = time.getSeconds().toString().padStart(2, '0');
  const timeTrueFormat = `${currentHour}:${currentMinute}:${currentSeconds}`;

  return (
    <div>
      <h1>Текущее время: {timeTrueFormat}</h1>
    </div>
  );
}

export default Watch;