import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "@/components/Header";
import ActionSteps from "@/components/ActionSteps";
import CountDown from "@/components/CountDown";
import Button from "@/components/Button";
import Details from "@/components/Details";

import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

function ScanWinScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.safeContainer}>
			<ScrollView style={styles.container}>
				<Header />

				<Text style={styles.text}>
					It's simple, to win the following prizes, all you need is to:
				</Text>

				<ActionSteps />

				<View style={styles.timer}>
					<CountDown />
				</View>

				<View style={styles.details}>
					<Details />
				</View>


				<View style={styles.button}>
					<Button
						title="Scan Products & Win"
						onPress={() => router.push("/pages/blank")}
						variant="filled"
					/>
				</View>

				<Text style={styles.secondaryText}>Know anyone interested?</Text>

				<Text style={styles.thirdText}>
					For every new registration, both yourself & your friend win 1 free
					ticket.
				</Text>

				<View style={styles.secondarybutton}>
					<Button
						title="Share with Friends & Win"
						onPress={() => console.log("Share button pressed!")}
						variant="outlined"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default ScanWinScreen;

const styles = StyleSheet.create({
	voucherContainer: {
		marginTop: 25,
	},

	safeContainer: {
		flex: 1,
		backgroundColor: Colors.whiteGray,
	},

	container: {
		flex: 1,
		backgroundColor: Colors.whiteGray,
	},

	text: {
		paddingHorizontal: 10,
		fontSize: 12.7,
		color: Colors.black,
		marginBottom: 10,
	},

	timer: {
		marginTop: 10,
	},

	button: {
		marginTop: 10,
	},

	secondarybutton: {
		marginTop: 20,
	},

	secondaryText: {
		fontSize: 20,
		fontWeight: "bold",
		color: Colors.black,
		paddingHorizontal: 10,
		marginTop: 15,
	},
	thirdText: {
		paddingHorizontal: 10,
		fontSize: 12.7,
		color: Colors.black,
		marginTop: 10,
	},

	details: {
		marginTop: 10,
	},
});
