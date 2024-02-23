import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from './themes'


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
        content: 'Quis adipisicing officia consequat incididunt.',
        imageUri: require('../assets/images/cp/1.jpg'),
        createdAt: Date.now().toLocaleString(),
        user: {
            id: 'u1',
            name: 'User 1',
        },
    },
    {
        id: 'm2',
        content: 'Adipisicing esse amet ea quis esse aliqua voluptate culpa mollit laboris sit ut pariatur consequat.',
        imageUri: require('../assets/images/cp/2.jpg'),
        createdAt: Date.now().toLocaleString(),
        user: {
            id: 'u2',
            name: 'User 2',
        },
    },
    {
        id: 'm3',
        content: 'Dolor sint deserunt ipsum culpa laborum culpa ex amet eiusmod esse ullamco ex adipisicing id.',
        createdAt: Date.now().toLocaleString(),
        imageUri: null,
        user: {
            id: 'u2',
            name: 'User 2',
        },
    },
    {
        id: 'm4',
        content: 'Qui culpa do ut laborum id sit id minim elit.',
        createdAt: Date.now().toLocaleString(),
        imageUri: require('../assets/images/cp/3.jpg'),
        user: {
            id: 'u1',
            name: 'User 1',
        },
    },
    {
        id: 'm5',
        content: 'Adipisicing voluptate excepteur amet fugiat laborum ullamco sint commodo.',
        imageUri: require('../assets/images/cp/4.jpg'),
        createdAt: Date.now().toLocaleString(),
        user: {
            id: 'u1',
            name: 'User 1',
        },
    },
    {
        id: 'm6',
        content: 'Excepteur consequat laboris sint ex eu est consectetur deserunt occaecat commodo magna nostrud anim incididunt.',
        imageUri: null,
        createdAt: Date.now().toLocaleString(),
        user: {
            id: 'u2',
            name: 'User 2',
        },
    },
    {
        id: 'm7',
        content: 'Id est nulla commodo excepteur minim et quis ullamco culpa velit nisi occaecat aute eu.',
        createdAt: Date.now().toLocaleString(),
        imageUri: require('../assets/images/cp/5.jpg'),
        user: {
            id: 'u1',
            name: 'User 1',
        },
    },
    {
        id: 'm7',
        content: 'Laboris anim elit commodo eu magna nostrud esse deserunt sit ex excepteur duis ad.',
        imageUri: null,
        createdAt: Date.now().toLocaleString(),
        user: {
            id: 'u1',
            name: 'User 1',
        },
    }]
}

const Users = [{
    id: 'u1',
    name: 'User 1',
    imageUri: require('../assets/images/me.jpg'),
    status: 'available',
    Updates: "Hello!",
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u2',
    name: 'User 2',
    imageUri: require('../assets/images/profile_1.jpg'),
    status: 'available',
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u3',
    name: 'User 3',
    imageUri: require('../assets/images/profile_2.jpg'),
    status: 'available',
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u4',
    name: 'User 4',
    imageUri: require('../assets/images/profile_3.jpg'),
    status: 'available',
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u5',
    name: 'User 5',
    imageUri: require('../assets/images/profile_4.jpg'),
    status: 'available',
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u6',
    name: 'User 6',
    imageUri: require('../assets/images/profile_5.jpg'),
    status: 'Hay! Im using WhatsApp',
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u7',
    name: 'User 7',
    imageUri: require('../assets/images/profile_6.jpg'),
    status: 'Hay! Im using WhatsApp',
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u8',
    name: 'User 8',
    imageUri: require('../assets/images/profile_7.jpg'),
    status: 'Hay! Im using WhatsApp',
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u9',
    name: 'User 9',
    imageUri: require('../assets/images/profile_2.jpg'),
    status: 'Hay! Im using WhatsApp',
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u10',
    name: 'User 10',
    imageUri: require('../assets/images/profile_4.jpg'),
    status: 'Hay! Im using WhatsApp',
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u11',
    name: 'User 11',
    imageUri: require('../assets/images/profile_3.jpg'),
    status: 'Hay! Im using WhatsApp',
    createdAt: Date.now().toLocaleString(),
},
{
    id: 'u12',
    name: 'User 12',
    imageUri: require('../assets/images/profile_5.jpg'),
    status: 'Hay! Im using WhatsApp',
    createdAt: Date.now().toLocaleString(),
}]

const ChatRooms = [{
    id: '1',
    users: [
        {
            id: 'u1',
            name: 'Olaiya Habeeb',
            imageUri: require('../assets/images/me.jpg'),
        },
        {
            id: 'u2',
            name: 'Adamu John',
            imageUri: require('../assets/images/profile_2.jpg'),
        }],
    lastMessage: {
        id: 'm1',
        content: 'Duis elit qui deserunt laboris sint laboris esse deserunt nisi.',
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
        content: 'Eiusmod in non minim irure id.',
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
        content: 'Culpa elit laboris mollit culpa.',
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
        name: 'User 5',
        imageUri: '',
    }],
    lastMessage: {
        id: 'm4',
        content: 'Enim sit commodo nostrud cillum ex.',
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
        name: 'User 6',
        imageUri: '',
    }],
    lastMessage: {
        id: 'm5',
        content: 'Do occaecat nulla sit pariatur.',
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
        name: 'User 7',
        imageUri: '',
    }],
    lastMessage: {
        id: 'm6',
        content: 'Officia aliquip qui.',
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
        name: 'User 8',
        imageUri: '',
    }],
    lastMessage: {
        id: 'm7',
        content: 'Incididunt labore tempor.',
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
        name: 'User 9',
        imageUri: '',
    }],
    lastMessage: {
        id: 'm8',
        content: 'Esse ea mollit dolor magna duis incididunt.',
        createdAt: Date.now().toLocaleString(),
    }
},
{
    id: '9',
    users: [{
        id: 'u1',
        name: 'Kolo Dan',
        imageUri: require('../assets/images/profile_1.jpg'),
    }, {
        id: 'u10',
        name: 'User 10',
        imageUri: '',
    }],
    lastMessage: {
        id: 'm9',
        content: 'Ullamco mollit adipisicing nulla nisi irure anim eu commodo sunt ad pariatur proident magna.',
        createdAt: Date.now().toLocaleString(),
    },
}]

const Stores = [
    {
        id: 1,
        icon: 'store',
        title: 'Business Profile',
        subtitle: 'Manage address, hours and website'
    },
    {
        id: 2,
        icon: 'dots-grid',
        title: 'Catolog',
        subtitle: 'Show products and services'
    },
    {
        id: 3,
        icon: 'bullhorn',
        title: 'Advertise',
        subtitle: 'Create ads that lead to WhatsApp'
    },
    {
        id: 4,
        icon: 'link',
        title: 'Facebook & Instagram',
        subtitle: 'Add WhatsApp to your accounts'
    },
    {
        id: 5,
        icon: 'message-reply-text-outline',
        title: 'Greeting message',
        subtitle: 'Welcome new customers automatically'
    },
    {
        id: 6,
        icon: 'umbrella-beach',
        title: 'Away Message',
        subtitle: 'Reuse frequent messages'
    },
    {
        id: 7,
        icon: 'lightning-bolt',
        title: 'Quick replies',
        subtitle: 'Reuse frequent messages'
    },
    {
        id: 8,
        icon: 'label',
        title: 'Labels',
        subtitle: 'Organize chats and custoers'
    },
    {
        id: 9,
        icon: 'help-circle-outline',
        title: 'Help center',
        subtitle: 'Get help, contact us'
    }

]

export { Chat, Users, ChatRooms, Stores }
