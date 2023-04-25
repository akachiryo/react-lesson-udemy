import { produce } from "immer";

const state = {
  name: "Tom",
  hobbies: ["tennis", "soccer"]
}

produce(state, draft => {
  draft.name = 'John'
  console.log(draft);
})