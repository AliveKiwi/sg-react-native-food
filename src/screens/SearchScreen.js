// 90 created SearchScreen

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  // 96 passed to SearchBar UC
  const [term, setTerm] = useState('');

  // 96 passed to SearchBar UC
  const onTermChange = (term) => setTerm(term);
  const onTermSubmit = () => console.log(`term was submitted`); // 97 added

  return (
    <View>
      {/* 92 added SearchBar */}
      <SearchBar
        term={term}
        onTermChange={onTermChange}
        onTermSubmit={onTermSubmit} // 97 added
      />
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
