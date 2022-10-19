import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASK_COLLECTION } from "@storage/storageConfig";
import { taskGetAll } from "./taskGetAll";

export async function taskCreate(newTask: string) {
  try {
    const storagedTask = await taskGetAll();

    const storage = JSON.stringify([...storagedTask, newTask]);

    await AsyncStorage.setItem(TASK_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
}
