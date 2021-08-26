from flask import Flask
'''from flask.wrappers import Request;'''
from flask import request
from flask_cors import CORS;

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def index():
    return "Welcome to CodezUp"

@app.route("/login/" , methods=['GET', 'POST'])

def login():
     if request.method == 'POST':
         return "Login Page"
     else:
         return "Register Page"

if __name__ == '__main__':
    app.run(debug=True)