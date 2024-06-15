// 90 created SearchScreen

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  return (
    <View>
      {/* 92 added SearchBar */}
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
