import React from 'react'
import { StyleSheet, Image, Button, View } from 'react-native';
import { Pic } from './image'
import { Img } from './getPic'

const request  = require('superagent');

export class ArrPics extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0, 
            links: [], 
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.addPic = this.addPic.bind(this);
    }
    addPic() {
        this.setState(({ count }) => ({
            count: count + 1,
        })); 
    }

    componentDidMount() {
        request
            .get('https://api.unsplash.com/photos')
            .query({client_id: 'r2I-rJ_kZYgHetscQWxPCsplUadu9YBfKqYc8K8tc7k'})
            .set('Accept', 'application/json')
            .end((err, resp) => {
                if (!err) {
                    let arr = this.state.links;
                    resp.body.map((i) => arr.push(i.urls.small));
                    this.setState({links: arr});
                }
            })
    }

    render() {
        return (
            <View>
            <View style={styles.content}>
            {this.state.links.map((item, i) => <Img src={item} key={i}/>)}
                
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