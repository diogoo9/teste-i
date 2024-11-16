import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { MyAuth } from 'src/decoratos/myAuth';
import { ApiBody } from '@nestjs/swagger';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @MyAuth()
  @ApiBody({
    schema: {
      example: {
        name: 'movida',
        address: 'av juca de paulo n23, Maceio-al',
        phone: '(82) 98655-0000 ',
      },
    },
  })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  @MyAuth()
  findAll() {
    return this.companyService.findAll();
  }

  @Delete(':id')
  @MyAuth()
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }
}
