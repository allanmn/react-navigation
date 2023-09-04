import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenA from "./src/views/ScreenA";
import ScreenB from "./src/views/ScreenB";
import ScreenC from "./src/views/ScreenC";

export default props => (
    <SafeAreaView style={{ flex: 1 }}>
        <ScreenA />
        <ScreenB />
        <ScreenC />
    </SafeAreaView>
)