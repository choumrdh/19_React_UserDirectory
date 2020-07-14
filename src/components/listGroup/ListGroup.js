import React from 'react';
import Header from '../listHeader';
import ListElement from '../listEl';
import ListData from '../../friends.json';

class ListGroup extends React.Component {

    state = {
        listData: [],
    };

    setData = () => {
        this.setState({

        });
    }

    componentDidMount();
    //built in function - eventually use this to call api and then update state.



    render(){
        return(
            <div>
                <Header></Header>
                <ListElement></ListElement>
            </div>
        );
        
    }
};

export default ListGroup;



