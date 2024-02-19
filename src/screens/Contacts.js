import { View, Text, ScrollView, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Users } from '../constants/data'
import { ContactList } from '../components'
import { COLORS } from '../constants/themes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
Users
export default function Contacts({ navigation }) {
    function renderHeaderBar() {
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
                <View style={{ flex: 1, marginLeft: 5 }}>
                    <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 20, color: COLORS.white }}>Select contact</Text>
                    <Text numberOfLines={1} style={{ color: COLORS.white }}>12 contacts</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <Octicons name='search' size={26} color={'#FFF'} onPress={() => console.log('Phone')} />
                    <MaterialCommunityIcons name='dots-vertical' size={26} color={'#FFF'} onPress={() => console.log('Dots')} />
                </View>

            </View>
        )
    }
    function renderHeader() {
        return (
            <View style={{ padding: 10, height: 'auto', marginVertical: 10 }}>
                <TouchableWithoutFeedback onPress={() => console.log('New group')}>
                    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 20 }}>
                        <View style={{ width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary }}>
                            <MaterialIcons name="people" size={34} color={COLORS.white} />
                        </View>
                        <Text style={{ fontSize: 20, color: COLORS.black }}>New group</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => console.log('New contact')}>
                    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>

                        <View style={{ width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary }}>
                            <MaterialCommunityIcons name="account-plus" size={28} color={COLORS.white} />
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 5 }}>
                            <Text style={{ fontSize: 20, color: COLORS.black, }}>New contact</Text>
                            <FontAwesome name="qrcode" size={26} color={COLORS.gray} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
    function renderContacts() {
        return (
            <>
                <Text style={{ padding: 10, fontSize: 16 }}>Contacts on WhatsApp</Text>
                <FlatList
                    data={Users}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <ContactList imgeUrl={item.imageUri} name={index === 0 ? item.name + ' (You)' : item.name} status={item.status} />
                    )}
                />
            </>
        )

    }
    return (
        <>
            {renderHeaderBar()}
            <ScrollView style={{ flex: 1, padding: 5 }}>
                {renderHeader()}
                {renderContacts()}
            </ScrollView>
        </>
    )
}