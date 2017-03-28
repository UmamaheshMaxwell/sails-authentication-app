/*
	Name 		: AuthController
	Description : Server side logic for managing authentication
	Author 		: Umamaheswararao Meka
*/

module.exports = {

	index: function(req, res){
		var email = req.params.email;
		var password = req.params.password;

		if(!email || !password){
			return res.json("Email and Password are required !!")
		}

		User.findOne({ email: email }).exec(function (err, user){
			if (err) {
				return res.json(err.status, {err: err})
			}
			if (!user) {
				return res.json(401, 'Ivalid email or password');
			}

			User.comparePassword(password, user, function(err, validUser){
				if(err){
					return res.json(err.status, {err: err})
				}
				if(!validUser){
					return res.json(401, 'Ivalid email or password');
				} else {
					return res.json({
						user: user,
						token: jwToken.issue({id: user.id})
					})
				}
			})
		});
	}
}
