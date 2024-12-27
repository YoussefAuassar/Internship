import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IMAGES, TEXT, COLORS } from "@/constants/Colors";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.profileImage}
        source={IMAGES.profilePicture}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{TEXT.greeting}</Text>
        <Text style={styles.subtext}>{TEXT.scans}</Text>
      </View>
      <View style={styles.ticketContainer}>
        <View style={styles.ticket}>
          <Ionicons
            name="ticket"
            size={24}
            color={COLORS.darkGray}
            style={styles.ticketIcon}
          />
          <Text style={styles.ticketNumber}>{TEXT.ticketNumber}</Text>
        </View>
        <Text style={styles.viewEntries}>{TEXT.viewEntries}</Text>
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
    padding: 20,
    paddingTop: 40,
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
    color: COLORS.darkGray,
    marginBottom: 5,
  },
  viewEntries: {
    fontSize: 12,
    color: COLORS.coral,
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
    color: COLORS.darkGray,
  },
  subtext: {
    fontSize: 12,
    color: COLORS.lightGray,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.lightGraySeparator,
    width: "100%",
    marginTop: 32,
  },
});
