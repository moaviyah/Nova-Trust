import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Image,  } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Screens/Login';
import Admin from './Screens/Admin';
import { auth } from './config';
import { onAuthStateChanged } from 'firebase/auth';
import ManageRequests from './Screens/ManageRequests';
import ManageUsers from './Screens/ManageUsers';
import ManageInvestments from './Screens/ManageInvestments';
import LearningAdmin from './Screens/LearningAdmin';
import UserDetails from './Screens/UserDetails';
import Verification from './Screens/Verification';
import EmailVerification from './Screens/EmailVerification';
import AdminDocumentVerification from './Screens/AdminDocumentVerification';
import Blocked from './Screens/Blocked';
import ManageWalletAddresses from './Screens/ManageWalletAddresses';
import ManageUserAgreement from './Screens/ManageUserAgreement';
import ManagePrivacyPolicy from './Screens/ManagePrivacyPolicy';
import ManageAboutUs from './Screens/ManageAboutUs';
import AboutUs from './Screens/AboutUs';
import Privacy from './Screens/Privacy';
import UserAgreement from './Screens/UserAgreement';
import ManagePopUp from './Screens/ManagePopUp';
import ManagePlans from './Screens/ManagePlans';
import OneTimePercentage from './Screens/OneTimePercentage';
import UserHistory from './Screens/UserHistory';
import SetWithdrawal from './Screens/SetWithdrawal';
import TransactionHistory from './Screens/TransactionHistory';
import Learning from './Screens/Learning';
import AddAmount from './Screens/AddAmount';
import ManageSupportLinks from './Screens/ManageSupportLinks';
import CompletedContracts from './Screens/CompletedContracts';
import Dashboard from './Screens/Dashboard';
import Welcome from './Screens/Welcome';
import SignUp from './Screens/SignUp';
import All_plans from './Screens/AllPlans';
import Instructions from './Screens/Instructions';
import Guide from './Screens/Guide';
import PlanSelection from './Screens/PlanSelection';
import Deposit from './Screens/Deposit';
import Withdraw from './Screens/Withdraw';
import CurrentPlan from './Screens/CurrentPlan';
import Referrals from './Screens/Referrals';
import DocumentVerification from './Screens/DocumentVerification';
const Stack = createNativeStackNavigator()

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);
  const [loading, setLoading] = useState(true)
  function SplashScreen() {
    setTimeout(() => {
      // Check the authentication status
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setInitialRoute('Dashboard');
        setLoading(false) // Navigate to the authenticated screen
        } else {
          setInitialRoute('Welcome');
        setLoading(false)
        }
      });
    }, 2000); // Display the splash screen for 1 second (1000 milliseconds)
}
  useEffect(() => {
    SplashScreen()
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {
        loading ?
          (
            <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.splashIcon} source={require('./assets/TrustNOVALogo.png')} />
            </View>
          )
          :
          (
            <NavigationContainer independent={true}>
              <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Dashboard' component={Dashboard} />
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='AllPlans' component={All_plans} />
                <Stack.Screen name='Instructions' component={Instructions} />
                <Stack.Screen name='Guide' component={Guide} />
                <Stack.Screen name='PlanSelection' component={PlanSelection} />
                <Stack.Screen name='Deposit' component={Deposit} />
                <Stack.Screen name='Withdraw' component={Withdraw} />
                <Stack.Screen name='CurrentPlan' component={CurrentPlan} />
                <Stack.Screen name='Refferals' component={Referrals} />
                <Stack.Screen name='Admin' component={Admin} />
                <Stack.Screen name='ManageRequests' component={ManageRequests} />
                <Stack.Screen name='ManageUsers' component={ManageUsers} />
                <Stack.Screen name='ManageInvestments' component={ManageInvestments} />
                <Stack.Screen name='DocumentVerification' component={DocumentVerification} />
                <Stack.Screen name='LearningAdmin' component={LearningAdmin} />
                <Stack.Screen name='UserDetails' component={UserDetails} />
                <Stack.Screen name='Verification' component={Verification} />
                <Stack.Screen name='EmailVerification' component={EmailVerification} />
                <Stack.Screen name='AdminDocumentVerification' component={AdminDocumentVerification} />
                <Stack.Screen name='Blocked' component={Blocked} />
                <Stack.Screen name='ManageWalletAddresses' component={ManageWalletAddresses} />
                <Stack.Screen name='ManageUserAgreement' component={ManageUserAgreement} />
                <Stack.Screen name='ManagePrivacyPolicy' component={ManagePrivacyPolicy} />
                <Stack.Screen name='ManageAboutUs' component={ManageAboutUs} />
                <Stack.Screen name='AboutUs' component={AboutUs} />
                <Stack.Screen name='Privacy' component={Privacy} />
                <Stack.Screen name='UserAgreement' component={UserAgreement} />
                <Stack.Screen name='ManagePopUp' component={ManagePopUp} />
                <Stack.Screen name='ManagePlans' component={ManagePlans} />
                <Stack.Screen name='OneTimePercentage' component={OneTimePercentage} />
                <Stack.Screen name='UserHistory' component={UserHistory} />
                <Stack.Screen name='SetWithdrawal' component={SetWithdrawal} />
                <Stack.Screen name='TransactionHistory' component={TransactionHistory} />
                <Stack.Screen name='Learning' component={Learning} />
                <Stack.Screen name='AddAmount' component={AddAmount} />
                <Stack.Screen name='ManageSupportLinks' component={ManageSupportLinks} />
                <Stack.Screen name='CompletedContracts' component={CompletedContracts} />

              </Stack.Navigator>
            </NavigationContainer>
          )
      }
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
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashIcon: {
    height:250,
    width:300,
  },
});
