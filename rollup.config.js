import typescript from 'rollup-plugin-typescript2';
import externals from 'rollup-plugin-node-externals';

export default {
  input: 'src/VisibilityTrigger.tsx',
  output: {
    file: 'dist/VisibilityTrigger.js',
    format: 'umd',
    name: 'VisibilityTrigger',
    exports: 'default',
  },
  plugins: [
    typescript({
      tsconfigOverride: {compilerOptions: {module: 'ESNext'}},
    }),
    externals({deps: true}),
  ],
};
