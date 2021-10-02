import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>){}

    async getUsers(): Promise<IUser[]>{
        const users = await this.userModel.find({},{'__v':0});
        return users;
    }

    async getUser(userId:string): Promise<IUser>{
        const user = await this.userModel.findById(userId,{'__v':0});
        if(!user) throw new NotFoundException('User does not exist');
        return user;
    }

    async createUser(createUserDto: CreateUserDto): Promise<IUser>{
        const user =  new this.userModel(createUserDto);
        const inputPassword = user.password;
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(inputPassword, salt);
        user.password = hashedPassword;
        return await user.save();
    }

    async deleteUser(userId:string):Promise<IUser>{
        const deletedUser = await this.userModel.findByIdAndDelete(userId);
        if(!deletedUser) throw new NotFoundException('User does not exist');
        return deletedUser;
    }

    async updateUser(userId:string, createUserDto:CreateUserDto): Promise<IUser>{
        const updateUser = await this.userModel.findByIdAndUpdate( 
            userId, createUserDto, {new:true}
        );
        if(!updateUser) throw new NotFoundException('User does not exist');
        return updateUser;
    }
}
