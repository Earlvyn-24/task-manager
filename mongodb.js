const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const main = async () => {
    const client = new MongoClient(connectionURL);

    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');

        const db = client.db(databaseName);

        const UpdateTask = await db.collection('tasks').updateMany(
            { completed: false },
            { $set: { completed: true } }

        );

        console.log(`🔁 Updated ${UpdateTask.modifiedCount} tasks`);

    } catch (error) {
        console.error('❌ Unable to fetch CRUD:', error);
    } finally {
        await client.close();
        console.log('🔒 Connection closed');
    }
};

main();