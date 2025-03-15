export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '\\.svg$': 'jest-transform-stub',
    },
    transformIgnorePatterns: [
        '/node_modules/',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};