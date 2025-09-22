import React from "react";
import Watch from "./Watch";

interface WatchListProps {
    watchList: {
        city: string,
        offset: number,
    }[],
    handleDelete: (_event: React.FormEvent, idx: number) => void;
    };

const WatchList:React.FC<WatchListProps> = ({watchList, handleDelete}) => {
    return (
        <React.Fragment>
            <div>
                {
                    watchList.map((item: { city: string; offset: string | number; }, index: React.Key | null | undefined) => (
                        <Watch key={index} city={item.city} offset={item.offset} index={index} handleDelete={handleDelete} />                      
                ))
                }
            </div>
        </React.Fragment>
    )
}
export default WatchList;