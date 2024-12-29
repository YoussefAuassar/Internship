import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Details() {
	return (
		<View style={styles.details}>
			<View style={styles.box}>
				<Text style={styles.number}>6</Text>
				<Text style={styles.text}>Scans Today</Text>
				<Text style={styles.viewScans}>View Scans</Text>
			</View>

			<View style={styles.box}>
				<Text style={styles.secondnumber}>+12</Text>
				<Text style={styles.text}>Tickets Earned</Text>
				<Text style={styles.viewScans}>View Entries</Text>
			</View>

			<View style={styles.box}>
				<Text style={styles.thirdnumber}>124</Text>
				<Text style={styles.text}>Total Tickets</Text>
				<Text style={styles.viewScans}>View Entries</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 10,
	},
	box: {
		width: "32%",
		paddingVertical: 8,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 1,
		backgroundColor: "#fff",
	},
	number: {
		fontSize: 20,
		fontWeight: "bold",
		color: Colors.lightGreen,
	},
	secondnumber: {
		fontSize: 20,
		fontWeight: "bold",
		color: Colors.black,
	},
	thirdnumber: {
		fontSize: 20,
		fontWeight: "bold",
		color: Colors.black,
	},
	text: {
		fontSize: 11.8,
		color: Colors.black,
		marginTop: 5,
	},
	viewScans: {
		fontSize: 12,
		color: Colors.coral,
		marginTop: 5,
	},
});
