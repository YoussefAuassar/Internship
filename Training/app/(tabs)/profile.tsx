import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

function ProfileScreen() {
	return <View style={styles.container}></View>;
}

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.whiteGray,
	},
});
