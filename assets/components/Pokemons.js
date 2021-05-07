import React, { useState } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Styles from '../../styles/Styles';
import { Audio } from 'expo-av';

export default function() {
    const [img, setImg] = useState();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    async function loadDratini(){
        setImg(require('../img/Dratini.png'))
        setName('Dratini')
        setDescription('Dratini is a serpentine Pokémon with a blue body and a white underside. It has white, three-pronged fins on the sides of its head and a white bump on its forehead, which is its horn growing. Above its round, white snout are oval, purple eyes.')
        
    const sound = new Audio.Sound();
    try {
        await sound.loadAsync(require('../sounds/som.mp3'));
        await sound.playAsync();


    } catch (error) {
        console.log('Erro')
    }

    }

    async function loadAggron(){
        setImg(require('../img/Aggron.png'))
        setName('Aggron')
        setDescription('Aggron is a huge, bipedal Pokémon. It is primarily gray with plates of silver armor. The armor on its head has two pairs of holes with horns protruding from the foremost holes. Its forehead plating extends past its upper jaw in a small point.')

        const sound = new Audio.Sound();
    try {
        await sound.loadAsync(require('../sounds/som.mp3'));
        await sound.playAsync();


    } catch (error) {
        console.log('Erro')
    }
    
    }

    return(
        <View style={Styles.container}>
            <Image source={require('../img/pokemon.png')} 
            style={{width: 300, height: 110,justifyContent:'center', 
            alignItems:'center', marginBottom: 20}}/>

            <View style={Styles.childContainer}>
                <Text style={{fontSize: 20, textAlign: 'center', fontFamily:'Pokemon Solid'}}>{name}</Text>
                <Image source={img} style={{width: 260, height: 260, alignSelf: 'center'}} resizeMode='cover'/>
                <Text style={{fontFamily:'Arial'}}>{description}</Text>
            </View>

            <View style={Styles.buttonContainer}>
                <Button title="Dratini" color="#e3d022" onPress={loadDratini}/>
                <Button title="Aggron" color="#e3d022" onPress={loadAggron}/>
            </View>
        </View>
    );
}