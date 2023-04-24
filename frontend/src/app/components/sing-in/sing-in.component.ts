import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;
  

  constructor(private toastr: ToastrService,private _userService: UserService,
              private router: Router,private _error:ErrorService){
  }

  ngOnInit(): void {}

  addUser(){
    if(this.username === '' || this.password === '' || this.confirmPassword === ''){
      this.toastr.error('Todos los campos son obligatorios','Error');
      return;
    }
    if(this.password != this.confirmPassword){
      this.toastr.error('Las contraseñas no coinciden','Error');
      return;
    }
    const user: User = {
      username: this.username,
      password: this.password
    }
    this.loading=true;
    
    this._userService.signIn(user).subscribe({
      next:(res)=>{
        console.log(res);
      this.loading=false;
      this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Usuario registrado');
      this.router.navigate(['/login']);
      },error:(err: HttpErrorResponse)=> {
        this.loading = false;
        this._error.msgError(err);
      }
    })
  }
}
