import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token )
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://hackreciclo.netlify.app/postagens', this.token)
  }

  getByIdPostagem(id:number):Observable<Postagem>{
    return this.http.get<Postagem>(`https://hackreciclo.netlify.app/postagens/${id}`,this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://hackreciclo.netlify.app/postagens/titulo/${titulo}`,this.token)
  }

  postPostagem(postagem:Postagem):Observable<Postagem>{
    return this.http.post<Postagem>('https://hackreciclo.netlify.app/postagens',postagem,this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://hackreciclo.netlify.app/postagens', postagem, this.token)
  }

  deletePostagem(id:number){
    return this.http.delete(`https://hackreciclo.netlify.app/postagens/${id}`,this.token)
  }

}
