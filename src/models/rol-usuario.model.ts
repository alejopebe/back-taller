import {Entity, hasMany, model, property} from '@loopback/repository';
import {Usuario} from './usuario.model';

@model()
export class RolUsuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idRol: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @hasMany(() => Usuario)
  usuarios: Usuario[];

  constructor(data?: Partial<RolUsuario>) {
    super(data);
  }
}

export interface RolUsuarioRelations {
  // describe navigational properties here
}

export type RolUsuarioWithRelations = RolUsuario & RolUsuarioRelations;
