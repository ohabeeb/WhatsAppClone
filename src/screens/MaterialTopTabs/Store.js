import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants/themes';
import { LabelInfo } from '../../components';
import { Stores } from '../../constants/data';

export default function Store() {
  function renderDetial() {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Text style={{ fontSize: 16 }}>Performance</Text>
            <AntDesign name='exclamationcircleo' size={20} color={COLORS.gray} />
          </View>
          <Text style={{ fontSize: 16 }}>Within last 7 days</Text>
        </View>
        <View style={{ paddingVertical: 20 }}>
          <LabelInfo leftText={'Catalog views'} rightText={'--- ---'} />
          <LabelInfo leftText={'Profile views'} rightText={'--- ---'} />
          <LabelInfo leftText={'Status views'} rightText={'--- ---'} />
        </View>
      </>
    )
  }
  function renderBusinessTools() {
    return (
      <>
        <Text style={{ paddingVertical: 10, fontSize: 18 }}>Business Tools</Text>
        <FlatList
          data={Stores}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10, paddingVertical: 15 }}>
              <MaterialCommunityIcons name={item.icon} size={26} color={COLORS.gray} />
              <View style={{ marginLeft: 30 }}>
                <Text style={{ fontWeight: '400', fontSize: 18, color: COLORS.black }}>{item.title}</Text>
                <Text>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          )} />
      </>
    )
  }
  function renderTips() {
    return (
      <>
        <Text style={{fontSize: 18}}>Tips</Text>
        <View style={{ 
          borderWidth: 1, 
          borderColor: COLORS.gray,
          borderRadius: 10,
          padding: 20, 
          margin: 20, 
          flexDirection: 'row', 
          justifyContent: 'space-between' 
          }}>
          <MaterialCommunityIcons name='lightbulb' size={24} color={COLORS.gray} />
          <View style={{marginLeft: 20 }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Add a catalog</Text>
            <Text style={{fontSize: 14}}>Tell potential customers about the products and services you offer</Text>
            <Text style={{fontSize: 18, fontWeight: '800', color: COLORS.lightblue}}>Create catalog</Text>
          </View>
          <MaterialCommunityIcons name='close' size={24} color={COLORS.gray} />
        </View>
      </>
    )
  }
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 10, marginTop: 15 }} showsVerticalScrollIndicator={false}>
      {renderDetial()}
      {renderBusinessTools()}
      {renderTips()}
    </ScrollView>
  )
}