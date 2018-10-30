import React from 'react';
import ArticleList from '../components/ArticleList';
// import articlesData from '../fixtures/articlesData';
import fetchGetJSON from '../util/fetchGetJSON';
import {tvMazeApiUrl} from '../constants/config';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    const {text} = this.props.navigation.state.params;
    const searchUrl = `${tvMazeApiUrl}search/shows?q=${text}`;
    this.getShows(searchUrl);
  }

  getShows = (url) => {
    fetchGetJSON(url).then(resp => {
      const data = resp.map(sarja => {
        let newSarja = {
          ...sarja,
        };
        if (!newSarja.show.officialSite) {
          newSarja = {
            ...newSarja,
            show: {...newSarja.show, officialSite: undefined},
          };
        }
        if (!newSarja.show.image) {
          newSarja = {
            ...newSarja,
            show: {...newSarja.show, image: undefined},
          };
        }
        return newSarja;
      });
      // console.log(data);
      this.setState({
        isLoading: false,
        dataSource: data,
      });
    }).catch(error => console.log(error));
  };

  // arrow function, no need for super...
  handleNavigation = (routeName, params) => {
    // console.log(this.props);
    const {navigation} = this.props;
    // const navigation = props.navigation;
    navigation.navigate(routeName, params);
  };

  render() {
    if (this.state.isLoading) {
      return (
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
      );
    }

    return (
        <ArticleList
            articles={this.state.dataSource}
            style={styles.list}
            handleNavigation={this.handleNavigation}/>
    );
  };
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default HomeScreen;