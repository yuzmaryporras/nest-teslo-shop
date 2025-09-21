import { Module } from '@nestjs/common';
import { FileService } from './files.service';
import { FileController } from './files.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [FileController],
  providers: [FileService],
  imports: [ConfigModule]
})
export class FileModule {}
