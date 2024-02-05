import { StyleSheet, Text, View, Pressable, Modal} from 'react-native'; 
 
 const RemoveModal=({
  modalVisible,
  setModalVisible,
  removeItem
 })=>{

  return(
  <Modal visible={modalVisible}  animationType="slide"
        transparent >
    <View style={styles.modalContainer}>
      <Text style={styles.modalText}>Queres eliminar el producto?</Text>
      <Pressable onPress={()=>setModalVisible(false)}>
      <Text style={styles.modalText}>No</Text>
      </Pressable>
       <Pressable onPress={removeItem}>
      <Text style={styles.modalText}>Si</Text>
      </Pressable>
    </View>
  </Modal>
 )}

 export default RemoveModal


 const styles = StyleSheet.create({
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
  modalText:{
    fontWeight:"bold"
  }
});