import { publish } from 'gh-pages';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/Pomidorkaeg/fdfdsdfds.git',
  dotfiles: true,
  history: false,
}, function(err) {
  if (err) {
    console.error('Ошибка при публикации:', err);
    process.exit(1);
  } else {
    console.log('Сайт успешно опубликован!');
  }
}); 