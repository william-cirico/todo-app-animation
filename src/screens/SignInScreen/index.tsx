import { Animated, Keyboard, KeyboardAvoidingView, View } from "react-native";
import { useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { styles } from "./styles";
import Lottie from "lottie-react-native";
import { useAuth } from "../../context/AuthContext";


export function SignInScreen() {
    const [logoSize] = useState(new Animated.Value(300));
    const [isLottieVisible, setIsLottieVisible] = useState(true);
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
 
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => shrinkLogo());
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => growLogo());

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    function shrinkLogo() {
        setIsLottieVisible(false);
        Animated.timing(logoSize, {
            toValue: 100,
            duration: 300,
            useNativeDriver: false
        }).start();
    }

    function growLogo() {
        Animated.timing(logoSize, {
            toValue: 300,
            duration: 300,
            useNativeDriver: false
        }).start();
        setTimeout(() => {
            setIsLottieVisible(true);
        }, 300);
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Animated.View style={[styles.logoContainer, { height: logoSize }]}>
                {
                    isLottieVisible ?
                        <Lottie resizeMode="cover" source={require("../../assets/icon.json")} autoPlay /> :
                        <Animated.Image source={require("../../assets/logo.png")} style={{ height: logoSize, width: logoSize }} />
                }
            </Animated.View>
            <View style={styles.form}>
                <TextInput testID="username" label={"E-mail"} mode="outlined" onChangeText={setUsername} />
                <TextInput testID="password" secureTextEntry={true} label={"Senha"} mode="outlined" onChangeText={setPassword} />
                <Button style={styles.button} mode="contained" icon={"send"} onPress={() => login(username, password)}>Logar</Button>
            </View>
        </KeyboardAvoidingView>
    );
}