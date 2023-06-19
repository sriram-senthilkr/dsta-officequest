import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const CountdownTimer = () => {
    // Set your target date here
    const targetDate = new Date("2023-07-01T00:00:00+08:00");

    const calculateTimeLeft = () => {
        const now = new Date();
        const timeDiff = targetDate.getTime() - now.getTime();

        const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        return { daysLeft, hoursLeft };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <View style={{flexDirection:'row'}}>
            <Text>Ends in: </Text>
            <Text style={{fontWeight:600}}>{timeLeft.daysLeft} Days {timeLeft.hoursLeft} hours</Text>
        </View>
    );
};

export default CountdownTimer;
