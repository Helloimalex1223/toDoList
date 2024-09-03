import "./styles.css";
import { toDoListObject } from "./to-do-card";
import { toDoCardDom } from "./to-do-card-dom";


let dog1 = toDoListObject("Walk Dog", "I need to walk the dog.", "High", "Dog poops a lot", "Not completed");

toDoCardDom(dog1);


let dog2 = toDoListObject("Walk Dog", "I need to walk the dog.", "High", "Dog poops a lot", "Not completed");

toDoCardDom(dog2);

let dog3 = toDoListObject("Walk Dog", "I need to walk the dog.", "High", "Dog poops a lot", "Not completed");

toDoCardDom(dog3);
