const hydrate = require('feathers-sequelize/hooks/hydrate');

module.exports = function () {
  return async context => {
    const users= context.app.service('users').Model; 
    const replies= context.app.service('replies').Model;  
    const association = { include: [
      { 
        model:users, 
        attributes: ['id','avatar','firstname','lastname'],
      },
      { 
        model:replies, 
        attributes: ['id','image','message','likes','createdAt'],
      },
      
    ] }; 

    switch (context.type) {
    case 'before':
      context.params.sequelize = Object.assign(association, { raw: false });
               
      break;

    case 'after':
      hydrate( association ).call(this, context);          
      break;
    }
    return context;
  };
};