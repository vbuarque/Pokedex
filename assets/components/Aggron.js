import React from 'react';
import { View, Image, Text } from 'react-native';

export default function(){
    return(
        <View>
            <Image source={require('../img/aggron.png')} style={{width: 260, height: 260, alignSelf: 'center'}} resizeMode='cover'/>
            <Text style={{marginTop: 15, textAlign: 'justify'}}>
            Aggron is a huge, bipedal Pokémon. It is primarily gray with plates of silver armor. The armor on its head has two pairs of holes with horns protruding from the foremost holes. Its forehead plating extends past its upper jaw in a small point.
            </Text>
        </View>
    )
}