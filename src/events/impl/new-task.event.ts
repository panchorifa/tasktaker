export class NewTaskEvent {
  constructor(
    public readonly taskId: number,
    public readonly priority: number) {}
}
