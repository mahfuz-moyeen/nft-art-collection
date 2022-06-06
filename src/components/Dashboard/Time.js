import React, { useEffect, useState } from 'react';
import { Countdown } from 'react-daisyui';



const Time = () => {

    const [value, setValue] = useState(20)
    const [min, setMin] = useState(2);
    const [hour, setHour] = useState(10);

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue((v) => (v <= 0 ? value : v - 1))
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [value])

    if (value === 0) {
        setMin(min - 1)
        setValue(60)
    }

    if (min === 0) {
        setHour(hour - 1)
        setMin(60)
    }



    return (
        <div class="stats stats-vertical lg:stats-horizontal shadow bg-base-100">

            <div class="stat">
                <h1>Auction Ending In</h1>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">

                    <span className="countdown hidden">
                        <span style={{ value: value }}></span>
                    </span>
                    <div className="flex flex-col">
                        <Countdown className="font-mono text-5xl" value={hour} />
                        hours
                    </div>
                    <div className="flex flex-col">
                        <Countdown className="font-mono text-5xl" value={min} />
                        min
                    </div>
                    <div className="flex flex-col">
                        <Countdown className="font-mono text-5xl" value={value} />
                        sec
                    </div>
                </div>
            </div>

            <div class="stat">
                <div class="stat-title">Current Bid</div>
                <div class="stat-value">1.990 ETH</div>
                <div class="stat-desc">$55,000.99</div>
            </div>

        </div>
    )
}

export default Time;