import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { ConfModule } from './conf/conf.module';

@Module({
  imports: [ProductModule, DatabaseModule, ConfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
