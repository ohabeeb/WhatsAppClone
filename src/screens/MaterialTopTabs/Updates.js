import { View, Text, ScrollView, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, DIMENSIONS, FONTS } from '../../constants/themes';
import { Users } from '../../constants/data';
import moment from 'moment';


export default function Updates({ navigation }) {

  function renderHeader() {
    return (
      <View style={{ padding: 10, height: 'auto', }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: DIMENSIONS.marging_large }}>
          <Text style={{ fontSize: 22, color: COLORS.black, fontWeight: '500' }}>Status</Text>
          <MaterialCommunityIcons name="dots-vertical" size={30} color={COLORS.gray} />
        </View>

        <TouchableOpacity onPress={() => console.log('New contact')}>
          <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>

            <View style={{ width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary }}>
              <Image source={require('../../assets/images/cp/1.jpg')} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
              <View style={{ position: 'absolute', bottom: -8, right: -5, borderWidth: 1, borderRadius: 100, borderColor: COLORS.white, backgroundColor: COLORS.primary }}>

                <MaterialCommunityIcons name="plus" size={26} color={COLORS.white} />
              </View>
            </View>
            <View style={{ flex: 1, paddingRight: 5, gap: 5 }}>
              <Text style={{ fontSize: 20, color: COLORS.black, }}>My status</Text>
              <Text style={{ fontSize: FONTS.SIZES.small }}>Tap to add status update</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  function renderContacts() {
    return (
      <>
        <Text style={{ padding: 10, fontSize: FONTS.SIZES.medium, marginTop: DIMENSIONS.marging_medium }}>Recent updates</Text>
        <FlatList
          data={Users}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                flexDirection: 'row',
                gap: 10,
                padding: 10,
                height: Dimensions.get('window').height / 10,
                borderBottomWidth: 1,
                borderColor: '#F5F5F4',
              }}>
              <View style={{ height: '100%', width: '15%', borderWidth: 2, borderColor: COLORS.primary, borderRadius: 100, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={item.imageUri} style={{ width: 50, height: 50, borderRadius: 25 }} />
              </View>
              <View style={{justifyContent: 'center', gap: 5}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.black }}>{item.name}</Text>
                <Text>{moment().startOf(item.createdAt).fromNow()}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </>
    )

  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 5 }} showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {renderContacts()}
      </ScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 20, bottom: 20, zIndex: 1 }}>
        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 10, marginVertical: DIMENSIONS.marging_medium, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', elevation: 2, shadowOpacity: 2 }}>
          <MaterialCommunityIcons name={'pen'} size={22} color={COLORS.gray} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 20, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', elevation: 2, shadowOpacity: 2 }}>
          <MaterialCommunityIcons name={'camera'} size={26} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  )
}