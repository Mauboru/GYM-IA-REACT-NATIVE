import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'

import { colors } from '../../constants/colors'
import { Header } from '../../components/header'
import { Input } from '../../components/input' 

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const schema = z.object({
    name: z.string().min(1, { message: "O nome é obrigatorio!" }),
    weight: z.string().min(1, { message: "O peso é obrigatorio!" }),
    age: z.string().min(1, { message: "A idade é obrigatorio!" }),
    height: z.string().min(1, { message: "A altura é obrigatorio!" }),
})

type FormData = z.infer<typeof schema>

export default function Step(){
    const { control, handleSubmit, formState: { errors, isValid }} = useForm<FormData>({
        resolver: zodResolver(schema)
    })
    return(
        <View style={styles.container}>
            <Header step='Passo 1' title='Vamos Começar!'/>

            <ScrollView style={styles.content}>
                <Text style={styles.label}>Nome: </Text>
                <Input 
                    name='name'
                    control={control}
                    placeHolder='Digite seu nome...'
                    error={errors.name?.message}
                    keyboardType='default'
                />

                <Text style={styles.label}>Peso: </Text>
                <Input 
                    name='weight'
                    control={control}
                    placeHolder='Digite seu peso...'
                    error={errors.weight?.message}
                    keyboardType='numeric'
                />

                <Text style={styles.label}>Altura: </Text>
                <Input 
                    name='height'
                    control={control}
                    placeHolder='Digite sua altura...'
                    error={errors.height?.message}
                    keyboardType='numeric'
                />    

                <Text style={styles.label}>Idade: </Text>
                <Input 
                    name='age'
                    control={control}
                    placeHolder='Digite sua idade...'
                    error={errors.age?.message}
                    keyboardType='numeric'
                />

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </Pressable>       
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background
    },
    
    content:{
        paddingLeft: 16,
        paddingRight: 16
    },

    label:{
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 8
    },

    button:{
        backgroundColor: colors.blue,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },

    buttonText:{
        color: colors.white,
        fontWeight: 'bold',
    }
})