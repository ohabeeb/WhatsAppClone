import { View, Text, ScrollView, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS, DIMENSIONS, FONTS } from '../../constants/themes';
import { Users } from '../../constants/data';
import { ItemIcon } from '../../components';


export default function Calls({ navigation }) {

  function renderHeader() {
    return (
      <View style={{ padding: 5, height: 'auto' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: DIMENSIONS.marging_large }}>
          <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>
            <View style={{ width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary }}>
            <MaterialCommunityIcons name="link" size={30} color={COLORS.white} />
            </View>
          </View>
          <View style={{ flex: 1,  flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginLeft: 10, paddingVertical: 5 }}>
              <Text style={{fontSize: FONTS.SIZES.large, color: COLORS.black, fontWeight: '500'}}>Create call link</Text>
              <Text style={{fontSize: FONTS.SIZES.small, marginTop: 3}}>Share a link for your WhatsApp call</Text>
            </View>
            <MaterialCommunityIcons name="dots-vertical" size={30} color={COLORS.gray} />
          </View>
        </View>

      </View>
    )
  }
  function renderContacts() {
    return (
      <>
        <Text style={{ padding: 10, fontSize: FONTS.SIZES.medium }}>Recent</Text>
        <FlatList
          data={Users}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
           <ItemIcon
           onPress={() => console.log(item.id)} 
           imageUri={item.imageUri} 
           name={item.name} 
           timestamp={item.createdAt} 
           iconComponent={<MaterialIcons name={'call'} size={26} color={COLORS.primary} />} />
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
        
        <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 20, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', elevation: 2, shadowOpacity: 2 }}>
          <MaterialIcons name={'add-call'} size={26} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  )
}