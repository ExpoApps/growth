// app/index.tsx
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Define the union type for the icon names
type IconNames = 'timer-outline' | 'document-text-outline' | 'notifications-outline' | 'checkmark-done-outline' | 'list-outline' | 'calendar-outline';

const buttonData: { text: string; icon: IconNames; color: string }[] = [
  { text: 'Timer', icon: 'timer-outline', color: '#FFB3BA' },
  { text: 'Notes', icon: 'document-text-outline', color: '#FFDFBA' },
  { text: 'Daily reminder', icon: 'notifications-outline', color: '#FFFFBA' },
  { text: 'Checklists', icon: 'checkmark-done-outline', color: '#BAFFC9' },
  { text: 'Lists', icon: 'list-outline', color: '#BAE1FF' },
  { text: 'Dates', icon: 'calendar-outline', color: '#D4A5A5' },
];

interface ButtonProps {
  color: string;
  text: string;
  icon: IconNames;
  onPress: () => void;
}

const BigButton: React.FC<ButtonProps> = ({ color, text, icon, onPress }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
    <Ionicons name={icon} size={24} color="#333" style={styles.icon} />
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default function Index() {
  const handlePress = (buttonText: string) => {
    console.log(`${buttonText} button pressed`);
  };

  return (
    <View style={styles.container}>
      {buttonData.map((button, index) => (
        <BigButton
          key={index}
          color={button.color}
          text={button.text}
          icon={button.icon}
          onPress={() => handlePress(button.text)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
});