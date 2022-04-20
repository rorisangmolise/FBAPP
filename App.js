import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Ionicons  , AntDesign , Entypo , Fontisto, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';



export default function App() {
  return (
  <View style={styles.container}>
    <View style={styles.items}>
      <View style={styles.topview}>
        <TouchableOpacity style={{marginTop:14 , marginStart: '2%'}}>
          <Ionicons name="chevron-back" size={48} color="white" style={{marginTop:'5%'}} />
        </TouchableOpacity>
        <View style={styles.searchbox}>
         <TouchableOpacity style={{marginTop:4 , marginStart: '4%'}} >
           <AntDesign name="search1" size={24} color="white" style={{marginTop:'4%' , marginStart: '6%'}} />
         </TouchableOpacity>
          <Text style ={styles.Text}> Rapcity </Text>
       </View>
       <TouchableOpacity style={{marginTop:21 , marginStart: '2%'}}>
       <Ionicons name="ios-options-outline" size={38} color="white" style={{marginTop:'6%' , marginStart:'2%'}} />
       </TouchableOpacity>
      </View>
      <View style={styles.mainview}>
        <View style={styles.Postview}>
          <View style={styles.ProfileContainer}>
           <View style={styles.Profilepic1}>
             <Image
             source={require("./assets/Profile1.png")}
             style={{ height: '100%' , width : '100%' ,}}/>
           </View>
           <View style={styles.Names}>
             <Text style ={styles.PText}> Roxy Molise </Text>
             <Text style ={styles.Lastseen}> Yesterday </Text>
           </View>
           <Entypo name="chevron-small-down" size={30} color="silver" />
           
          </View>
          <View style={styles.Post}>
           <Text style={styles.PostText}>Amazing time Lesotho. Tip: hike up to the peak for the best sunrise</Text>
          </View>
          <View style={styles.Photo}>
            <Image
             source={require("./assets/PostPhoto.jpg")}
             style={{ height: '100%' , width : '100%' ,}}/>
       
          </View>
          <View style={styles.Post}>
            <Text style={styles.Commentext}>48 Likes   6 Comments</Text>
          </View>
        <View style={styles.bottompost}>
          <TouchableOpacity style={{marginTop:22 , marginStart: '4%'}}>
            <Fontisto name="like" size={24} color="#9E9E9E" />
          </TouchableOpacity>
          <Text style={styles.Liketext}>Like</Text>
          <TouchableOpacity style={{marginTop:28 , marginStart: '17%'}}>
           <MaterialIcons name="mode-comment" size={22} color="#9E9E9E" />
          </TouchableOpacity>
          <Text style={styles.Liketext}>Comment</Text>
          <TouchableOpacity style={{marginTop:22 , marginStart: '14%'}}>
            <MaterialCommunityIcons name="share" size={32} color="#9E9E9E" />
          </TouchableOpacity>
          <Text style={styles.Liketext}>Share</Text>
        </View>
        </View>
        <View style={styles.Postview}>
          <View style={styles.ProfileContainer}>
           <View style={styles.Profilepic1}>
            <Image
             source={require("./assets/Profile2.png")}
             style={{ height: '100%' , width : '100%' ,}}/>
           </View>
           <View style={styles.Names}>
            <Text style ={styles.PText}> Glodia Blues </Text>
            <Text style ={styles.Lastseen}> 3 days ago </Text>
           </View>
           <Entypo name="chevron-small-down" size={30} color="silver" />
          </View>
          <View style={styles.Post2}>
           <Text style={styles.PostText}>It is always wiser to learn new things.In reference to Kitelytech (2021) “Planning purpose is to create a new solution to the problem that the business might have. </Text>
          </View>
           
        </View>
        
      </View>
      
      
    </View>
      
      <StatusBar style="auto" />
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  items:{
    
    backgroundColor: '#1565C0',
    height: '100%' ,
    width : '100%' ,
    marginTop: '17%',
  },

  topview:{
    backgroundColor: '#1565C0',
    height: '8%' ,
    width : '100%' ,
    marginTop: '1%',
    flexDirection:'row',
  },

  searchbox:{
    backgroundColor: '#0D47A1',
    height: '50%' ,
    width : '71%' ,
    marginTop: '7%',
    flexDirection:'row',
    borderRadius: 4,
  },
  Text:{
    fontSize:20,
    color:'white',
    marginTop: 5,
  },
  mainview:{
    backgroundColor: '#BDBDBD',
    height: '100%' ,
    width : '100%' ,
    marginTop: '1%',
  },
  Postview:{
    backgroundColor: 'white',
    height: '65%' ,
    width : '92%' ,
    marginTop: '3%',
    marginStart:'4%'
  },
  ProfileContainer:{
    backgroundColor: 'white',
    height: '14%' ,
    width : '89%' ,
    marginTop: '3%',
    marginStart:'4%',
    flexDirection:'row'
  },
  Profilepic1:{
    backgroundColor: 'blue',
    height: '100%' ,
    width : '22%' ,
  },
  PText:{
    fontSize:26,
    color:'black',
    //marginStart: 8,
    marginTop: 2,
  },
  Names:{
    backgroundColor: 'white',
    height: '100%' ,
    width : '72%' ,
    flexDirection:'column'
  },
  Lastseen:{
    color:'#9E9E9E',
    marginStart:'2%',
    fontSize:18,
  },
  Post:{
    backgroundColor: 'white',
    height: '10%' ,
    width : '89%' ,
    marginTop: '4%',
    marginStart:'4%',
  },
  PostText:{
    fontSize:18,
    color:'black',
    justifyContent:'center'
  },
  Photo:{
    backgroundColor: 'red',
    height: '50%' ,
    width : '104%' ,
   // marginTop: '2%',
    marginStart:'-2%',
  },
  Commentext:{
    color:'#9E9E9E',
    fontSize:16,
    marginTop:'2%'
  },
  bottompost:{
    backgroundColor: '#E0E0E0',
    height: '11%' ,
    width : '100%' ,
    marginTop: '-3%',
    flexDirection: 'row'
  },
  Liketext:{
    color:'#9E9E9E',
    fontSize: 16,
    marginTop: '7%',
    marginStart: '1%'
  },
  Post2:{
    backgroundColor: 'white',
    height: '50%' ,
    width : '89%' ,
    marginTop: '4%',
    marginStart:'4%',

  }
  


});
