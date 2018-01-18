// let globalCssModule;

export function mapToCssModules(className = '') {
  return className.split(' ').map(c => c).join(' ');
}
