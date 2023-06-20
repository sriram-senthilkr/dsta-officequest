import Constants from 'expo-constants';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3001`;
// do this to tunnel physical device to localhost server

/*
Get leaderboard
@return: Array of User objects with _id, username and points fields in order of descending points
*/
export const getLeaderboard = async () => {
    try {
        const url = `${uri}/leaderboard`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        //console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
};
