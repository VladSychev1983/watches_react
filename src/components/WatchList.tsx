import React from "react";
import Watch from "./Watch";
interface WatchListProps {
    data: object;
}
const WatchList:React.FC<WatchListProps> = ({data}) => {
    return (
        <React.Fragment>
            <div>
        <Watch />
            </div>
        </React.Fragment>
    )
}
export default WatchList;