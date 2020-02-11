import { AggregateRoot } from '@nestjs/cqrs';

export class Task extends AggregateRoot {
  constructor(
    private readonly id: number,
    private readonly priority: number,
    private readonly skills: string[]) {
    super()
  }

  complete() {    
  }
}
