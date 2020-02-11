import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TaskRepository } from '../../repositories/task.repository';
import { GetTasksQuery } from '../impl';

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements IQueryHandler<GetTasksQuery> {
  constructor(private readonly repository: TaskRepository) {}

  async execute(query: GetTasksQuery) {
    console.log('Async GetTasksQuery...');
    return this.repository.findAll();
  }
}
