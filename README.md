# Backbone-Marionette-Bootstrap-CRUD-Template
"Simple" CRUD template for Backbone and Marionette apps with a mix of Require JS and Bootstrap for the UI

# Structure

## components

Each component is modular and does not require or depend on other components. The component can be initiated by requiring its index.js file. Each component view, model and controller emit events that component controllers other components can listen to. Component controllers listen its own component events and other component events.

- models
  - user.js
- collections
  - users.js
- controllers
  - edit.js
  - detail.js
  - item.js
  - list.js
- templates
  - edit.js
  - detail.js
  - item.js
  - list.js
- views
  - edit.js
  - detail.js
  - item.js
  - list.js
- index.js
