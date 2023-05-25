import React, {useEffect, useState} from "react";
import Swiper from "react-native-swiper";
import {Dash1, Dash2, Dash3} from "./dashParts";
import {Text} from "react-native";
import fetchData from "../../utils/hooks/fetch";

const Dashboard = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchData();
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, []);

    if (!data) {
        return <Text>Loading...</Text>;
    }

    return (
            <Swiper index={1}>
                <Dash1 data={data}/>
                <Dash2/>
                <Dash3/>
            </Swiper>
    );
};

export default Dashboard;
