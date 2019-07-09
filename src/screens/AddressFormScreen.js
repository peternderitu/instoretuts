import React, { Component } from 'react';
import {StatusBar, ScrollView, StyleSheet} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import {observer} from 'mobx-react/native';

import CloseBtn from '../commons/CloseBtn';
import Button from '../commons/Button';
import Input from '../commons/Input';
import { theme } from '../constants/theme';
import { buildAddress } from '../utils/buildAddress';
import { observable, action } from 'mobx';

//@observer
class AddressFormScreen extends Component{
    
      static navigationOptions = ({}) => ({
            title: 'Address',
            headerLeft: (<CloseBtn left size={25} onPress={()=>navigation.goBack(null)}/>),
        });

        //@observable
        //streetName = '';

        //@observable
        //postalCode = '';

        //@observable
        //city = '';

        //@observable
        //address = null;

    goToSearch = () => {
        this.props.navigation.navigate('AutocompleteAddress', {
            searchAddress: this.searchAddress,
        });
    };

    //@action.bound
    searchAddress(value) {
        this.props.navigation.goBack(null);
        //console.log('value', value);

        //const address = buildAddress(value);
        
        //this.streetName= address.street;
        //this.postalCode= address.postalCode;
        //this.city=address.city;
        //this.address=address;
    }
    render() {
        console.log('this', this);
        return (
            <Box f={1} bg="white" p={10}>
            <StatusBar barStyle= "dark-content"/>
                <ScrollView>
                    <Box mb="sm">
                        <Input 
                        placeholder="Street Address" 
                        editable={false} 
                        onPress={this.goToSearch}
                        //value={this.streetName}
                        
                        />
                        <Input placeholder="Apt # (optional)" //value={this.postalCode}
                        />
                        <Box dir="row">
                            <Box f={1}>
                                <Input placeholder="City" editable={false} //value={this.city}
                                />
                            </Box>
                            <Box w={theme.space.xs}/>
                            <Box f={1}>
                                <Input placeholder="Postal Code" editable={false} //value={this.postalCode}
                                />
                            </Box>
                            </Box>
                        <Input 
                            placeholder="Instructions for delivery (optional)" 
                            containerStyle={{height:100}}
                            multiline
                        />
                    </Box>
                    <Button 
                    disabled={!this.address} 
                    disabledStyle={styles.buttonDisabled} 
                    style={styles.button}>
                        <Text bold color="white">Save</Text>
                    </Button>
                </ScrollView>
            </Box>
        );
    }
}

const styles = StyleSheet.create({
    buttonDisabled: {
        backgroundColor: theme.color.greyLight,
        borderColor: theme.color.greyLight,
    },
    button:{
        backgroundColor: theme.color.green,
    }

})

export default AddressFormScreen;