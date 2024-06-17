// 90 created SearchScreen

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  // 96 passed to SearchBar UC
  const [term, setTerm] = useState('');

  // 96 passed to SearchBar UC
  const onTermChange = (term) => setTerm(term);

  return (
    <View>
      {/* 92 added SearchBar */}
      <SearchBar term={term} onTermChange={onTermChange} />
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
