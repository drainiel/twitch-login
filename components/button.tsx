import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

// INTERFACE EXTENSION
// Instead of typing out every prop a button needs (onPress, activeOpacity, etc.),
// 'extend' the standard React Native props.
// This means the component accepts everything a normal TouchableOpacity does,
// PLUS the custom 'variant' and 'children' props.
interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  children: string;                 
}

export default function Button({ 
  variant = 'primary', 
  children, 
  style, 
  ...props // Captures all other props (like onPress) into a single object
}: ButtonProps) {

  // THE "STYLE MAP" PATTERN
  // Instead of using complex logic inside the JSX (like ternary operators),
  // create a simple dictionary (object) that maps the variant name
  // to the specific styles it needs.
  // This separates "Logic" from "View".
  const theme = {
    primary: { 
      container: styles.primaryContainer, 
      text: styles.primaryText 
    },
    secondary: { 
      container: styles.secondaryContainer, 
      text: styles.secondaryText 
    },
  }[variant]; 

  return (
    <TouchableOpacity 
      // STYLE ARRAYS & INHERITANCE
      // React Native styles in an array are applied in order. 
      // 1. styles.baseContainer: Sets the shape (padding, radius).
      // 2. theme.container: Overrides the color based on variant.
      // 3. style: Allows the parent component to override layout (e.g., margin).
      style={[styles.baseContainer, theme.container, style]} 
      
      // Spread "...props" here so onPress, disabled, etc., 
      // are passed through to the actual touchable element.
      {...props}
    >
      <Text style={[styles.baseText, theme.text]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // --- BASE STYLES ---
  // These define the *structure* shared by ALL buttons.
  // We write this once to keep the buttons consistent in size/shape.
  baseContainer: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    width: '43%',
  },
  baseText: {
    fontSize: 16,
    fontWeight: 'bold', // Font weight is usually consistent across variants
  },

  // --- THEME STYLES ---
  // These define the *skin* (colors).
  // They only contain properties that change between variants.
  
  // Primary (Glass/Transparent feel)
  primaryContainer: { 
    backgroundColor: 'rgba(255, 255, 255, 0.1)' 
  },
  primaryText: { 
    color: '#fff' 
  },
  
  // Secondary (Solid White)
  secondaryContainer: { 
    backgroundColor: '#fff' 
  },
  secondaryText: { 
    color: '#000' 
  },
});