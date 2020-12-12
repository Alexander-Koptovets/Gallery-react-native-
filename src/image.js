import React from 'react'
import { StyleSheet, Image, TouchableHighlight } from 'react-native';

const request  = require('superagent');

export class Pic extends React.Component {
    constructor(props){
        super(props)
        this.state = {pressStatus: false};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onShowUnderlay = this.onShowUnderlay.bind(this);
    }

    onShowUnderlay() {
        (this.state.pressStatus == false) ? this.setState({ pressStatus: true }) : this.setState({ pressStatus: false })
    }

    componentDidMount() {
        request
            .get('https://api.unsplash.com/photos/random')
            .query({client_id: 'r2I-rJ_kZYgHetscQWxPCsplUadu9YBfKqYc8K8tc7k'})
            .set('Accept', 'application/json')
            .end((err, resp) => {
                if (!err) {
                    this.setState({urls: resp.body.urls.small})
                }
            })
    }
    render() {
        return (
            <TouchableHighlight
                activeOpacity={1}
                style={
                    this.state.pressStatus
                        ? styles.press
                        : styles.content
                }
                onPress={this.onShowUnderlay}
            >
                <Image 
                    style={
                         this.state.pressStatus
                             ? styles.bigpic
                             : styles.img 
                    }
                    source={ {uri: this.state.urls} }
                    onPress={this.onShowUnderlay}
                />
            </TouchableHighlight>
        )
    }
} 

const styles = StyleSheet.create({
    img: {
        width: 120, 
        height: 120, 
    }, 
    bigpic: {
        width: 400,
        height: 500,
    },
    press: {
        width: 400,
        height: 500,
    }, 
    content: {
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        width: 120, 
        height: 120, 
    }
})