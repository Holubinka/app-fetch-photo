import fetch from 'node-fetch';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ResourceByPathService {
  async getResourceByPath(path: string, method = 'GET'): Promise<any> {
    let res = await fetch(`https://jsonplaceholder.typicode.com${path}`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return  res.json();
  }
}
