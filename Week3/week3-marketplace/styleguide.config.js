const {
  createWebpackDevConfig,
  createWebpackProdConfig,
} = require("@craco/craco");
const cracoConfig = require("./craco.config");
const path = require("path");

/**
 * @type {import('react-styleguidist').StyleguidistConfig}
 */
module.exports = {
  require: [path.resolve(__dirname, "src/index.css")],
  webpackConfig:
    process.env.NODE_ENV === "production"
      ? createWebpackProdConfig(cracoConfig)
      : createWebpackDevConfig(cracoConfig),
  sections: [
    {
      name: 'General Components',
      components: 'src/components/*.jsx'
    },
    {
      name: 'Domain Components',
      sections: [
        {
          name: 'Marketplace',
          components: 'src/domains/marketplace/components/*.jsx'
        },
      ]
    },
  ]
};
