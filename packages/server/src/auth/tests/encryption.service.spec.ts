import { Test } from '@nestjs/testing';
import { fakeEncryptionService } from '../../../libs/jest/mocks';
import { EncryptionService } from '../encryption.service';

describe('EncryptionService', () => {
  let service: EncryptionService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: EncryptionService,
          useValue: fakeEncryptionService,
        },
      ],
    }).compile();
    service = module.get(EncryptionService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Create an instance of authService', async () => {
    expect(service).toBeDefined();
  });
});
