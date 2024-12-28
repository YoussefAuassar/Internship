import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "@/components/Header";
import ActionSteps from "@/components/ActionSteps";

function ScanWinScreen() {
	return (
		<View style={styles.container}>
			<Header />
			<Text style={styles.text}>
				It's simple, to win the following prizes, all you need is to:
			</Text>
			<ActionSteps />
		</View>
	);
}

export default ScanWinScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f8f7f3",
	},
	text: {
		paddingHorizontal: 20,
		fontSize: 12.7,
		color: "#333",
		marginBottom: 10,
	},
});
