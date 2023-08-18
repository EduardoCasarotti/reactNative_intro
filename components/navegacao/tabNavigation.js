import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Exemplos from './exemplos';
import Atividades from './atividades'
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Exemplos" component={Exemplos} />
      <Tab.Screen name="Atividades" component={Atividades} />
    </Tab.Navigator>
  );
}
export default MyTabs;