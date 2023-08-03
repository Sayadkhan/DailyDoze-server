const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields must be required");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid Email");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Please make sure your password is at least 8 characters long and includes at least one uppercase letter, one lowercase letter, one number, and one special character"
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hashPass,
  });

  return user;
};

//login
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields must be required");
  }

  //find user using email
  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Incorrect Email or Password");
  }

  //password match
  const passMatch = await bcrypt.compare(password, user.password);

  if (!passMatch) {
    throw new Error("Incorrect Email or Password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
