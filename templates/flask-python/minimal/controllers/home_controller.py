from flask import Blueprint
home_bp = Blueprint('home', __name__)
@home_bp.route('/')
def hello():
    return '<h1>Hello World from Flask Minimal!</h1>'
