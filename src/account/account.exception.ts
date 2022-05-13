import { BaseException } from 'src/common/base.exception';

export class AlreadyExistEmailException extends BaseException {
  constructor() {
    super('ALREADY_EXIST_EMAIL', '이미 존재하는 이메일입니다.');
  }
}

export class AlreadyExistNicknameException extends BaseException {
  constructor() {
    super('ALREADY_EXIST_NICKNAME', '이미 존재하는 닉네임입니다.');
  }
}

export class WrongEmailOrPasswordException extends BaseException {
  constructor() {
    super(
      'WRONG_EMAIL_OR_PASSWORD',
      '이메일 또는 비밀번호가 일치하지 않습니다.',
    );
  }
}
