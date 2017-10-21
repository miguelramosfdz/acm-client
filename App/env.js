import { transformServerEndPoint } from '~/Transformer';
import { Constants } from 'expo';
import { Platform } from 'react-native';
import env from '../env';
/**
 * Export local env
 */

// Check if App is using remote debugging
export const IS_DEBUGGING = typeof atob !== 'undefined';
export const IS_DEVICE = Constants.isDevice;
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

/**
 * Export global env
 */
// Export all default enviroment
Object.keys(env).map(key => {
  // console.log(key);
  switch (key) {
    case 'SERVER_ENDPOINT': {
      if (__DEV__) {
        if (IS_DEBUGGING || IS_DEVICE) {
          module.exports['SERVER_ENDPOINT'] = transformServerEndPoint(
            IS_ANDROID ? Constants.experienceUrl : Constants.linkingUrl,
          );
          break;
        }
      }
    }
    default:
      module.exports[key] = env[key];
      break;
  }
});

console.log('Server endpoint URI: ', module.exports['SERVER_ENDPOINT']);
