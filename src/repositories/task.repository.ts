import { Injectable } from '@nestjs/common';
import { Task } from '../models/task.model';

@Injectable()
export class TaskRepository {
  async findOneById(id: number): Promise<Task> {
    return null;
  }

  async findAll(): Promise<Task[]> {
    return [];
  }
}
