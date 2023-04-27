import { Text } from "react-native"
import { SafeAreaView as RNSafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { styled } from 'nativewind';

const SafeAreaView = styled(RNSafeAreaView);

const Main = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 items-center justify-center">
                <Text className="font-bold text-3xl">Hello World</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export { Main }