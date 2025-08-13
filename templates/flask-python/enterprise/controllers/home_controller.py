from flask import Blueprint, render_template, jsonify
from ..services.api_service import get_data
home_bp = Blueprint('home', __name__)
@home_bp.route('/')
def home():
    return render_template('home.html')
@home_bp.route('/api/data')
def data():
    return jsonify(get_data())
