import { Test } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { EncryptionService } from '../encryption.service';
describe('EncryptionService', () => {
  let service: EncryptionService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [EncryptionService],
    }).compile();
    service = module.get(EncryptionService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Create an instance of EncryptionService', async () => {
    expect(service).toBeDefined();
  });
  it('should decrypt the password', async () => {
    const passwordToHash = 'password';
    const hashedPassword = await service.hashPassword(passwordToHash);
    expect(await bcrypt.compare(passwordToHash, hashedPassword)).toBeTruthy();
  });
  it('should hash the password', async () => {
    const passwordToHash = 'password';
    const hashedPassword = await service.hashPassword(passwordToHash);
    expect(hashedPassword).not.toEqual(passwordToHash);
  });
});
