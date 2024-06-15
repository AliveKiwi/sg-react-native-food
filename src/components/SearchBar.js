// 91 created SearchBar
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      {/* 93 added search icon */}
      <Feather name="search" size={30} />
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
