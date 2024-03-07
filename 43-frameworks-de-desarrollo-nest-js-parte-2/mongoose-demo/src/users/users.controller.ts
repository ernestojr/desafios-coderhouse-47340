import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private configService: ConfigService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    console.log('JWT_SECRET', this.configService.get<string>('JWT_SECRET'));
    return this.usersService.findAll();
  }

  @Get(':uid')
  async findOne(@Param('uid') uid: string) {
    const user = await this.usersService.findOne(uid);
    if (!user) {
      throw new HttpException('User not found 😱', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Put(':uid')
  update(@Param('uid') uid: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(uid, updateUserDto);
  }

  @Delete(':uid')
  remove(@Param('uid') uid: string) {
    return this.usersService.remove(uid);
  }
}
