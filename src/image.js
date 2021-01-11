import React from 'react'
import { Img } from './getPic'

const request  = require('superagent');

export class Pic extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: null,
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        request
            .get('https://api.unsplash.com/photos/random')
            .query({client_id: 'r2I-rJ_kZYgHetscQWxPCsplUadu9YBfKqYc8K8tc7k'})
            .set('Accept', 'application/json')
            .end((err, resp) => {
                if (!err) {
                    this.setState({url: resp.body.urls.small})
                }
            })
    }

    render() {
        return (
            <Img src={this.state.url} />
        )
    }
} 
