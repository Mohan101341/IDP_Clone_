from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime, timezone
from werkzeug.security import generate_password_hash, check_password_hash  # <-- import check_password_hash

# Create a Flask application instance
app = Flask(__name__)
# Enable Cross-Origin Resource Sharing (CORS) for the Flask app
CORS(app)

# === MongoDB Connection ===
# Configure the MongoDB URI
app.config["MONGO_URI"] = "mongodb://localhost:27017/idp_clone"
# Create a MongoDB client
mongo = MongoClient(app.config["MONGO_URI"])
# Get the database from the client
db = mongo.get_database()

# Get the collections from the database
Top_universities = db["Top_universities_Australia"]
contact_collection = db.contacts
users_collection = db.Users
collection = db.Top_universities_Australia  # Collection for universities data

# === CONTACT FORM API ===
# This route handles the contact form submission.
@app.route("/contact", methods=["POST"])
def save_contact():
    # Check if the database connection is established
    if contact_collection is None:
        return jsonify({"message": "Database connection not established"}), 500

    try:
        # Get the JSON data from the request
        data = request.get_json()
        print("📩 Received contact data:", data)

        # Check if data is received
        if not data:
            return jsonify({"message": "No data received"}), 400

        # ✅ Check for duplicate email
        existing_contact = contact_collection.find_one({"email": data.get("email")})
        if existing_contact:
            print("⚠️ Duplicate email detected:", data.get("email"))
            return jsonify({"message": "Email already in use"}), 409  # Conflict

        # Add a timestamp to the data
        data["createdAt"] = datetime.now(timezone.utc)

        # Insert the data into the contacts collection
        result = contact_collection.insert_one(data)

        # Return a success message
        return jsonify({
            "message": "Contact saved successfully!",
            "id": str(result.inserted_id)
        }), 201

    except Exception as e:
        # Handle exceptions and return an error message
        print("❌ Error saving contact:", str(e))
        return jsonify({"message": str(e)}), 500


# === SIGNUP API send the data to users collection ===
# This route handles the user signup.
@app.route("/signup", methods=["POST"])
def signup():
    # Check if the database connection is established
    if users_collection is None:
        return jsonify({"message": "Database connection not established"}), 500

    try:
        # Get the JSON data from the request
        data = request.get_json()
        print("📩 Received signup data:", data)

        # Check if data is received
        if not data:
            return jsonify({"message": "No data received"}), 400

        # Get the user details from the data
        fullName = data.get("fullName")
        email = data.get("email")
        password = data.get("password")

        # Validate required fields 
        if not fullName or not email or not password:
            return jsonify({"message": "Missing required fields"}), 400

        #  Check if email already exists
        existing_user = users_collection.find_one({"email": email})
        if existing_user:
            print("⚠️ Duplicate signup email:", email)
            return jsonify({"message": "Email already in use"}), 409

        # Hash the password for security
        hashed_password = generate_password_hash(password)

        # Create a new user document
        new_user = {
            "fullName": fullName,
            "email": email,
            "password": hashed_password,
            "createdAt": datetime.now(timezone.utc)
        }

        # Insert the new user into the users collection
        result = users_collection.insert_one(new_user)

        # Return a success message
        return jsonify({
            "message": "Account created successfully!",
            "id": str(result.inserted_id)
        }), 201

    except Exception as e:
        # Handle exceptions and return an error message
        print("❌ Error while creating user:", str(e))
        return jsonify({"message": str(e)}), 500
    

# === LOGIN API check the credentials and return success message===
# This route handles the user login.
@app.route("/login", methods=["POST", "OPTIONS"])
def login():
    # Handle CORS preflight request
    if request.method == "OPTIONS":
        return jsonify({"status": "OK"}), 200

    try:
        # Get the JSON data from the request
        data = request.get_json()
        print("📩 Received login data:", data)

        # Get the email and password from the data
        email = data.get("email")
        password = data.get("password")

        # Check if email and password are provided
        if not email or not password:
            return jsonify({"message": "Email and password are required"}), 400

        # Find the user in the users collection
        user = users_collection.find_one({"email": email})
        if not user:
            return jsonify({"message": "Invalid email or password"}), 401

        # Check if the password is correct
        if not check_password_hash(user["password"], password):
            return jsonify({"message": "Invalid email or password"}), 401

        # Return a success message with user details
        return jsonify({
            "message": "Login successful",
            "user": {
                "id": str(user["_id"]),
                "fullName": user["fullName"],
                "email": user["email"]
            }
        }), 200

    except Exception as e:
        # Handle exceptions and return an error message
        print("❌ Error during login:", str(e))
        return jsonify({"message": "Internal Server Error"}), 500

# === CONNECTION CHECK API ===
# This route checks the connection to the MongoDB database.
@app.route("/check_connection", methods=["GET"])
def check_connection():
    try:
        # Ping the database to check the connection
        mongo.admin.command("ping")
        return jsonify({"message": "Connected successfully to MongoDB!"}), 200
    except Exception as e:
        return jsonify({"message": f"Connection failed: {e}"}), 500
    

# === GET UNIVERSITIES DATA API ===
# This route fetches the universities data from the database.
@app.route("/universities", methods=["GET"])
def get_universities():
    # Find all universities and exclude the _id field
    universities = list(Top_universities.find({}, {"_id": 0}))
    print(universities)
    return jsonify(universities)

# Run the Flask app
if __name__ == "__main__":
    app.run(port=8000, debug=True)
