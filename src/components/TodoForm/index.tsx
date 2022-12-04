import { useState } from "react";
import { Alert, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useTodo } from "../../context/TodoContext";

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
        <View>
            <TextInput mode="outlined" value={description} onChangeText={setDescription} />
            <Button icon="plus" onPress={handleAddTodo} mode="outlined">Adicionar</Button>
        </View>
    );
}