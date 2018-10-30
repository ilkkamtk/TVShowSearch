import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
} from 'react-native';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Search for TV show'};
  }

  componentDidMount() {
    console.log(('search mounted'));
    this.setState({text: ''});
  }

  doSearch = () => {
    this.handleNavigation('Results', this.state);
    this.resetText();
  };

  handleNavigation = (routeName, params) => {
    // console.log(this.props);
    const {navigation} = this.props;
    // const navigation = props.navigation;
    navigation.navigate(routeName, params);
  };

  resetText = () => {
    this.setState({text: ''});
  };

  render() {
    return (
        <View>
          <TextInput
              style={styles.kentta}
              onChangeText={(text) => this.setState({text})}
              placeholder={'Search for TV show'}
              value={this.state.text}
          />
          <TouchableOpacity style={styles.container}
                            onPress={this.doSearch}
          >
            <Text style={styles.nappi}>Search</Text>
          </TouchableOpacity>
        </View>);
  }
};

const styles = StyleSheet.create({
  kentta: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    margin: 40,
    padding: 10,
  },
  container: {
    alignItems: 'center',
    padding: 10,
  },
  nappi: {
    fontSize: 18,
    backgroundColor: 'blue',
    textAlign: 'center',
    width: 150,
    padding: 20,
    color: 'white',
  },
});

export default SearchScreen;