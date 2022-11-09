import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
} from '@loopback/rest';
import {
  RolUsuario,
  Usuario
} from '../models';
import {RolUsuarioRepository} from '../repositories';

export class RolUsuarioUsuarioController {
  constructor(
    @repository(RolUsuarioRepository) protected rolUsuarioRepository: RolUsuarioRepository,
  ) { }

  @get('/rol-usuarios/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Array of RolUsuario has many Usuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.rolUsuarioRepository.usuarios(id).find(filter);
  }

  @post('/rol-usuarios/{id}/usuarios', {
    responses: {
      '200': {
        description: 'RolUsuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof RolUsuario.prototype.idRol,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuarioInRolUsuario',
            exclude: ['idUsuario'],
            optional: ['rolUsuarioId']
          }),
        },
      },
    }) usuario: Omit<Usuario, 'idUsuario'>,
  ): Promise<Usuario> {
    return this.rolUsuarioRepository.usuarios(id).create(usuario);
  }

  @patch('/rol-usuarios/{id}/usuarios', {
    responses: {
      '200': {
        description: 'RolUsuario.Usuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Partial<Usuario>,
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.rolUsuarioRepository.usuarios(id).patch(usuario, where);
  }

  @del('/rol-usuarios/{id}/usuarios', {
    responses: {
      '200': {
        description: 'RolUsuario.Usuario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.rolUsuarioRepository.usuarios(id).delete(where);
  }
}
