import { Tabs } from "expo-router";
import React, {useState} from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const [toggle, setToggle] = useState('request')
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: true,
            }}
        > 
            <Tabs.Screen
                name="index"
                options={{
                    title: "Request Help",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                    href: toggle == 'request' ? "/(mainFragments)/" : null
                }}
            />
            <Tabs.Screen
                name="helpprovider"
                initialParams={{setToggle}}
                options={{
                    title: "Helper",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                    href: toggle == 'help' ? "/(mainFragments)/helpprovider" : null
                }}
                
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: "History",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "code-slash" : "code-slash-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="temp"
                options={{
                    title: "Temp Page",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
        
    );
}
