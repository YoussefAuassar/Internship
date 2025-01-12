import React from "react";
import { View, Text, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { Colors } from "@/constants/Colors";

interface VoucherCardProps {
  imageSource: ImageSourcePropType;
  amount: string;
  description: string;
  textBoxColor: string; 
  coinImageSource?: ImageSourcePropType; 
}

const VoucherCard: React.FC<VoucherCardProps> = ({
  imageSource,
  amount,
  description,
  textBoxColor, 
  coinImageSource,
}) => {
  return (
    <View style={styles.voucherBox}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageSource} />
        {coinImageSource && (
          <Image style={styles.coinImage} source={coinImageSource} />
        )}
      </View>
      <View style={[styles.textBox, { backgroundColor: textBoxColor }]}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  voucherBox: {
    width: "32%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  imageContainer: {
    alignItems: "center",
    paddingVertical: 5,
    position: "relative", 
  },
  image: {
    width: 90,
    height: 50,
    resizeMode: "contain",
  },
  coinImage: {
    position: "absolute", 
    top: -10, 
    width: 25, 
    height: 25, 
    resizeMode: "contain",
  },
  textBox: {
    alignItems: "center",
    paddingVertical: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  amount: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontSize: 8,
  },
});

export default VoucherCard;
