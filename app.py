from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample responses for demonstration purposes
responses = {
    "hello": "Hello! How can I assist you today?",
    "how are you": "I'm just a program, but I'm here to help you!",
    "bye": "Goodbye! Have a great day!",
}

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '').lower()
    # Simple response logic
    response_message = responses.get(user_message, "I'm sorry, I don't understand that.")
    return jsonify({"response": response_message})

if __name__ == '__main__':
    app.run(debug=True)