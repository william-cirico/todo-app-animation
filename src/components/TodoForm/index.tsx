import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useTodo } from "../../context/TodoContext";
import { styles } from "./styles";

export function TodoForm() {
    const [description, setDescription] = useState("");
    const { addTodo } = useTodo();

    function handleAddTodo() {
        if (!description.trim()) {
            Alert.alert("Falha", "Descrição inválida!");
            return;
        }

        addTodo(description);
        setDescription("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nova tarefa</Text>
            <TextInput placeholder="nova tarefa" mode="outlined" value={description} onChangeText={setDescription} />
            <Button style={styles.button} icon="plus" onPress={handleAddTodo} mode="outlined">Adicionar</Button>
        </View>
    );
}