module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|d3-shape|d3-zoom|react-native-reanimated|d3-hierarchy|d3-time|d3-scale-chromatic|d3-time-format|d3-scale|d3|d3-random|d3-polygon|d3-array|internmap|d3-geo|d3-format|d3-quadtree|d3-force|d3-fetch|d3-dsv|robust-predicates|delaunator|d3-delaunay|d3-contour|d3-path|d3-ease|d3-chord|d3-timer|d3-transition|d3-axis|d3-color|d3-interpolate|d3-selection|d3-brush|d3-dispatch|d3-drag|react-native-responsive-fontsize|react-native-iphone-x-helper)/)',
  ],
  globalSetup: '@shopify/react-native-skia/globalJestSetup.js',
  setupFiles: ['@shopify/react-native-skia/jestSetup.js'],
  setupFilesAfterEnv: [
    './jestSetupFile.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__jest__/fileTransformer.js',
  },
};
