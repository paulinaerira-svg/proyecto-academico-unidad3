import { describe, it, expect } from 'vitest';
import { validEmail, filterJobs, makeJob } from './utils';

describe('Pruebas unitarias', () => {
  it('valida correos reales y rechaza formatos incorrectos', () => {
    expect(validEmail('ana@uni.edu')).toBe(true);
    expect(validEmail(' ana+prueba@example.com ')).toBe(true);
    expect(validEmail('correo-mal')).toBe(false);
    expect(validEmail('ana@example')).toBe(false);
  });

  it('filtra por cargo, empresa o área sin distinguir mayúsculas', () => {
    const jobs = [{ title: 'Desarrollo', company: 'ABC', area: 'TI' }, { title: 'Contabilidad', company: 'XYZ', area: 'Finanzas' }];
    expect(filterJobs(jobs, 'desarrollo')).toHaveLength(1);
    expect(filterJobs(jobs, 'xyz')).toHaveLength(1);
    expect(filterJobs(jobs, 'FINANZAS')).toHaveLength(1);
    expect(filterJobs(jobs, 'inexistente')).toHaveLength(0);
  });

  it('crea una vacante solo con cargo y empresa válidos', () => {
    expect(makeJob({ title: ' Practicante ', company: ' ABC ' }).company).toBe('ABC');
    expect(makeJob({ title: '', company: 'ABC' })).toBe(null);
  });
});