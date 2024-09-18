import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { colors } from '../../constants/colors'

export default function Create() {
 return (
   <View/>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background
    },
})