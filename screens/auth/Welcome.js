import React from "react";

import {Text, TouchableOpacity, View} from "react-native";

const Welcome = ({navigation}) => {
    return (
        <View>
            <Text>Welcome</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>LogIn</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Welcome;
