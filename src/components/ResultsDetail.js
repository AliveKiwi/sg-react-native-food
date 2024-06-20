import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({});
