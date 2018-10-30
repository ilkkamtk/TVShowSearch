import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import HTMLView from 'react-native-htmlview';
import moment from 'moment';

class ArticleListItem extends React.Component {
  onHandlePress = (url) => {
    const {onHandlePress} = this.props;
    onHandlePress('Article', url);
  };

  render() {
    // console.log(this.props);
    const {name, image, url, officialSite, summary} = this.props;
    // console.log(image);
    return (
        <View style={styles.item}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.imageBox}>
            <Image
                style={styles.image}
                source={{uri: image.medium}}
            />
            <View style={styles.buttons}>
              {officialSite && <TouchableOpacity style={styles.button}
                                                 onPress={() => {
                                                   this.onHandlePress(
                                                       officialSite);
                                                 }}>
                <Text style={styles.buttonText}>Official site</Text>
              </TouchableOpacity>
              }
              <TouchableOpacity style={styles.button}
                                onPress={() => {
                                  this.onHandlePress(url);
                                }}>
                <Text style={styles.buttonText}>TVMaze site</Text>
              </TouchableOpacity>
            </View>
          </View>
          <HTMLView value={summary} stylesheet={htmlStyles}/>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    padding: 8,
  },
  title: {
    fontSize: 18,
  },
  imageBox: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 240,
    height: 320,
    borderRadius: 10,
  },
  buttons: {
    width: 240,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 50,
    bottom: 20,
  },
  button: {
    backgroundColor: 'rgba(0,0,255,0.5)',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '900',
  },
});

const htmlStyles = StyleSheet.create({
  p: {
    paddingHorizontal: 10,
  },
});

ArticleListItem.defaultProps = {
  url: undefined,
  officialSite: undefined,
  image: {
    medium: 'http://placekitten.com/501/301',
  },
  summary: 'Summary',
};

ArticleListItem.propTypes = {
  name: PropTypes.string.isRequired,
  officialSite: PropTypes.string,
  image: PropTypes.shape({}),
  onHandlePress: PropTypes.func.isRequired,
};

export default ArticleListItem;
