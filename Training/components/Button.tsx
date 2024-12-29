import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Define the type for props
interface ButtonProps {
  title: string;
  onPress: () => void; // This represents a function that returns nothing (void)
  variant?: 'filled' | 'outlined'; // Optional prop with two possible values
}

const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'filled' }) => {
  const isFilled = variant === 'filled';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isFilled
          ? { backgroundColor: '#3cc8a0' }
          : { borderColor: '#3cc8a0', borderWidth: 2, backgroundColor: 'white' }
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isFilled ? { color: '#FFFFFF' } : { color: '#3cc8a0' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default Button;
