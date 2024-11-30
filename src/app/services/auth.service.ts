import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SesionRequestI, SesionResponseI, User} from "../interfaces/auth.interface";
import {environments} from "../../config/env";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private baseUrl = environments.API_URL;

  public login(userLogin: SesionRequestI) : Observable<boolean>{
    return this.http.post<SesionResponseI>(`${this.baseUrl}/sesion/login`, userLogin)
        .pipe(
            map(({data}) => this.guardarDatosUsuario(data) ),
            catchError( err => throwError( () => err.error.message ))
        )
  }

  public register(){}


  public logout(){
    localStorage.clear();
  }

  private guardarDatosUsuario(user: User) :boolean{
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }

}


