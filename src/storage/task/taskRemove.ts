import { taskGetAll } from "@storage/task/taskGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASK_COLLECTION } from "@storage/storageConfig";

export async function taskRemove(task: string) {
  try {
    const storage = await taskGetAll();

    const filtered = storage.filter((tasks) => tasks !== task);
    const tasks = JSON.stringify(filtered);

    await AsyncStorage.setItem(TASK_COLLECTION, tasks);

  } catch (error) {
    throw error;
  }
}
