import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Sede} from './sede.model';
import {Vehiculo} from './vehiculo.model';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  idUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
  })
  fechaNacimiento?: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  @property({
    type: 'string',
  })
  nivelEstudio?: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasenia: string;

  @belongsTo(() => Sede)
  sedeId: string;

  @hasMany(() => Vehiculo)
  vehiculos: Vehiculo[];

  @property({
    type: 'number',
  })
  rolUsuarioId?: number;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
