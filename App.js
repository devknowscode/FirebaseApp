import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import AnalyticsScreen from "./screens/analytics";
import FirestoreScreen from "./screens/firestore";
import StorageScreen from "./screens/storage";
import InAppMessagingScreen from "./screens/inappmessaging";
import CrashlyticsScreen from "./screens/crashlytics";
import AuthScreen from "./screens/auth";
import AdMobScreen from "./screens/admob";
import CloudMessaging from "./screens/cloudmessaging";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Analytics" component={AnalyticsScreen} />
                <Stack.Screen name="CloudFirestore" component={FirestoreScreen} />
                <Stack.Screen name="CloudStorage" component={StorageScreen} />
                <Stack.Screen name="InAppMessaging" component={InAppMessagingScreen} />
                <Stack.Screen name="Crashlytics" component={CrashlyticsScreen} />
                <Stack.Screen name="Authentication" component={AuthScreen} />
                <Stack.Screen name="AdMob" component={AdMobScreen} />
                <Stack.Screen name="CloudMessaging" component={CloudMessaging} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
