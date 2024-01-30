import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const getFilterAndOpts = (query = {}) => {
  const { page, limit, sort, first_name, last_name, email } = query;
  const filter = {};
  const opts = { page, limit, sort };
  if (first_name) {
    Object.assign(filter, { first_name });
  }
  if (last_name) {
    Object.assign(filter, { last_name });
  }
  if (email) {
    Object.assign(filter, { email });
  }
  return { filter, opts };
};
