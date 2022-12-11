import { FlatList, ScrollView, View } from "react-native";
import { IconButton, Text, TextInput } from "react-native-paper";
import { TodoForm } from "../../components/TodoForm";
import { TodoItem } from "../../components/TodoItem";
import { useAuth } from "../../context/AuthContext";
import { useTodo } from "../../context/TodoContext";
import { styles } from "./styles";

export function HomeScreen() {
    const { todos } = useTodo();
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Lista de Tarefas</Text>
                <IconButton size={40} style={{ backgroundColor: "#fff" }} icon="logout-variant" color="black" onPress={logout} />
            </View>
            <ScrollView style={{ flex: 1 }}>
                {
                    todos.map(todo => (
                        <TodoItem todo={todo} key={todo.id} />
                    ))
                }
            </ScrollView>
            <TodoForm />
        </View>
    );
}