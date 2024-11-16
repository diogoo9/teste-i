import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserAuthGuard } from 'src/guards/auth.guard';
import { MyAuth } from 'src/decoratos/myAuth';

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('auth')
  @ApiOperation({ summary: 'Login' })
  @ApiBody({ schema: { example: { login: 'admin', password: 'admin' } } })
  auth(@Body() userLoginData: UserLoginDto) {
    const { login, password } = userLoginData;

    return this.userService.auth({ login, password });
  }

  @Post('/user')
  @MyAuth()
  @ApiBody({
    schema: {
      example: {
        name: 'teste',
        login: 'admin2',
        password: 'admin2',
        is_admin: false,
      },
    },
  })
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @UseGuards(UserAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('user')
  findAll() {
    return this.userService.findAll();
  }

  @Get('user/:id')
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth('access-token')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch('user/:id')
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({
    schema: { example: { name: 'teste', login: 'admin2', password: 'admin2' } },
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('user/:id')
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
