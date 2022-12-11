import { IconButton, Text } from "react-native-paper";
import Animated, { Layout, LightSpeedInLeft, LightSpeedOutRight } from "react-native-reanimated";
import { useTodo } from "../../context/TodoContext";
import { Checkbox } from "../Checkbox";
import { styles } from "./styles";

export interface Todo {
    id: string;
    description: string;
    completed: boolean;
}

type Props = {
    todo: Todo;
}

export function TodoItem({ todo }: Props) {
    const { deleteTodo, toggleTodo } = useTodo();
    return (
        <Animated.View 
            style={styles.container}
            entering={LightSpeedInLeft}
            layout={Layout.springify()}
            exiting={LightSpeedOutRight}
        >
            <Checkbox onCheck={() => toggleTodo(todo.id)} value={todo.completed} />
            <Text style={styles.descriptionText}>{todo.description}</Text>
            <IconButton onPress={() => deleteTodo(todo.id)} size={32} style={{ backgroundColor: "red" }} icon={"delete"} color="#fff" />
        </Animated.View>
    );
}