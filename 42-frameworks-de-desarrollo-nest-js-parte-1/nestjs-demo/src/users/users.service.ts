import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users:Array<User>;
  constructor() {
    this.users = [{
      id: 1,
      first_name: 'Ernesto',
      last_name: 'Rojas',
      email: 'ernestorojas.dev@gmail.com',
      password: 'qwerty',
      avatar: 'https://cloudimages.com/ernestorojas.dev@gmail.com.png',
    }];
  }
  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) {
      if (updateUserDto.first_name) {
        user.first_name = updateUserDto.first_name;
      }
      if (updateUserDto.last_name) {
        user.last_name = updateUserDto.last_name;
      }
      if (updateUserDto.avatar) {
        user.avatar = updateUserDto.avatar;
      }
    }
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
