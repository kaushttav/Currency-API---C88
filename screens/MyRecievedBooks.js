import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, ScrollView, FlatList } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import { ListItem } from 'react-native-elements';

export default class MyRecievedBooks extends React.Component {
    constructor() {
        super();
        this.state ={
            userId: firebase.auth().currentUser.email,
            receivedBooksList: []
        }
    }

    getReceivedBooksList =()=>{
        this.requestRef = db.collection("requested_books")
        .where('user_id','==',this.state.userId)
        .where("book_status", '==','received')
        .onSnapshot((snapshot)=>{
            var receivedBooksList = snapshot.docs.map((doc) => doc.data())
            this.setState({
                receivedBooksList : receivedBooksList
            });
        })
    }

    componentDidMount() {
        this.getReceivedBooksList()
    }
    
    componentWillUnmount(){
        this.requestRef();
    }
    
    keyExtractor = (item, index) => index.toString()
    
    renderItem = ( {item, i} ) =>{
        console.log(item.book_name);
        return (
        <ListItem key = {i} bottomDivider>
            <ListItem.Content>
                <ListItem.Title style = {{color: 'black', fontWeight: 'bold'}}>{item.book_name}</ListItem.Title>
                <ListItem.Subtitle>{item.book_status}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        )
    }

    render(){
        return(
        <View style={{flex:1}}>
            <MyHeader title="Received Books" navigation ={this.props.navigation}/>
            <View style={{flex:1}}>
            { this.state.receivedBooksList.length === 0 ?(
            <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Received Books</Text>
            </View>
            )
            :(
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.receivedBooksList}
            renderItem={this.renderItem} />
            )}
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    subContainer:{
        flex:1,
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8
        }
    }
})