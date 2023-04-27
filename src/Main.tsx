import { View, Text } from "react-native"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"


const Main = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Hello World</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export { Main }