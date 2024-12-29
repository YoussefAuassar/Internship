import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

function ListsScreen() {
	return <View style={styles.container}></View>;
}

export default ListsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.whiteGray,
	},
});
