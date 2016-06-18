import Ember from 'ember';

export default Ember.Controller.extend({
  panels: {
    top: {
      region: "top"
    },
    right: {
      region: "right",
      width: 200,
      resizeable: true
    },
    bottom: {
      region: "bottom"
    },
    left: {
      region: "left",
      width: 300,
      resizeable: true
    },
    
    center: {
      region: "center"
    }
  }
});
