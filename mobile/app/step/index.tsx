import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Colors } from '../../constants/colors'
import { Header } from '../../components/header'

export default function Step(){
    return(
        <View>
            <Header step='Passo 1' title='Vamos Começar!'/>
        </View>
    )
}