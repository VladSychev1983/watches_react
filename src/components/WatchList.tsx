import React from "react";
import Watch from "./Watch";
interface WatchListProps {
    watchList: {
        city: string,
        offset: number
    }[];
}
const WatchList:React.FC<WatchListProps> = ({watchList}) => {
    return (
        <React.Fragment>
            <div>
                {
                    watchList.map((item: { city: string; offset: string | number; }, index: React.Key | null | undefined) => (
            <Watch key={index} city={item.city} offset={item.offset}/>
                ))
                }
            </div>
        </React.Fragment>
    )
}
export default WatchList;