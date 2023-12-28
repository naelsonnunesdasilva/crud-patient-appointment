import { Module } from '@nestjs/common';

import { databaseProviders } from '../config/database.providers';

@Module({
  imports: [],
  controllers: [],
  providers: [, ...databaseProviders],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(AuthMiddleware)
  //     .forRoutes('');
  // }
}
