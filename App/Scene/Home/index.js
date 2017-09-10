import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import { Text } from '~/Component';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Colors } from '~/Theme';
import styles from './styles';

class HomeScene extends PureComponent {
  static drawer = {
    primary: true,
  };

  static header = {
    leftIcon: 'drawer',
    float: true,
    theme: 'dark',
    backgroundColor: 'rgba(0,0,0,0.5)',
    statusBarBackgroundColor: 'rgba(0,0,0,0.5)',
    actions: [
      {
        icon: {},
        onPress: () => {
          console.log('hello there');
        },
      },
    ],
  };

  static propTypes = {
    login: PropTypes.func,
  };

  render() {
    const text = [
      'Welcome to cem-client!',
      'We are under developement.',
      'Shake your phone to open the developer menu.',
      'Press Menu button on the top left corner',
      'to connect to other scene.',
    ];
    return (
      <View style={styles.container}>
        <View style={styles.centerText}>
          {text.map((text, index) =>
            <Text key={index}>
              {text}
            </Text>,
          )}
        </View>
        <Button title="Login" onPress={this.props.login} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(NavigationActions.navigate({ routeName: 'login' })),
});

export default connect(undefined, mapDispatchToProps)(HomeScene);
