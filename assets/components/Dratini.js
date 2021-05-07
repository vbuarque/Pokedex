import React from 'react';
import { View, Image, Text } from 'react-native';

export default function(){
    return(
        <View>
            <Image source={require('../img/Dratini.png')} style={{width: 260, height: 260, alignSelf: 'center'}} resizeMode='cover'/>
            <Text style={{marginTop: 15, textAlign: 'justify'}}>
            Dratini is a serpentine Pokémon with a blue body and a white underside. It has white, three-pronged fins on the sides of its head and a white bump on its forehead, which is its horn growing. Above its round, white snout are oval, purple eyes.
            </Text>

        </View>
    )
}