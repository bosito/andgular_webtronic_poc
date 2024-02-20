import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IGftSearch, IGif } from './gits/interfaces/gifs.response.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private gifAPIKey: string = 'rQG2rlNQgv5xKA2uDYPtpeStCNh3o9AS';
  private apiURL: string = 'https://api.giphy.com/v1/gifs';

  public gifList: IGif[] = [];

  constructor(private http: HttpClient) {}

  public async searchTag(tag: string) {
    const params = new HttpParams()
      .set('api_key', this.gifAPIKey)
      .set('q', tag)
      .set('limit', '10');

    this.http.get<IGftSearch>(`${this.apiURL}/search`, { params }).subscribe({
      next: (response) => {
        this.gifList = response.data;
      },
    });
  }
}
