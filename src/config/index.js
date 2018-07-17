module.exports = {
    'port': 8885,
    'https': false,
    'external_url': {
        'prod': 'aws-sns.kodeline.com',
        'dev': 'localhost'
    },
    'path': {
        'root': global.__root_dir + '/',
        'src': global.__root_dir + 'src/',
        'app': global.__root_dir + 'src/app/',
        'db': global.__root_dir + 'src/db/',
        'utils': global.__root_dir + 'src/utils/',
        'routes': global.__root_dir + 'src/routes/',
        'public': global.__root_dir + 'public/',
        'docs': global.__root_dir + 'docs/'
    },
    'db': {
        'prod': {
            'host': 'mongodb://127.0.0.1:27999/aws-sns'
        },
        'dev': {
            'host': 'mongodb://127.0.0.1:27017/aws-sns'
        }
    },
};