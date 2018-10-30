import React from 'react';
import ArticleList from '../components/ArticleList';
import articlesData from '../fixtures/articlesData';
import {WebView} from 'react-native';

const ArticleScreen = (props) => {
  // console.log(props.navigation.state.params);
  const url = props.navigation.state.params;
  // console.log(props.navigation.state.params);
  return <WebView
      source={{uri: url}}
      startInLoadingState={true}
  />;
};

export default ArticleScreen;