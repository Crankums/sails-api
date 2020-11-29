module.exports = {


  friendlyName: 'Reset password',


  description: '',


  inputs: {
    password: {
      description: 'The new, unencrypted password.',
      example: 'myfancypassword',
      required: true
    },
    token: {
      description: 'The password token that was in the forgot-password endpoint',
      example: 'gwa8gs8hgw9h2g9hg29',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
