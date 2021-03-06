// Angular imports
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

// Rxjs imports
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

// Custom type imports
import { IBoardService } from "app/services/board/Iboardservice";
import { Board } from "app/models/board";

// Service
@Injectable()
export class BoardService implements IBoardService {

    // Properties
    private url: string = "http://localhost:3000/boards";

    // Constructor
    constructor(private http: Http) { }

    // Methods
    public create(board: Board): Observable<Board> {
        var data = JSON.stringify(board);
        return this.http.post(this.url, data, this.getHeaderOption()).map(response => response.json());
    }
    
    public getAll(): Observable<Board[]> {
        return this.http.get(this.url).map(response => response.json());
    }

    public get(id: string): Observable<Board> {
        return this.http.get(this.url + "/" + id).map(response => response.json());
    }

    public update(board: Board): Observable<Board> {
        var data = JSON.stringify(board);
        return this.http.post(this.url + "/" + board._id, data, this.getHeaderOption()).map(response => response.json());
    }

    public delete(id: string): Observable<Board> {
        return this.http.post(this.url + "/delete/" + id, this.getHeaderOption()).map(response => response.json());
    }

    private getHeaderOption(): RequestOptions {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}