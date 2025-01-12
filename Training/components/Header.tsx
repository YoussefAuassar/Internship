import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Images } from "@/constants/Images";
import { Texts } from "@/constants/Texts";

export default function Header() {
	return (
		<View style={styles.header}>
			<Image style={styles.profileImage} source={Images.profilePicture} />
			<View style={styles.textContainer}>
				<Text style={styles.name}>{Texts.greeting}</Text>
				<Text style={styles.subtext}>{Texts.scans}</Text>
			</View>
			<View style={styles.ticketContainer}>
				<View style={styles.ticket}>
					<Ionicons
						name="ticket"
						size={24}
						color={Colors.darkGray}
						style={styles.ticketIcon}
					/>
					<Text style={styles.ticketNumber}>{Texts.ticketNumber}</Text>
				</View>
				<Text style={styles.viewEntries}>{Texts.viewEntries}</Text>
			</View>
			<View style={styles.line} />
		</View>
	);
}

const styles = StyleSheet.create({
	ticket: {
		flexDirection: "row",
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	ticketContainer: {
		flexDirection: "column",
		alignItems: "center",
		marginLeft: "auto",
	},
	ticketIcon: {
		marginRight: 5,
	},
	ticketNumber: {
		fontSize: 20,
		fontWeight: "bold",
		color: Colors.darkGray,
		marginBottom: 5,
	},
	viewEntries: {
		fontSize: 12,
		color: Colors.coral,
	},
	profileImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	textContainer: {
		marginLeft: 15,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
		color: Colors.darkGray,
	},
	subtext: {
		fontSize: 12,
		color: Colors.lightGray,
	},
	line: {
		height: 1,
		backgroundColor: Colors.lightGraySeparator,
		width: "100%",
		marginTop: 20,
	},
});
