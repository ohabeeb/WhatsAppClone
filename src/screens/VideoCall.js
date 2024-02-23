import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants/themes'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ButtonIcon } from '../components'

export default function VideoCall() {
    const [isMicToggled, setIsMicToggled] = React.useState(false);
    const [isVedioToggled, setIsVedioToggled] = React.useState(false);

    function renderHeader() {
        return (
            <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 20, left: 10 }}>
                <MaterialIcons name="west" size={24} color={COLORS.black} />
            </View>
        )
    };

    const handleVedioFlip = () => {
        console.warn('Vedio Flip')
    };

    const handleVedio = () => {
        setIsVedioToggled(previousState => !previousState)
    };

    const handleMicrophone = () => {
        setIsMicToggled(previousState => !previousState);
    };

    const handleCall = () => {
        console.warn('Call')
    };

    return (
        <ImageBackground
            source={require('../assets/images/cp/background.jpeg')}
            style={{ flex: 1 }}>
            <>
                {renderHeader()}

                <View style={{ alignItems: 'center', paddingVertical: 80, gap: 5 }}>
                    <Text style={{ fontSize: FONTS.SIZES.medium, fontWeight: '600' }}>Calling ...</Text>
                    <Text style={{ fontSize: FONTS.SIZES.large, color: COLORS.white, textTransform: 'uppercase' }}>Olaiya Habeeb</Text>
                    <Text style={{ fontSize: FONTS.SIZES.medium, color: COLORS.white }}>+2348065111177</Text>
                </View>
                <View
                    style={{
                        height: 100,
                        backgroundColor: COLORS.black,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        justifyContent: 'center',
                        gap: 40,
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                    }}>
                    <ButtonIcon 
                    onPress={handleVedioFlip}
                    children={<MaterialCommunityIcons name={'camera-flip'} size={24} color={COLORS.black} />} 
                    containerStyle={{backgroundColor: COLORS.white}} />
                    <ButtonIcon
                    onPress={handleVedio}
                    children={<MaterialCommunityIcons name={isVedioToggled ? 'camera' : 'camera-off'} size={24} color={COLORS.black} />} 
                    containerStyle={{backgroundColor: COLORS.white}} />
                    <ButtonIcon onPress={handleMicrophone} 
                    children={<MaterialCommunityIcons name={ isMicToggled ? 'microphone': 'microphone-off'} size={24} color={COLORS.black} />} 
                    containerStyle={{backgroundColor: COLORS.white}} />
                    <ButtonIcon
                    onPress={handleCall} 
                    children={<MaterialCommunityIcons name={'phone'} size={24} color={COLORS.white} />} 
                    containerStyle={{backgroundColor: COLORS.red}} />

                </View>
            </>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})