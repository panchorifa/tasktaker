import { HttpException, HttpStatus } from '@nestjs/common';

export class BusyException extends HttpException {
  constructor() {
    super('AgentsUnavailable', HttpStatus.SERVICE_UNAVAILABLE);
  }
}
