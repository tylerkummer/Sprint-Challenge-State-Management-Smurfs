1. What problem does the context API help solve?

    Passing down props can become very cumbersome, Conext API makes it possible to not have to pass props down from component to component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are sets of information that send datat from an application to a store. Reducers specify how an application changes in response to actions that are sent to the store. The Store holds the application state and allows state to be updated with dispatch. The store is known as the single source of truth because it brings the actions and reducers together in one place.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    <!-- Application State is global -->

    Component state uses setState() which schedules an update to the component's state object, so when a state changes the component re-renders. The application state is immutable, when the application state changes the state is cloned not mutated. Application state would be good to use when you want to syinc across all layers of application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a type of middleware that allows the user to provide the ability to handle asynchornous operations inside an action creator. This allows us to use operations without waiting for one to completely finish until moving onto the next one.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Probably redux because there are more guides and jobs for it at the moment.
