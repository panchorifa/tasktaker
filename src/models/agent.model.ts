import { AggregateRoot } from '@nestjs/cqrs';

export class Agent extends AggregateRoot {
  constructor(
    private readonly id: number,
    private readonly skills: string[],
    ) {
    super()
  }

  addTask(taskId: number) {
  }

}
