import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "@/components/Header";

function scanWinScreen() {
	return (
		<View style={styles.container}>
			<Header />
		</View>
	);
}

export default scanWinScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f8f7f3",
	},
});
