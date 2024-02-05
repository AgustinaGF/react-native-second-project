import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import cartIcon from "../../assets/cart.png";
import { colors } from '../global/color';
const Header =({})=>{
    return(
    <View style={styles.header}>
        <Text style={styles.textHeader}>CARRITO</Text>
        <Image
          style={styles.image}
         source={cartIcon}
        />
      </View>)
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    backgroundColor:colors.blue_300,
  },
    image: {
    width: 50,
    height: 50,
  },
  textHeader:{color:'#ffff', fontSize:20}
});
