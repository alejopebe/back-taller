import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {RolUsuario, RolUsuarioRelations, Usuario} from '../models';
import {UsuarioRepository} from './usuario.repository';

export class RolUsuarioRepository extends DefaultCrudRepository<
  RolUsuario,
  typeof RolUsuario.prototype.idRol,
  RolUsuarioRelations
> {

  public readonly usuarios: HasManyRepositoryFactory<Usuario, typeof RolUsuario.prototype.idRol>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(RolUsuario, dataSource);
    this.usuarios = this.createHasManyRepositoryFactoryFor('usuarios', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
  }
}
