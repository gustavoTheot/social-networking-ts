import { User } from "./IUserRespository";
import { UserInterface, UserUpdateInterface } from "../dto/usersDto";

export class UserRepository {
    async createUser(userData: UserInterface) {
        const user = new User(userData)
        return await user.save()
    }

    async findUserByEmail(email: string) {
        return User.findOne(
            {
                email
            }
        )
    }

    async findUserByNickName(nick_name?: string) {
        return User.find(
            { nick_name }
        )
    }

    async findUserByName(name: string) {
        return User.find(
            { name }
        )
    }

    async updateUser(id: string, userData: UserUpdateInterface) {
        return await User.findByIdAndUpdate(
            id,
            userData,
            { new: true }
        )
    }

    async deleteUser(id: string) {
        return await User.findByIdAndDelete(id)
    }

    async getUsers() {
        return await User.find()
    }
}