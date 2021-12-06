import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {SafeAreaView, Text, Alert} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './CreateMenu.styles';

export default function CreateMenu() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState(0);

  const route = useRoute();

  function handleNavigateDetail() {
if(name == "" || description == "" || ingredients == "" || price == 0){
Alert.alert("Bilgileri doldurunuz");
return;
  }
    const fd = {
      name,
      description,
      ingredients,
      price,
    };

    navigation.navigate('MenuDetailPage', {fd});
  }

  return (
    <SafeAreaView>
      <Text style={styles.menu_name}>{route.params.menu.name}</Text>
      <Input label="Name" onChangeText={value => setName(value)} />
      <Input
        label="Description"
        onChangeText={value => setDescription(value)}
      />
      <Input
        label="Ingredients"
        onChangeText={value => setIngredients(value)}
      />
      <Input label="Price" onChangeText={value => setPrice(value)} />
      <Button title="Apply Food" onPress={handleNavigateDetail} />
    </SafeAreaView>
  );
}
