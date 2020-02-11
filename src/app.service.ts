import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  addTask(task): string {
    console.log(task);
    return 'simon';
  }

  getTasks() {
    return [];
  }

  getAgents() {
    return [];
  }

  updateTask(id, task): string {
    console.log(id);
    console.log(task);
    return 'simon';
  }
}
