import { Precise } from "../PreciseLib"

test('TEST: 72838324 + 736478288377', () => {
    expect(Precise.add('72838324', '736478288377')).toBe('736551126701');
});

test('TEST: 736478288377 + 72838324', () => {
    expect(Precise.add('736478288377', '72838324')).toBe('736551126701');
});

test('TEST: 72838324 * 736478288377', () => {
    expect(Precise.mult('72838324', '736478288377')).toBe('2118632187769360148');
});