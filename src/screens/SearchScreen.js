// 90 created SearchScreen

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

import yelp from '../api/yelp';

const SearchScreen = () => {
  // 96 passed to SearchBar UC
  const [term, setTerm] = useState('');

  // 99 to store result of yelp api call
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    // 99 the params are automatically added to search url as query string like /search?limit=50
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: term,
        location: 'san jose',
      },
    });

    // 99 storing response in results
    setResults(response.data.businesses);
  };

  // 96 passed to SearchBar UC
  // 99 commented in favour of passing setTerm and searchApi directly
  // const onTermChange = (term) => setTerm(term);
  // const onTermSubmit = () => searchApi(); // 97 added

  return (
    <View>
      {/* 92 added SearchBar */}
      <SearchBar
        term={term}
        onTermChange={setTerm} // 99 passing setTerm directly instead of onTermChange
        onTermSubmit={searchApi} // 99 passing searchApi directly instead of onTermSubmit
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
