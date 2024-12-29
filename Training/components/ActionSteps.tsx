import React from "react";
import {View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function ActionSteps() {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<View style={styles.iconContainerWhite}>
					<Ionicons name="search" size={24} color="dark" />
				</View>
				<Text style={styles.text}>Find Products</Text>
			</View>

			<View style={styles.box}>
				<View style={styles.iconContainerOrange}>
					<Ionicons name="camera" size={24} color="white" />
				</View>
				<Text style={styles.text}>Take Photos</Text>
			</View>

			<View style={styles.box}>
				<View style={styles.iconContainerGreen}>
					<Ionicons name="ticket" size={24} color="white" />
				</View>
				<Text style={styles.text}>Earn Tickets</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 5,
		justifyContent: "space-between",
		alignItems: "center",
	},
	box: {
		flex: 1,
		marginHorizontal: 4,
	    backgroundColor: "#fff",
		padding: 10,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 1,
	},
	iconContainerWhite: {
		width: 50,
		height: 50,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderColor: Colors.light.icon,
		borderWidth: 0.5,
		marginBottom: 10,
	},
	iconContainerOrange: {
		width: 50,
		height: 50,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.orange,
		marginBottom: 10,
	},
	iconContainerGreen: {
		width: 50,
		height: 50,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#40c6a0",
		marginBottom: 10,
	},
	text: {
		fontSize: 16,
		fontWeight: "bold",
		color: Colors.light.text,
		textAlign: "center",
	},
});
