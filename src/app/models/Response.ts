import {College} from './College';
import {Metadata} from './Metadata';

export class Response {
  success: boolean;
  metadata: Metadata;
  schools: College[];
}
