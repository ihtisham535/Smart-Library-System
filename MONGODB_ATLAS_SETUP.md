# MongoDB Atlas Setup Guide

This guide will help you set up MongoDB Atlas for the Smart Library System.

## Step 1: Create a MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free" or "Sign In" if you already have an account
3. Complete the registration process

## Step 2: Create a Cluster

1. After logging in, you'll see the Atlas dashboard
2. Click "Create" or "Build a Database"
3. Choose the **FREE (M0)** tier
4. Select a cloud provider and region (choose the closest to you)
5. Give your cluster a name (e.g., "LibraryCluster")
6. Click "Create Cluster"
7. Wait 1-3 minutes for the cluster to be created

## Step 3: Create a Database User

1. In the Security section, click "Database Access"
2. Click "Add New Database User"
3. Choose "Password" authentication method
4. Enter a username (e.g., "libraryadmin")
5. Enter a strong password (save this password!)
6. Under "Database User Privileges", select "Atlas admin" or "Read and write to any database"
7. Click "Add User"

## Step 4: Configure Network Access

1. In the Security section, click "Network Access"
2. Click "Add IP Address"
3. For development, click "Allow Access from Anywhere" (0.0.0.0/0)
   - **Note:** For production, you should restrict this to specific IPs
4. Click "Confirm"

## Step 5: Get Your Connection String

1. Go back to "Database" section
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js" as the driver
5. Copy the connection string
   - It will look like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

## Step 6: Update Your .env File

1. Open the `backend` folder
2. Create a `.env` file (if it doesn't exist)
3. Paste your connection string and modify it:

```env
MONGODB_URI=mongodb+srv://libraryadmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/librarydb?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

**Important:**
- Replace `YOUR_PASSWORD` with the password you created in Step 3
- Replace `cluster0.xxxxx.mongodb.net` with your actual cluster address
- Add `/librarydb` before the `?` to specify the database name
- Make sure there are no spaces in the connection string

## Step 7: Test the Connection

1. Start your backend server:
```bash
cd backend
npm start
```

2. You should see:
```
✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
📚 Database: librarydb
Server is running on port 5000
```

If you see an error, check:
- Your password is correct (no special characters need URL encoding)
- Your IP address is whitelisted
- Your connection string is correct
- Your cluster is running (not paused)

## Troubleshooting

### Error: "Authentication failed"
- Double-check your username and password
- Make sure you're using the database user password, not your Atlas account password
- Special characters in passwords may need URL encoding (e.g., `@` becomes `%40`)

### Error: "IP not whitelisted"
- Go to Network Access in Atlas
- Add your current IP address or use 0.0.0.0/0 for development

### Error: "Connection timeout"
- Check if your cluster is running (not paused)
- Verify your internet connection
- Check if your firewall is blocking the connection

### Special Characters in Password
If your password contains special characters, you need to URL encode them:
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `&` → `%26`
- `+` → `%2B`
- `=` → `%3D`

Or better yet, create a password without special characters for easier setup.

## Example .env File

```env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://libraryadmin:MySecurePassword123@cluster0.abc123.mongodb.net/librarydb?retryWrites=true&w=majority

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (optional - leave empty to allow all localhost ports)
FRONTEND_URL=
```

## Next Steps

Once your MongoDB Atlas is connected:
1. Your backend server should start successfully
2. You can start adding books through the frontend
3. Books will be stored in your MongoDB Atlas database
4. You can view your data in MongoDB Atlas under "Browse Collections"

