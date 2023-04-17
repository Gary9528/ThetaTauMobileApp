import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Brother = (props) => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => {navigation.navigate('BrotherPage')}}>
      <View style={styles.column}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#710000',
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: 10,
      marginBottom: 10,
    },
    text: {
        color: '#E29900',
    },
    column: {
      justifyContent: 'center', 
      alignItems: 'center',
      flex: 1, 
      marginHorizontal: 5,
    }
  });

export default Brother;