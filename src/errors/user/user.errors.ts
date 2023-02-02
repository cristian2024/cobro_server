class CreateUserError extends Error {
  constructor(msg: string | undefined) {
    const mssg = msg || "Error in user creation";
    super(mssg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CreateUserError.prototype);
  }
}

class GetUserError extends Error {
  constructor(msg: string | undefined) {
    const mssg = msg || "Error in user getting process";
    super(mssg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GetUserError.prototype);
  }
}

export { CreateUserError, GetUserError };
