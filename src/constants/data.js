const Chat = {
    id: '1',
    users: [{
        id: 'u1',
        name: 'Vadim',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    },
    {
        id: 'u2',
        name: 'Lukas',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    }],
    messages: [{
        id: 'm1',
        content: 'How are you, Lukas!',
        createdAt: '2020-10-10T12:48:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    },
    {
        id: 'm2',
        content: 'I am good, good',
        createdAt: '2020-10-03T14:49:00.000Z',
        user: {
            id: 'u2',
            name: 'Lukas',
        },
    }, {
        id: 'm3',
        content: 'What about you?',
        createdAt: '2020-10-03T14:49:40.000Z',
        user: {
            id: 'u2',
            name: 'Lukas',
        },
    }, {
        id: 'm4',
        content: 'Good as well, preparing for the stream now.',
        createdAt: '2020-10-03T14:50:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }, {
        id: 'm5',
        content: 'How is your uni going?',
        createdAt: '2020-10-03T14:51:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }, {
        id: 'm6',
        content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
        createdAt: '2020-10-03T14:49:00.000Z',
        user: {
            id: 'u2',
            name: 'Lukas',
        },
    }, {
        id: 'm7',
        content: 'Big Data is really interesting. Cannot wait to go through all the material.',
        createdAt: '2020-10-03T14:53:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }]
}

const Users = [{
    id: 'u1',
    name: 'Vadim',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    status: "Hello there, how are you"
},
{
    id: 'u2',
    name: 'Lukas',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
},
{
    id: 'u3',
    name: 'Daniil',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
},
{
    id: 'u4',
    name: 'Alex',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
},
{
    id: 'u5',
    name: 'Vlad',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
},
{
    id: 'u6',
    name: 'Elon Musk',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
},
{
    id: 'u7',
    name: 'Adrian',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
},
{
    id: 'u8',
    name: 'Borja',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
},
{
    id: 'u9',
    name: 'Mom',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
},
{
    id: 'u10',
    name: 'Angelina Jolie',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
}]

const ChatRooms = [{
    id: '1',
    users: [
        {
        id: 'u1',
        name: 'Ahmad Musa',
        imageUri: require('../assets/images/profile_1.jpg'),
    }, 
    {
        id: 'u2',
        name: 'Adamu John',
        imageUri: require('../assets/images/profile_2.jpg'),
    }],
    lastMessage: {
        id: 'm1',
        content: 'Well done this sprint, guys!',
        createdAt: Date.now().toLocaleString(),
    }
},
{
    id: '2',
    users: [{
        id: 'u1',
        name: 'Adamu Adamu',
        imageUri: require('../assets/images/profile_2.jpg'),
    }, {
        id: 'u3',
        name: 'Daniil',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
    }],
    lastMessage: {
        id: 'm2',
        content: 'How are you doing?',
        createdAt: Date.now().toLocaleString(),
    }
},
{
    id: '3',
    users: [{
        id: 'u1',
        name: 'Musa Danladi',
        imageUri: require('../assets/images/profile_3.jpg'),
    }, {
        id: 'u4',
        name: 'Alex',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    }],
    lastMessage: {
        id: 'm3',
        content: 'Hi, Vadim.',
        createdAt: Date.now().toLocaleString(),
    }
},
{
    id: '4',
    users: [{
        id: 'u1',
        name: 'Mike Amadu',
        imageUri: require('../assets/images/profile_5.jpg'),
    }, {
        id: 'u5',
        name: 'Vlad',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
    }],
    lastMessage: {
        id: 'm4',
        content: 'Can you review my last merge',
        createdAt: Date.now().toLocaleString(),
    }
},
{
    id: '5',
    users: [{
        id: 'u1',
        name: 'Daniel Musa',
        imageUri: require('../assets/images/profile_6.jpg'),
    }, {
        id: 'u6',
        name: 'Elon Musk',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
    }],
    lastMessage: {
        id: 'm5',
        content: 'I would be happy',
        createdAt: Date.now().toLocaleString(),
    }
},
{
    id: '6',
    users: [{
        id: 'u1',
        name: 'Abdul Sule',
        imageUri: require('../assets/images/profile_7.jpg'),
    }, {
        id: 'u7',
        name: 'Adrian',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
    }],
    lastMessage: {
        id: 'm6',
        content: 'I have a solution',
        createdAt: Date.now().toLocaleString(),
    }
},
{
    id: '7',
    users: [{
        id: 'u1',
        name: 'Kamal David',
        imageUri: require('../assets/images/profile_4.jpg'),
    }, {
        id: 'u8',
        name: 'Borja',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
    }],
    lastMessage: {
        id: 'm7',
        content: 'How are you doing?',
        createdAt: Date.now().toLocaleString(),
    }
},
{
    id: '8',
    users: [{
        id: 'u1',
        name: 'Bala Bala',
        imageUri: require('../assets/images/profile_5.jpg'),
    }, {
        id: 'u9',
        name: 'Mom',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
    }],
    lastMessage: {
        id: 'm8',
        content: 'Dear, did you eat?',
        createdAt: Date.now().toLocaleString(),
    }
},
{
    id: '9',
    users: [{
        id: 'u1',
        name: 'Kolo Dan',
        imageUri: require('../assets/images/profile_3.jpg'),
    }, {
        id: 'u10',
        name: 'Angelina Jolie',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
    }],
    lastMessage: {
        id: 'm9',
        content: 'Meet me at the same place',
        createdAt: Date.now().toLocaleString(),
    },
}]

export { Chat, Users, ChatRooms }
