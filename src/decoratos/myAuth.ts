import { UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserAuthGuard } from 'src/guards/auth.guard';

export function MyAuth() {
  return UseGuards(UserAuthGuard) && ApiBearerAuth('access-token');
}
