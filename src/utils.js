export const validEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export const filterJobs = (jobs, query) => {
  const normalizedQuery = query.trim().toLowerCase();
  return jobs.filter(job =>
    [job.title, job.company, job.area].filter(Boolean).join(' ').toLowerCase().includes(normalizedQuery)
  );
};

export const makeJob = form => {
  const title = form.title.trim();
  const company = form.company.trim();
  return title && company ? { ...form, title, company, id: Date.now() } : null;
};