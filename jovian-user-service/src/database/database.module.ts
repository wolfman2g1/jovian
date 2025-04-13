import { Global, Module } from '@nestjs/common';
@Global() // this makes the module available globally
@Module({
    providers: [DatabaseModule],
    exports: [DatabaseModule], // this allows other modules to use the database module
})
export class DatabaseModule {}
