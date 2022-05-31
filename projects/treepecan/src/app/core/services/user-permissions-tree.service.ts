import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPermissionsTreeService {

  constructor() { }

  public loadUsersPermissions(userId: number, tree: any): Promise<any> {
    return new Promise((resolve) => {
      resolve('Will be explained on the review phase');
    });
  }
}
