export const getEnvVar = (key, defaultValue = '') => {
    const value = process.env[key];
    if (!value) {
        console.error(`Environment variable ${key} is not set.`);
        return defaultValue;
    }
    return value;
};