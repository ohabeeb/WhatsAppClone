import { View, Text, Dimensions, Image, FlatList, Pressable, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants/themes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { GiftedChat } from 'react-native-gifted-chat'
import { Chat } from '../constants/data';
import moment from 'moment';

export default function ChatScreen({ route, navigation }) {
    const [users, setUsers] = React.useState('');
    const [messages, setMessages] = React.useState('')

    React.useEffect(() => {
        const { item } = route?.params;
        setUsers(item?.users);
    }, []);

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    padding: 10,
                    backgroundColor: COLORS.primary,
                    height: Dimensions.get('window').height / 12
                }
                }>
                <MaterialCommunityIcons name={'arrow-left'} size={28} color={COLORS.white} onPress={() => navigation.goBack()} />
                <Image source={users[0]?.imageUri} style={{ width: 40, height: 40, borderRadius: 20 }} />
                <View style={{ flex: 0.55, marginLeft: 3 }}>
                    <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: FONTS.SIZES.medium, color: COLORS.white }}>{users[0]?.name}</Text>
                </View>
                <View style={{ flex: 0.45, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MaterialCommunityIcons name='video' size={26} color={COLORS.white} onPress={() => navigation.navigate('VideoCall') } />
                    <MaterialCommunityIcons name='phone' size={26} color={COLORS.white} onPress={() => console.log('Video')} />
                    <MaterialCommunityIcons name='dots-vertical' size={26} color={COLORS.white} onPress={() => console.log('Dots')} />
                </View>

            </View>
        )
    }

    const isSenderMessage = (id) => {
        return Chat.users[0].id === id;
    }
    function renderMessae() {
        return (
            <FlatList
                data={Chat.messages}
                keyExtractor={item => item.id}
                inverted
                renderItem={({ item, index }) => (
                    <Pressable
                        style={{
                            width: '80%',
                            backgroundColor: isSenderMessage(item?.user?.id) ? COLORS.tetiary : COLORS.white,
                            margin: 8,
                            padding: 10,
                            borderRadius: 5,
                            alignSelf: isSenderMessage(item.user.id) ? 'flex-end' : 'flex-start'
                        }} onPress={() => console.log(index)}>
                        {isSenderMessage(item?.user?.id) ? <Text>{item.user?.name}</Text> : null}
                        {
                            item.imageUri ? <Image source={item.imageUri} style={{ width: '100%', height: 200, marginVertical: 5 }} />
                                : null
                        }
                        <Text style={{ color: COLORS.black }}>{item.content}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <MaterialCommunityIcons name={'check'} size={18} color={COLORS.black} />
                                <MaterialCommunityIcons name={'check'} size={18} color={COLORS.black} />
                            </View>
                            <Text>{moment().startOf(item.createdAt).fromNow()}</Text>

                        </View>
                    </Pressable>
                )} />
        )
    }
    function renderFooter() {
        return (
            <View style={{ gap: 5, height: 50, paddingHorizontal: 10, alignItems: 'center', position: 'absolute', bottom: 5, left: 2, right: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10, gap: 10, alignItems: 'center', borderRadius: 30, backgroundColor: COLORS.white }}>
                    <Fontisto name={'smiley'} size={24} color={COLORS.gray} />
                    <TextInput
                        multiline
                        style={{
                            width: 200,
                            fontSize: 16,
                        }}
                        placeholder='Message'
                        onChangeText={(value) => setMessages(value)}
                    />
                    <FontAwesome name={'paperclip'} size={26} color={COLORS.gray} onPress={() => console.log('')} />
                    {
                        messages.length > 0 ? null : <MaterialCommunityIcons name={'camera'} size={26} color={COLORS.gray} onPress={() => console.log('')} />
                    }
                </View>
                {
                    messages.length > 0 ? <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={'send'} size={24} color={COLORS.white} onPress={() => console.log('')} />
                    </View> : <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome name={'microphone'} size={24} color={COLORS.white} onPress={() => console.log('')} />

                    </View>
                }

            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            {renderHeader()}
            {renderMessae()}
            {renderFooter()}
        </View>
    )
}