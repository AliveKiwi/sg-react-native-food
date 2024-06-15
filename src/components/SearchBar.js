// 91 created SearchBar
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      {/* 93 added search icon */}
      <Feather name="search" size={30} />
      <TextInput placeholder="Search" style={styles.inputStyle} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  // 92 makes SearchBar grey and rounded
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    // borderColor: 'black', // 94 to check the width of TextInput
    borderWidth: 1,
  },
});
