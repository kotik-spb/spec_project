
class UserDto {
  constructor(user) {
    this.id = user.id;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.isActivated = user.isActivated;
  }
}

module.exports = UserDto;