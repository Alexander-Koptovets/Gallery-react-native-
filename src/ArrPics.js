import React from 'react'
import { StyleSheet, Image, Button, View } from 'react-native';
import { Pic } from './image'
import { Img } from './getPic'

const request  = require('superagent');

export class ArrPics extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pressStatus: false,
            count: 0, 
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.addPic = this.addPic.bind(this);
    }
    addPic() {
        this.setState(({ count }) => ({
            count: count + 1,
        })); 
    }

    addMorePics() {
        !this.state.pressStatus 
        ? this.setState({ pressStatus: true }) 
        : this.setState({ pressStatus: false })
    }

    componentDidMount() {
        request
            .get('https://api.unsplash.com/photos')
            .query({client_id: 'r2I-rJ_kZYgHetscQWxPCsplUadu9YBfKqYc8K8tc7k'})
            .set('Accept', 'application/json')
            .end((err, resp) => {
                if (!err) {
                    this.setState({urls1: resp.body[0].urls.small});
                    this.setState({urls2: resp.body[1].urls.small});
                    this.setState({urls3: resp.body[2].urls.small});
                    this.setState({urls4: resp.body[3].urls.small});
                    this.setState({urls5: resp.body[4].urls.small});
                    this.setState({urls6: resp.body[5].urls.small});
                    this.setState({urls7: resp.body[6].urls.small});
                    this.setState({urls8: resp.body[7].urls.small});
                    this.setState({urls9: resp.body[8].urls.small});
                    this.setState({urls10: resp.body[9].urls.small}); 
                }
            })
    }

    render() {
        return (
            <View>
            <View style={styles.content}>
                <Img src={this.state.urls1} />
                <Img src={this.state.urls2} />
                <Img src={this.state.urls3} />
                <Img src={this.state.urls4} />
                <Img src={this.state.urls5} />
                <Img src={this.state.urls6} />
                <Img src={this.state.urls7} />
                <Img src={this.state.urls8} />
                <Img src={this.state.urls9} />
                <Img src={this.state.urls10} />
                
                {[...Array(this.state.count)].map(() => 
                <Pic />)} 
            </View>
            <Button
            onPress={this.addPic}
            color='green'
            title='More Photos'
        />  
        </View>  
        )
    }
} 

const styles = StyleSheet.create({
    content: {
        display: "flex",
        alignContent: 'center',
        flexWrap: 'wrap', 
        flexDirection: 'row',
    }
})