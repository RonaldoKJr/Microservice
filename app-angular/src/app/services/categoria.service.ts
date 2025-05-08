import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:3000/categoria'; //URL da API

  //Criar uma lista fake
  categorias : Categoria [] = [];

  //injeção de dependência do http
  constructor(private http:HttpClient) {

  }

  //retornar a lista de categorias
  list() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.apiUrl) as Observable<Categoria[]>
  }
}
