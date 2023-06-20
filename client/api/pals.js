import Constants from 'expo-constants';

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3001`;
// do this to tunnel physical device to localhost server

/*
Generates a Pal randomly and returns the index of the generated pal
@Params: userId: string
@Return: palNumber: number
*/
export const generatePal = async (userId) => {
    try {
        const url = `${uri}/pals/${userId}/generate-pal`;
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 404) {
            throw new Error('User not found');
        }
        if (response.status === 500) {
            throw new Error('Server error');
        }
        const data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

/*
Sends a pal to another user
palNumber is the number of the corresponding index in user palsCount array 
username is the username of the receiver
@Params: userId: string, username: string, palNumber: number
@Return: user object of sender
*/
export const sendPal = async (userId, username, palNumber) => {
    try {
        const url = `${uri}/pals/${userId}/send-pal`;
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                palNumber: palNumber,
            }),
        });
        if (response.status === 400) {
            throw new Error('Pal out of index');
        }
        if (response.status === 401) {
            throw new Error('User does not have pal to send');
        }
        if (response.status === 404) {
            throw new Error('User not found');
        }
        if (response.status === 405) {
            throw new Error('Friend not found');
        }
        if (response.status === 500) {
            throw new Error('Server error');
        }
        const data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
