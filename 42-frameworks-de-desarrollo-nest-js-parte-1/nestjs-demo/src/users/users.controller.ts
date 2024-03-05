import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus, Query, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/request/:demoId')
  requestObject(@Request() req) {
    const { body, params, query, headers } = req;
    return {
      body, params, query, headers
    };
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const {
      first_name,
      last_name,
      email,
      password,
      avatar,
    } = createUserDto;
    if (
      !first_name ||
      !last_name ||
      !email ||
      !password
    ) {
      throw new HttpException('Invalid data', HttpStatus.BAD_REQUEST);
    }
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query('limit') limit: string = '10', @Query('page') page: string = '1') {
    console.log('limit', limit);
    console.log('page', page);
    const users = this.usersService.findAll();
    return { status: 'success', users, limit, page };
  }

  @Get(':uid')
  findOne(@Param('uid') userId: string) {
    if (isNaN(+userId)) {
      throw new HttpException('Invalid param', HttpStatus.BAD_REQUEST);
    }
    const user = this.usersService.findOne(+userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = this.usersService.update(+id, updateUserDto);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
