import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CentralText from "./src/components/CentralText";

export default props => (
    <SafeAreaView style={{ flex: 1 }}>
        <CentralText>App</CentralText>
    </SafeAreaView>
)