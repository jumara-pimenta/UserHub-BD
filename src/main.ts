import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}
bootstrap();
