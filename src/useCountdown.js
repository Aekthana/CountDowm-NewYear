import { useEffect, useState } from "react";


const useCountdown = ()=>{
    const [timeDiff, SettimeDiff] = useState(null);
    useEffect(()=>{
        const getNewYear =  new Date(2023,11,31);
        const Interval = setInterval(() => {
                const getDay = new Date();
                const diff = getNewYear - getDay;
                SettimeDiff(diff);
            }, 1000);
        
        return ()=>clearInterval(Interval);
    },[])

    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minsDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const secsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {daysDiff,hoursDiff,minsDiff,secsDiff};
}

export default useCountdown;