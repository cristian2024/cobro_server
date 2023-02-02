class UserError extends Error {
  constructor(msg: string | undefined) {
    const mssg = msg || "Error in user process";
    super(mssg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UserError.prototype);
  }
}
class CreateUserError extends UserError {
  constructor(msg: string | undefined) {
    const mssg = msg || "Error in user creation";
    super(mssg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CreateUserError.prototype);
  }
}

class UpdateUserError extends UserError {
  constructor(msg: string | undefined) {
    const mssg = msg || "Error updating an user";
    super(mssg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UpdateUserError.prototype);
  }
}

class GetUserError extends UserError {
  constructor(msg: string | undefined) {
    const mssg = msg || "Error in user getting process";
    super(mssg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GetUserError.prototype);
  }
}

function validateUserError(error: unknown, alternative: string): string {
  if (error instanceof UserError) {
    return error.message;
  }
  return alternative;
}

export {
  CreateUserError,
  GetUserError,
  UpdateUserError,
  UserError,
  validateUserError,
};
