import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';


@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService){}

     @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Get('progress/:token')
    async getProgress(@Param('token') token: string) {
        return this.usersService.getProgress(token);
    }

    @Put('progress/:token')
    async updateProgress(
      @Param('token') token: string,
      @Body() updateProgressDto: UpdateProgressDto,
    ): Promise<any> {
      await this.usersService.updateProgress(token, updateProgressDto.progress);
      return { message: 'Progress updated successfully' };
    }
}