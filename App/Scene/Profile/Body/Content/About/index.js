import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text, AnchorText } from '~/Component';
import styles from './styles';
import { transformServerDate } from '~/Transformer';

const ICON_SIZE = 18;

class About extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this._renderUserInformation = this._renderUserInformation.bind(this);
  }

  _renderUserInformation() {
    const { user } = this.props;
    return (
      <View>
        <View style={styles.infoContainer}>
          <View>
            <Icon
              name="briefcase"
              type="entypo"
              color="#8BC34A"
              size={ICON_SIZE}
              style={styles.icon}
            />
          </View>
          <View style={styles.info}>
            <Text>Working places</Text>
            <Text>
              {user.position} at {user.organization}
            </Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Icon
              name="home-variant"
              type="material-community"
              color="#FF9800"
              size={ICON_SIZE}
              style={styles.icon}
            />
          </View>
          <View style={styles.info}>
            <Text>Current Location</Text>
            <Text>Lives in Da Nang, Vietnam</Text>
          </View>
        </View>
        {user.dob ? (
          <View style={styles.infoContainer}>
            <Icon
              name="cake"
              type="entypo"
              color="#e74c3c"
              size={ICON_SIZE}
              style={styles.icon}
            />
            <Text>Born on {transformServerDate.toLocal(user.dob)}</Text>
          </View>
        ) : null}
        <View style={styles.infoContainer}>
          <View>
            <Icon
              name="car"
              type="material-community"
              color="#FFEB3B"
              size={ICON_SIZE}
              style={styles.icon}
            />
          </View>
          <View style={styles.info}>
            <Text>Personal Interests</Text>
            <Text>{user.interested_in}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Icon name="description" size={ICON_SIZE} style={styles.icon} />
          </View>
          <View style={styles.info}>
            <Text>Biography</Text>
            <Text>{user.bio}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Icon
            name="clock"
            type="material-community"
            color="#607D8B"
            size={ICON_SIZE}
            style={styles.icon}
          />
          <Text>Joined {transformServerDate.toLocal(user.created_at)}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon
            name="wifi"
            color="#009688"
            size={ICON_SIZE}
            style={styles.icon}
          />
          <Text>Followed by 999 people</Text>
        </View>
        {user.facebook_id ? (
          <View style={styles.infoContainer}>
            <View>
              <Icon
                name="facebook-box"
                type="material-community"
                color="#4267B2"
                size={ICON_SIZE}
                style={styles.icon}
              />
            </View>
            <AnchorText href={user.facebook_id} style={styles.info} />
          </View>
        ) : null}
        {user.twitter_id ? (
          <View style={styles.infoContainer}>
            <Icon
              name="twitter"
              type="material-community"
              color="#1DA1F2"
              size={ICON_SIZE}
              style={styles.icon}
            />
            <AnchorText href={user.twitter_id} style={styles.info} />
          </View>
        ) : null}
        {user.linkedin_id ? (
          <View style={styles.infoContainer}>
            <Icon
              name="linkedin-box"
              type="material-community"
              color="#0073B1"
              size={ICON_SIZE}
              style={styles.icon}
            />
            <AnchorText href={user.linkedin_id} style={styles.info} />
          </View>
        ) : null}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.sectionIcon}>
            <Icon name="network" type="entypo" color="white" size={ICON_SIZE} />
          </View>
          <View>
            <Text style={styles.title}>Intro</Text>
          </View>
        </View>
        {this._renderUserInformation()}
      </View>
    );
  }
}

export default About;
