import { Injectable } from '@angular/core';
import { IBoardService } from "app/services/Iboardservice";
import { Board } from "app/components/board/board";

@Injectable()
export class BoardService implements IBoardService {

  constructor() { }

  create(board: Board): void {
    throw new Error('Method not implemented.');
  }
  getAll(): Board[] {
    throw new Error('Method not implemented.');
  }
  get(id: number): Board {
    throw new Error('Method not implemented.');
  }
  update(id: number): void {
    throw new Error('Method not implemented.');
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }
}