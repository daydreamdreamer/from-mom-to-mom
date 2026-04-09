import { CookingTimePipe } from './cooking-time.pipe';

describe('CookingTimePipe', () => {
  it('create an instance', () => {
    const pipe = new CookingTimePipe();
    expect(pipe).toBeTruthy();
  });
});
