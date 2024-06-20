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

  // 100 to store error message from catch block
  const [errorMessage, setErrorMessage] = useState('');

  // 101 added searchTerm as parameter
  const searchApi = async (searchTerm) => {
    try {
      // 99 the params are automatically added to search url as query string like /search?limit=50
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });

      // 99 storing response in results
      setResults(response.data.businesses);
    } catch (err) {
      // console.log(err); // make sure to break the code to test
      // console.log(typeof err); //=> object
      // 100 setting errorMessage
      setErrorMessage(err.message);
    }
  };

  // 96 passed to SearchBar UC
  // 99 commented in favour of passing setTerm and searchApi directly
  // const onTermChange = (term) => setTerm(term);
  // const onTermSubmit = () => searchApi(); // 97 added

  // 101 Don't do it because in SearchApi, there is setResults, and everytime we call setResult, it cause searchApi to be called again because of component re-render on setState, meaning searchApi is in infinite loop write console.log() in searchApi to test
  // searchApi('pasta');

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
