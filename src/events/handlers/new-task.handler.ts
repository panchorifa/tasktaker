import { IEventHandler } from '@nestjs/cqrs'
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator'
import { NewTaskEvent } from '../impl/new-task.event'

@EventsHandler(NewTaskEvent)
export class NewTaskHandler
  implements IEventHandler<NewTaskEvent> {
  handle(event: NewTaskEvent) {
    console.log('NewTaskEvent...');
  }
}
