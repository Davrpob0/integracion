import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
   users = [{
    id: 1,
    name: 'Juan Pablo ',
    lastname: 'Orozco',
    age: 25,
    email: 'juan-pablo02@hotmail.com'
  },
  {
    id: 2,
    name: 'Juan Pablo ',
    lastname: 'Vanegas',
    age: 33,
    email: 'juan-pablo01@hotmail.com'
  },
  {
    id: 3,
    name: 'Miguel ',
    lastname: 'Toro',
    age: 23,
    email: 'migueltoro@gmail.com'
  },
  {
    id: 4,
    name: 'David ',
    lastname: 'Restrepo',
    age: 27,
    email: 'davidretrepo@gmail.com'
  }

  ]
  create(usuario: any) {
    
    return this.users.push(usuario);
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto
        };
      }
      return user;  
    });
  }

  remove(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    return this.users;
  }

 
  
}
