import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import RemoveModal from "./src/components/RemoveModal";
import Header from "./src/components/Header";
import InputText from "./src/components/InputText";
import ProductList from "./src/components/ProductList";

export default function App() {
  const DATA = [
    { name: "Remera", id: 1 },
    { name: "Pantalón", id: 2 },
    { name: "Gorra", id: 3 },
  ];
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const handleInputChange = (value) => setInputValue(value);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date(),
    };
    setCartItems([...cartItems, newItem]);
    setInputValue("");
  };
  const removeItem = () => {
    const filteredArray = cartItems.filter((item) => item.id !== itemSelected);
    setCartItems(filteredArray);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSeleted={itemSelected}
        removeItem={removeItem}
      />
      <Header />
      <InputText
        onChangeText={handleInputChange}
        value={inputValue}
        placeholder="Ingrese un producto"
        addItem={addItem}
      />
      <ProductList cartItems={cartItems} handleModal={handleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ededed",
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight,
  },
  modalContainer: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
