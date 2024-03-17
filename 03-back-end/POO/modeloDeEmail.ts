class EmailModel {
  private _from: string
  private _to: string
  private _subject: string | undefined
  private _message: string

  constructor(
    from: string, 
    to: string, 
    subject: string, 
    message: string){
    this._from = from;
    this._to = to;
    this.subject = subject;
    this._message = message;
  };

  get from(): string {
    return this._from;
  }
  get to(): string {
    return this._to;
  }
  get subject(): string {
    return this._subject || 'No subject';
  }
  get message(): string {
    return this._message;
  }

  set from(from: string) {
    this._from = from;
  }
  set to(to: string) {
    this._to = to;
  }
  set subject(newValue: string) {
    if (newValue.length <= 40) {
      this._subject = newValue;
    } else {
      throw new Error('Subject is too long');
    }
  }
  set message(message: string) {
    this._message = message;
  }

  getContent(): string {
    return `
    From: ${this._from}\n
    To: ${this._to}\n
    Subject: ${this._subject}\n
    Message: ${this._message}
    `;
  }
}

class MailList {
  constructor(private mailist: EmailModel[] = []){};

  get all(): EmailModel[] {
    return [...this.mailist];
  }

  addEmail(newMail: EmailModel): void {
    this.mailist.push(newMail);
  }

  removeMail(mailToRemove: EmailModel): void {
    this.mailist = this.mailist.filter((mail) =>
      (mail.from !== mailToRemove.from) &&
      (mail.to !== mailToRemove.to) &&
      (mail.subject !== mailToRemove.subject) &&
      (mail.message !== mailToRemove.message)
    )
  }

  getByEmailFrom(mailAddress: string): EmailModel[] {
    return this.mailist.filter((mail) => mail.from === mailAddress);
  }

  getByEmailTo(mailAddress: string): EmailModel[] {
    return this.mailist.filter((mail) => mail.to === mailAddress);
  }

  getBySubject(subject: string): EmailModel[] {
    return this.mailist.filter(
      (mail) => mail.subject.indexOf(subject) !== -1);
  }

}

const email1 = new EmailModel(
  'me@mail.com',
  'friend@mail.com',
  'Hello',
  'Hello, how are you?'
);

const email2 = new EmailModel(
  'as@as.com',
  'das@das.com',
  'Hello',
  'Hello, how are you12?'
);

const EmailList2 = new MailList([email1, email2]);

