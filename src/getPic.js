import React from 'react'
import { StyleSheet, Image, } from 'react-native';

export function Img(props) {
    return (
        <Image 
            style={styles.img}
            source={ {uri: props.src} }
        />
    )
}

const styles = StyleSheet.create({
    img: {
        width: 120, 
        height: 120, 
    }
})