module.exports = {


  friendlyName: 'Forgot password',


  description: '',


  inputs: {
    email: {
      description: 'The email address of the user who wants to recover their password.',
      example: 'albus@dumbledore.com',
      type: 'string',
      required: true
    },

  },


  exits: {
    success: {
      description: 'Email matched a user and a recovery email might have been sent.'
    },

  },


  fn: async function (inputs, exits) {
    const user = User.findOne({email: inputs.email});
    if (!user) {
      return;
    }
    const token = sails.helpers.strings.random('url-friendly');
    await User.update({id: user.id}).set({
      passwordResetToken: token,
      passwordResetTokenExpiresAt: Date.now() + sails.config.custom.passwordResetTokenTTL,
    });
    const recoveryLink = `${sails.config.custom.baseUrl}/user/reset-password?token=${token}`;
    // All done.
    return;

  }


};
