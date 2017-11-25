import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Routes from '../common/constants/routes-config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ToolkitService {

  constructor(private http: HttpClient) { }
  public getCategories(): Observable<Response> {

    let url: string;
    url = Routes.API_URLS.Toolkit.GET;
    return this.http.get(url).map((response: Response) => {
      return response;
    })

  }
}
