export class ProcessTaskCommand {
  constructor(
    public readonly priority: string,
    public readonly skills: string[]
  ) {}
}
