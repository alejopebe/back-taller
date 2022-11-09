import {Entity, model, property, hasMany} from '@loopback/repository';
import {Usuario} from './usuario.model';

@model()
export class Sede extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  idSede: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  @hasMany(() => Usuario)
  usuarios: Usuario[];

  constructor(data?: Partial<Sede>) {
    super(data);
  }
}

export interface SedeRelations {
  // describe navigational properties here
}

export type SedeWithRelations = Sede & SedeRelations;
