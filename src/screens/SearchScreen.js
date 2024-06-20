// 90 created SearchScreen

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

import useResults from '../hooks/useResults';

const SearchScreen = () => {
  // 96 passed to SearchBar UC
  const [term, setTerm] = useState('');

  // 103 extracting the required data : Part 3
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      {/* 92 added SearchBar */}
      <SearchBar
        term={term}
        onTermChange={setTerm} // 99 passing setTerm directly instead of onTermChange
        onTermSubmit={() => searchApi(term)} // 99 passing searchApi directly instead of onTermSubmit
      />
      {/* 100 added */ errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
