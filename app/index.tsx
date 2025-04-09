import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'

const App = () => {

    return <Redirect href='/home' />
    // return (

    //     <SafeAreaView>

    //         <View className='mt-6 mx-2.5'>
    //             <Text className='text-5xl font-lexend-black color-primary'>Hola Mundo</Text>
    //             <Text className='text-4xl font-lexend-medium color-secondary'>Hola Mundo</Text>
    //             <Text className='text-2xl font-lexend-light color-success'>Hola Mundo</Text>
    //             <Text className='text-xl color-info'>Hola Mundo</Text>
    //             <Link href='/products'>Productos</Link>
    //         </View>

    //     </SafeAreaView>
    // )
}

export default App