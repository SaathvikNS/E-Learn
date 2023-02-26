import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useContext } from 'react';
import { MyContext } from '../../../../../Global/context';
import AboutCourse from './AboutCourse/aboutcourse';
import AboutTutor from './AboutTutor/abouttutor';
import VideoDescription from './VideoDesciption/videodiscription';

const Tab = createMaterialTopTabNavigator();

const HeadTab = () => {
    const {darkscheme} = useContext(MyContext);

    return(
        <Tab.Navigator screenOptions={{tabBarLabelStyle: {textTransform: 'capitalize', fontFamily: 'breeserif', fontSize: 15,}, tabBarStyle: {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}, tabBarActiveTintColor: darkscheme ? "#ffffffcc" : "#212121dd", tabBarInactiveTintColor: darkscheme ? "#ffffff55" : "#21212166"}}>
            <Tab.Screen name='AboutCourse' component={AboutCourse} options={{tabBarLabel: "About Course"}} />
            <Tab.Screen name='AboutTutor' component={AboutTutor} options={{tabBarLabel: "About Tutor"}} />
            <Tab.Screen name='VideoDescription' component={VideoDescription} options={{tabBarLabel: "Objectives"}} />
        </Tab.Navigator>
    )
}

export default HeadTab;