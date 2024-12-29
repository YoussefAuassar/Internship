import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Colors } from "@/constants/Colors";
import CountDown from "react-native-countdown-component";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

export default function CountDownTimer() {
	const [nextDrawTime, setNextDrawTime] = useState<number | null>(null);
	const [formattedDate, setFormattedDate] = useState<{
		day: string;
		month: string;
		time: string;
	}>({
		day: "",
		month: "",
		time: "",
	});

	useEffect(() => {
		const fetchNextDrawTime = async () => {
			try {
				const { data } = await axios.get(
					"https://api.mockfly.dev/mocks/06673fb8-d8f0-4cb4-bc79-37bad4390883/api/lottery/next-draw"
				);
				const nextDrawDate = new Date(data.nextDraw);

				setFormattedDate({
					day: nextDrawDate.getDate().toString(),
					month: nextDrawDate.toLocaleString("default", { month: "long" }),
					time: nextDrawDate.toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
				});
				setNextDrawTime(nextDrawDate.getTime());
			} catch (error) {
				Alert.alert("Error", "Failed to fetch next draw time.");
			}
		};

		fetchNextDrawTime();
	}, []);

	if (nextDrawTime === null) return <Text>Loading...</Text>;

	return (
		<View>
			<LinearGradient
				colors={["#FFBE55", "#ffda89", "#fcf2a8"]}
				style={styles.countdownBox}
			>
				<View style={styles.nextdraw}>
					<Text style={styles.dayText}>{formattedDate.day}</Text>
					<Text style={styles.monthText}>{formattedDate.month}</Text>
					<Text style={styles.hoursText}>{formattedDate.time}</Text>
				</View>
				<View style={styles.nextdrawContainer}>
					<Text style={styles.nextDrawText}>Next Draw</Text>
					<CountDown
						until={Math.floor((nextDrawTime - Date.now()) / 1000)}
						size={24}
						showSeparator
						digitStyle={{ backgroundColor: "none" }}
						timeLabels={{ m: null, s: null }}
					/>
				</View>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	countdownBox: {
		marginHorizontal: 10,
		borderRadius: 8,
		padding: 9,
		flexDirection: "row",
	},
	nextDrawText: {
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: 14,
	},
	nextdraw: {
		paddingVertical: 6,
		paddingHorizontal: 12,
		backgroundColor: Colors.whiteGray,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	nextdrawContainer: {
		marginTop: 15,
	},
	dayText: {
		fontSize: 40,
		fontWeight: "bold",
	},
	monthText: {
		fontSize: 12,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
	hoursText: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
