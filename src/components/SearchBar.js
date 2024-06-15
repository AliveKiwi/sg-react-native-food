// 91 created SearchBar
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>SearchBar</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  // 92 makes SearchBar grey and rounded
  background: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});
