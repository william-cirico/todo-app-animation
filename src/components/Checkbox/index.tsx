import { TouchableOpacity } from "react-native";
import Lottie from "lottie-react-native";
import { useEffect, useRef, useState } from "react";
import { styles } from "./styles";

type Props = {
    onCheck: (newValue: boolean) => void;
    value: boolean
}

export function Checkbox({ onCheck, value }: Props) {
    const animation = useRef<any>(null!);
    const [checked, setChecked] = useState(value);
    const firstRun = useRef(true);

    useEffect(() => {
        if (!firstRun.current) {
            if (checked) {
                animation.current.play(0, 30);
            } else {
                animation.current.play(30, 0);
            }
        } else {
            if (checked) {
                animation.current.play(30, 30);
                firstRun.current = false;
            }
        }
    
        onCheck(!checked);
    }, [checked]);

    return (
        <TouchableOpacity style={styles.checkbox} onPress={() => setChecked(!checked)}>
            <Lottie
                source={require("../../assets/checkbox.json")}
                autoPlay={false}
                loop={false}
                resizeMode="cover"
                ref={animation}
                style={{ height: 200, width: 200 }}
            />
        </TouchableOpacity>
    );
}