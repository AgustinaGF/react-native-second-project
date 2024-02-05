import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from "react-native";


const ProductList=({cartItems, handleModal})=>{
    return(
    <View style={styles.productList}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.containerProduct}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={styles.icon}>🗑️</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
)}

export default ProductList

const styles = StyleSheet.create({
  productList: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  containerProduct:{width: 400, flexDirection: "row"},
  product: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
  },
  icon:{fontSize: 20 }
});