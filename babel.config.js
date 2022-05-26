module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~/': './src/',
          '#controllers/': './src/controllers',
          '#jobs/': './src/jobs',
          '#views/': './src/views',
          '#lib/': './lib',
          '#middlewares/': './src/middlewares',
          '#config/': './config',
          '#models/': './models',
          '#schemas/': './src/schemas',
          '#services/': './src/services',
          '#utils/': './src/utils',
          '#styles/': './src/views/styles',
          '#assets/': './src/views/assets',
          '#layouts/': './src/views/layouts',
          '#pages/': './src/views/pages',
          '#partials/': './src/views/partials',
          '#components/': './src/views/components',
          '#behaviors/': './src/views/behaviors',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
