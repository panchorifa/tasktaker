import { AggregateRoot } from '@nestjs/cqrs';

export class Agent extends AggregateRoot {
  constructor(
    private readonly id: number,
    // private readonly name: string,
    // private readonly skills: string[],
    ) {
    super()
  }

  // addTask(taskId: number) {
  // }

}


// -id
// -name
// -skills
// -priority
// -taskId
// -created_at
// -started_at
// -completed_at
