import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  //simulate a db
  private users: any[] = [
    {
      id: 1, 
      name: 'Luis',
      email: 'luis@gmail.com',
      password: '12345678'
    },
    {
      id: 2, 
      name: 'Jose Luis',
      email: 'joseLuis@gmail.com',
      password: '87654321'
    }
  ]

  public userSession: any

  public login(email: string, password: string){
    const findUser = this.users.find((user)=>user.email === email && user.password === password)
    if (findUser) {
      this.userSession = findUser;
      localStorage.setItem('session', JSON.stringify(this.userSession))
    }

    return findUser;
  }

}
