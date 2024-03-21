import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SVGAlarm from '../tools/SVGAlarm';

const Tab = createBottomTabNavigator();



function MainPage() {
  const [alarmState, setAlarmState] = useState(1);
  const onPress = (newState) => {
    setAlarmState(newState);
  };

  return (
    <div>
      <div>
        {/*Title*/}
        <LinearGradient
          colors={['#F596D3', '#D247BF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.title}
        >
          <Text style={styles.titleText}>EchoSafe</Text>
        </LinearGradient>
        <Text> Encuentra </Text>
        <LinearGradient
          colors={['#61DAFB', '#1fc0f1', '#03a3d7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.subtitle}
        >
          <Text style={styles.subtitleText}>Seguridad</Text>
        </LinearGradient>
        <Text> Con Confianza </Text>
      </div>
      <div>
        {/*SVG Alarm*/}
        <SVGAlarm obj={alarmState}/>
      </div>
      <div>
        {/*Buttons*/}
        <TouchableOpacity style={styles.button} onPress={()=>onPress(1)}>
          <Text style={styles.title}>Activar Alarma</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>onPress(2)}>
          <Text style={styles.title}>Desactivar Alarma</Text>
        </TouchableOpacity>
      </div>
    {/* BottomTabNavigator */}
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DashBoard" component={DashBoard} />
        <Tab.Screen name="Home" component={MainPage} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    </div>
  )
}

const styles = StyleSheet.create({
  title: {
    // ... other styles ...
  },
  titleText: {
    color: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    // ... other styles ...
  },
  subtitleText: {
    color: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default MainPage;