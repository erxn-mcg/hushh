import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function Timer() {
    const [counter, setCounter] = React.useState(60);
  
   
    React.useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);

    if (counter == 0){
        return(
            <View>
        <Text style={styles.timer}>Meditation Over</Text>
      </View>
        )
    } else {
        return (
            <View>
              <Text style={styles.timer}>Countdown: {counter}</Text>
            </View>
             
          );
    }
  
    
  }

export default Timer

const styles = StyleSheet.create({
    timer: {
        alignSelf: 'center',
        marginTop: 90,
        fontSize: 40,
        color: '#F67280',
        fontWeight: '800'
    }
})