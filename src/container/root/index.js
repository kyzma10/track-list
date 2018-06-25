import React, {Component} from 'react';
import List from '../../components/list';
import ListItem from '../../components/list-item';
import axios from 'axios';

class Root extends Component {
    constructor(props) {
        super(props);
    this.state = { data: [] };
    }


    componentDidMount() {
        // https://cors-anywhere.herokuapp.com/search/artist?q=eminem
        axios.get('const/data.json')
            .then(res => this.setState({ data: res.data.data}) )
            .catch(error => console.log(error));
    }


    render() {
        return (
            <div>
                <List data={this.state.data}/>
            </div>
        );
    }

}


export default Root;
