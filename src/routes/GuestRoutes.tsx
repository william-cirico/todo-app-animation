import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();

export function GuestRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{ 
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={SignInScreen} />
        </Stack.Navigator>
    );
}