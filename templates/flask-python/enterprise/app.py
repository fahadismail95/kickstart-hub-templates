from flask import Flask, jsonify
app = Flask(__name__)
@app.route('/')
def home():
    return jsonify(message='Welcome to Flask Enterprise!')
@app.route('/api/data')
def data():
    return jsonify(message='Enterprise API Data')
