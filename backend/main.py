from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime, timezone
from werkzeug.security import generate_password_hash, check_password_hash  # <-- import check_password_hash

app = Flask(__name__)
CORS(app)

# === MongoDB Connection ===
app.config["MONGO_URI"] = "mongodb://localhost:27017/idp_clone"
mongo = MongoClient(app.config["MONGO_URI"])
db = mongo.get_database()

contact_collection = db.contacts
users_collection = db.Users

# === CONTACT FORM API ===
@app.route("/contact", methods=["POST"])
def save_contact():
    if contact_collection is None:
        return jsonify({"message": "Database connection not established"}), 500

    try:
        data = request.get_json()
        print("📩 Received contact data:", data)

        if not data:
            return jsonify({"message": "No data received"}), 400

        # ✅ Check for duplicate email
        existing_contact = contact_collection.find_one({"email": data.get("email")})
        if existing_contact:
            print("⚠️ Duplicate email detected:", data.get("email"))
            return jsonify({"message": "Email already in use"}), 409  # Conflict

        # Add timestamp
        data["createdAt"] = datetime.now(timezone.utc)

        # Insert into MongoDB
        result = contact_collection.insert_one(data)

        return jsonify({
            "message": "Contact saved successfully!",
            "id": str(result.inserted_id)
        }), 201

    except Exception as e:
        print("❌ Error saving contact:", str(e))
        return jsonify({"message": str(e)}), 500

# === SIGNUP API ===
@app.route("/signup", methods=["POST"])
def signup():
    if users_collection is None:
        return jsonify({"message": "Database connection not established"}), 500

    try:
        data = request.get_json()
        print("📩 Received signup data:", data)

        if not data:
            return jsonify({"message": "No data received"}), 400

        fullName = data.get("fullName")
        email = data.get("email")
        password = data.get("password")

        # Validate required fields
        if not fullName or not email or not password:
            return jsonify({"message": "Missing required fields"}), 400

        # ✅ Check if email already exists
        existing_user = users_collection.find_one({"email": email})
        if existing_user:
            print("⚠️ Duplicate signup email:", email)
            return jsonify({"message": "Email already in use"}), 409

        # Hash the password
        hashed_password = generate_password_hash(password)

        # Create new user document
        new_user = {
            "fullName": fullName,
            "email": email,
            "password": hashed_password,
            "createdAt": datetime.now(timezone.utc)
        }

        # Insert into MongoDB
        result = users_collection.insert_one(new_user)

        return jsonify({
            "message": "Account created successfully!",
            "id": str(result.inserted_id)
        }), 201

    except Exception as e:
        print("❌ Error while creating user:", str(e))
        return jsonify({"message": str(e)}), 500

# === LOGIN API ===
@app.route("/login", methods=["POST", "OPTIONS"])
def login():
    if request.method == "OPTIONS":
        # Handle CORS preflight request
        return jsonify({"status": "OK"}), 200

    try:
        data = request.get_json()
        print("📩 Received login data:", data)

        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return jsonify({"message": "Email and password are required"}), 400

        # Find user in MongoDB
        user = users_collection.find_one({"email": email})
        if not user:
            return jsonify({"message": "Invalid email or password"}), 401

        # Check password
        if not check_password_hash(user["password"], password):
            return jsonify({"message": "Invalid email or password"}), 401

        # Successful login
        return jsonify({
            "message": "Login successful",
            "user": {
                "id": str(user["_id"]),
                "fullName": user["fullName"],
                "email": user["email"]
            }
        }), 200

    except Exception as e:
        print("❌ Error during login:", str(e))
        return jsonify({"message": "Internal Server Error"}), 500

# === CONNECTION CHECK API ===
@app.route("/check_connection", methods=["GET"])
def check_connection():
    try:
        mongo.admin.command("ping")
        return jsonify({"message": "Connected successfully to MongoDB!"}), 200
    except Exception as e:
        return jsonify({"message": f"Connection failed: {e}"}), 500


if __name__ == "__main__":
    app.run(port=8000, debug=True)
