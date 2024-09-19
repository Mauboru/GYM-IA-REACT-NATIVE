import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { colors } from '../../constants/colors'
import { Header } from '@/components/header'
import { Select } from '../../components/input/select'

const schema = z.object({
  gender: z.string().min(1, { message: "O sexo é obrigatorio!" }),
  objective: z.string().min(1, { message: "O objetivo é obrigatorio!" }),
  level: z.string().min(1, { message: "O nivel é obrigatorio!" }),
})

type FormData = z.infer<typeof schema>

export default function Create() {
  const { control, handleSubmit, formState: { errors, isValid }} = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const genderOptions = [
    { label: "Masculino", value: "masculino"},
    { label: "Feminino", value: "feminino"},
  ];

  return (
    <View style={styles.container}>
      <Header
        step='Passo 2'
        title='Finalizando Dieta!'
      />

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Sexo:</Text>
        <Select
          control={control}
          name='gender'
          placeHolder='Selecione o seu genero'
          error={errors.gender?.message}
          options={genderOptions}
        />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background
    },

    label:{
      fontSize: 16,
      color: colors.white,
      fontWeight: 'bold',
      marginBottom: 8
    },

    content:{
      paddingLeft: 16,
      paddingRight: 16
    },
})