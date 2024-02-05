import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  FlatList,
  Modal,
} from "react-native";

const InputText =({onChangeText, value, placeholder, addItem})=>{
    return(
    <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeText} value={value}
          style={styles.input}
          placeholder={placeholder}
          ></TextInput>
        <Pressable onPress={addItem}>
          <Text style={styles.inputAdd}>➕</Text>
        </Pressable>
      </View>)
}

export default InputText

const styles = StyleSheet.create({
  
  inputContainer: { flexDirection: "row", alignItems:"center", justifyContent:'center', marginTop:4 },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "90%",
  },
  inputAdd:{ fontSize: 40 }
});