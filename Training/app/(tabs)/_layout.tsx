import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			{/* Tab for Home */}
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="home" color={color} />
					),
				}}
			/>

			{/* Tab for Products */}
			<Tabs.Screen
				name="products"
				options={{
					title: "Products",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="search" color={color} />
					),
				}}
			/>

			{/* Tab for Lists */}
			<Tabs.Screen
				name="lists"
				options={{
					title: "Lists",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="list" color={color} />
					),
				}}
			/>

			{/* Tab for Scan & Win */}
			<Tabs.Screen
				name="scanWin"
				options={{
					title: "Scan & Win",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="ticket" color={color} />
					),
				}}
			/>

			{/* Tab for Profile */}
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="person" color={color} />
					),
				}}
			/> 
		</Tabs>
	);
}
