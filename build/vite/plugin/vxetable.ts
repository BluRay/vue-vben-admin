import styleImport from 'vite-plugin-style-import';

export function configVxeTablePlugin(isBuild: boolean) {
  if (!isBuild) return [];
  const vxeTablePlugin = styleImport({
    libs: [
      {
        libraryName: 'vxe-table',
        esModule: true,
        resolveComponent: (name) => `vxe-table/es/${name}`,
        resolveStyle: (name) => `vxe-table/es/${name}/style.css`,
      },
    ],
  });
  return vxeTablePlugin;
}
