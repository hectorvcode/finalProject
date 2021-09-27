import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post('create')
    @ApiCreatedResponse({ description: 'The resource has been succesfully created' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async createUser(@Body() createUserDto: CreateUserDto){
        return await this.userService.createUser(createUserDto);
    }

    @Get()
    @ApiOkResponse({ description: 'The resource list has been succesfully returned' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async getUsers() {
        return await this.userService.getUsers();
    }

    @Get(':userId')
    @ApiOkResponse({ description: 'The resource has been succesfully returned' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async getUser(@Param('userId') userId){
        return await this.userService.getUser(userId);
    }

    @Delete('delete')
    @ApiOkResponse({ description: 'The resource has been succesfully removed' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async deleteUser(@Query('userId') userId){
        return await this.userService.deleteUser(userId);
    }

    @Put('update')
    @ApiOkResponse({ description: 'The resource has been succesfully updated' })
    @ApiForbiddenResponse({ description: 'Forbbiden' })
    async updateUser(@Body() createUserDto:CreateUserDto, @Query('userId') userId){
        return await this.userService.updateUser(userId, createUserDto);
    }

}
