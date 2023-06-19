import Constants from 'expo-constants';

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3001`;
// do this to tunnel physical device to localhost server

/*
Creates Quest
@Params: title, description, type, points, startDate (not required), endDate(not required)
@return: Quest object
*/
export const createQuest = async (
    title,
    description,
    type,
    points,
    startDate,
    endDate
) => {
    try {
        const url = `${uri}/quests`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                type: type,
                points: points,
                startDate: startDate,
                endDate: endDate,
            }),
        });
        if (response.status === 400) {
            throw new Error('No title/ points given');
        }
        const data = await response.json();
        //console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
};

/*
Get all quests
@return: Array of Quest objects
*/
export const getQuests = async () => {
    try {
        const url = `${uri}/quests`;
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

export const resetQuests = async (userId) => {
    try {
        const url = `${uri}/quests/resetquests`;
        console.log(userId)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
            })
        });
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}