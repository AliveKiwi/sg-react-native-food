// 90 created SearchScreen

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import json from '../../console';

const SearchScreen = () => {
  // 96 passed to SearchBar UC
  const [term, setTerm] = useState('');

  // 103 extracting the required data : Part 3
  const [searchApi, results, errorMessage] = useResults();

  // 105 filter results by price
  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

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
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
