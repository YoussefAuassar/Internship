import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

function ProductsScreen() {
	return <View style={styles.container}></View>;
}

export default ProductsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.whiteGray,
	},
});
