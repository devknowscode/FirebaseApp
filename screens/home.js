/**
 * HomeScreen: list of services firebase we use
 */

import React from "react";
import { View } from "react-native";
import { ListItem } from "@rneui/themed";

function HomeScreen({ navigation }) {
    const serviceList = [
        { uid: "001", title: "Analytics", route: "Analytics" },
        { uid: "002", title: "Cloud Firestore", route: "CloudFirestore" },
        { uid: "003", title: "Cloud Storage", route: "CloudStorage" },
        { uid: "004", title: "In-App Messaging", route: "InAppMessaging" },
        { uid: "005", title: "Crashlytics", route: "Crashlytics" },
        { uid: "007", title: "Authentication", route: "Authentication" },
        { uid: "006", title: "AdMob", route: "AdMob" },
        { uid: "008", title: "Cloud Messaging", route: "CloudMessaging" },
    ];

    return (
        <View>
            {serviceList.map(({ uid, title, route }) => (
                <ListItem key={uid} onPress={() => navigation.navigate(route)}>
                    <ListItem.Title>{title}</ListItem.Title>
                </ListItem>
            ))}
        </View>
    );
}

export default HomeScreen;
