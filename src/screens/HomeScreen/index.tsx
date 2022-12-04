import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { TodoForm } from "../../components/TodoForm";
import { TodoItem } from "../../components/TodoItem";
import { useTodo } from "../../context/TodoContext";
import { styles } from "./styles";

export function HomeScreen () {
    const { todos } = useTodo();

    return (
        <View style={styles.container}>
            <Text>Lista de Tarefas</Text>
            <FlatList
                style={{ flex: 1 }}
                data={todos}
                renderItem={({ item }) => <TodoItem todo={item} />}
                keyExtractor={(item) => item.id}
            />
            <TodoForm />
        </View>
    );
}