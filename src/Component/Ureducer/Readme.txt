What is useReducer?
useReducer is a React hook that lets you manage 
state transitions in a more structured way. 
It’s inspired by the Redux pattern and is ideal when:
You have multiple related state values
 
You want to handle complex state updates 
(like nested updates, or logic based on previous state)
 
syntax:
const [state, dispatch] = useReducer(reducer, initialState);
 
reducer: A function (state, action) => newState
 
initialState: The initial state value
 
state: The current state
 
An action must have a type, and it can have a payload (optional)
The action helps you tell the reducer how to update the state.
  {
  type: 'ADD_ITEM',         // required - tells the reducer what to do
  payload: { id: 1, ... }    // optional - extra data needed to perform the action
}
 
traffic light example:
action.type: like the color of the light (e.g., 'go', 'stop', 'slow')
action.payload: the reason or details (e.g., how long to stop or which direction to go)
 
dispatch: A function to trigger state changes