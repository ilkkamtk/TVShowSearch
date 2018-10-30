import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet} from 'react-native';

import ArticleListItem from './ArticleListItem';

const ArticleList = (props) => {
  const {articles, handleNavigation} = props;
  // console.log(articles);
  return (
      <FlatList
          style={styles.container}
          data={articles}
          renderItem={({item}) => <ArticleListItem
              name={item.show.name}
              image={item.show.image}
              url={item.show.url}
              officialSite={item.show.officialSite}
              summary={item.show.summary}
              onHandlePress={handleNavigation}
          />}
          keyExtractor={article => `${article.show.id}`}
      />
  );
};

ArticleList.defaultProps = {
  articles: [
    {
      show: {
        name: 'yay',
        url: 'yay',
        officialSite: 'yay',
        image: {
          medium: 'yay',
        },
        summary: 'yay',
      },
    }],
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})),
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ArticleList;
