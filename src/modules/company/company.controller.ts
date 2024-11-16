import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Query,
  Req,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { UserAuthGuard } from 'src/guards/auth.guard';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({
    schema: {
      example: {
        name: 'movida',
        address: 'av juca de paulo n23, Maceio-al',
        phone: '(82) 98655-0000 ',
      },
    },
  })
  create(@Body() createCompanyDto: CreateCompanyDto, @Req() req) {
    const { user_id } = req.user;
    return this.companyService.create(createCompanyDto, user_id);
  }

  @Get()
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth('access-token')
  findAll(@Req() req) {
    const { user_id } = req.user;
    return this.companyService.findAll(user_id);
  }

  @Delete(':id')
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: string, @Req() req) {
    const { user_id } = req.user;
    return this.companyService.remove(id, user_id);
  }
}
