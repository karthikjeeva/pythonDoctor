from flask import Flask;
from flask_cors import CORS;

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])

def index():
    return "Welcome to CodezUp"

if __name__ == '__main__':
    app.run(debug=True)



""" @app.route("/login/" , methods=['GET', 'POST'])
 def login():
     if request.method == 'POST':
         return "Login Page"
     else:
         return "Register Page" """