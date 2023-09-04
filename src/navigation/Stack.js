import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="ScreenA" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="ScreenA" component={ScreenA} options={{ title: 'Intial Screen' }} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="ScreenC" component={ScreenC} />
    </Stack.Navigator>
)