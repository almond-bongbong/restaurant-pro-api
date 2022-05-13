import { Prisma } from '@prisma/client';

const softDeleteMiddleware: Prisma.Middleware = async (params, next) => {
  const hasDeletedAtProperty =
    Prisma[`${params.model}ScalarFieldEnum`].hasOwnProperty('deletedAt');

  if (!hasDeletedAtProperty) return next(params);

  if (params.action == 'findUnique') {
    params.action = 'findFirst';
    params.args.where['deletedAt'] = null;
  }
  if (params.action == 'findMany') {
    if (params.args.where != undefined) {
      if (params.args.where.deletedAt == null) {
        params.args.where['deletedAt'] = null;
      }
    } else {
      params.args['where'] = { deletedAt: null };
    }
  }
  if (params.action == 'update') {
    params.action = 'updateMany';
    params.args.where['deletedAt'] = null;
  }
  if (params.action == 'updateMany') {
    if (params.args.where != undefined) {
      params.args.where['deletedAt'] = null;
    } else {
      params.args['where'] = { deletedAt: null };
    }
  }
  if (params.action == 'delete') {
    params.action = 'update';
    params.args['data'] = { deletedAt: null };
  }
  if (params.action == 'deleteMany') {
    params.action = 'updateMany';
    if (params.args.data != undefined) {
      params.args.data['deletedAt'] = null;
    } else {
      params.args['data'] = { deletedAt: null };
    }
  }

  return next(params);
};

export default softDeleteMiddleware;
