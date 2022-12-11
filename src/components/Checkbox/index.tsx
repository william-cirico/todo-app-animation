import { TouchableOpacity } from "react-native";
import Lottie from "lottie-react-native";
import { useEffect, useRef, useState } from "react";
import { styles } from "./styles";

type Props = {
    onCheck: VoidFunction;
    value: boolean
}

export function Checkbox({ onCheck, value }: Props) {
    const animation = useRef<any>(null!);
    const firstRun = useRef(true);

    useEffect(() => {
        if (firstRun.current) {
            if (!value) {
                animation.current.play(0, 0);
            } else {
                animation.current.play(20, 20);
            }
        } else {
            if (!value) {
                animation.current.play(20, 0);
            } else {
                animation.current.play(0, 20);
            }
        }
    }, [value]);

    function handleCheck() {
        firstRun.current = false;
        onCheck();
    }

    return (
        <TouchableOpacity style={styles.checkbox} onPress={handleCheck}>
            <Lottie
                source={require("../../assets/checkbox.json")}
                autoPlay={false}
                loop={false}
                resizeMode="cover"
                ref={animation}
                style={{ height: 64, width: 64 }}
            />
        </TouchableOpacity>
    );
}