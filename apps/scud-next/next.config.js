const { withGluestackUI } = require("@gluestack/ui-next-adapter");
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["nativewind", "react-native-css-interop","expo","expo-av"],
};

module.exports = withGluestackUI(nextConfig);

/** @type {import('next').NextConfig} */
// const { DefinePlugin } = require("webpack");

// module.exports = {
//   reactStrictMode: true,
//   transpilePackages: [
//     "@gluestack-ui/nativewind-utils",
//     "nativewind",
//     "react-native-css-interop"
//   ],
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...(config.resolve.alias || {}),
//       // Transform all direct `react-native` imports to `react-native-web`
//       "react-native$": "react-native-web",
//     };
//     config.resolve.extensions = [
//       ".web.js",
//       ".web.jsx",
//       ".web.ts",
//       ".web.tsx",
//       ...config.resolve.extensions,
//     ];
//     // config.module.rules.push({
//     //   test: /\.mp4$/,
//     //   use: [
//     //     {
//     //       loader: 'file-loader',
//     //       options: {
//     //         publicPath: '/_next/static/videos/',
//     //         outputPath: 'static/videos/',
//     //         name: '[name].[hash].[ext]',
//     //       },
//     //     },
//     //   ],
//     // });

//     config.plugins.push(
//       new DefinePlugin({
//         __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
//       })
//     );

//     return config;
//   },
//   typescript: { ignoreBuildErrors: true },
// };
