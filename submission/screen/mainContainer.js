import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
// Screens
import Home from "./Home";
import LeaderBoard from "./Leaderboard";
import Activity from "./Activity";
import Bookmark from "./Bookmark";
import Profile from "./Profile";

//Screen names
const homeName = "Home";
const leaderboardName = "Leaderboard";
const activityName = "Activity";
const bookmarkName = "Bookmark";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: "#011E29" },
          headerShown: false,
          margin: 20,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === leaderboardName) {
              iconName = focused ? "chart" : "chart-outline";
            } else if (rn === activityName) {
              iconName = focused ? "watch" : "watch-outline";
            } else if (rn === bookmarkName) {
              iconName = focused ? "bookmark" : "bookmark-outline";
            } else if (rn === profileName) {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 100 },
        }}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={leaderboardName} component={LeaderBoard} />
        <Tab.Screen name={activityName} component={Activity} />
        <Tab.Screen name={bookmarkName} component={Bookmark} />
        <Tab.Screen name={profileName} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
